(ns storyboard.view.handler
  (:use compojure.core
        [hiccup core page]
        [hiccup.middleware :only (wrap-base-url)]
        [storyboard.macro.compojure-macro :only (|-|)]
        [clojure.string :only (blank?)]
        storyboard.view.read)
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [cheshire.core :refer :all]))


(defroutes app-routes
  (GET "/:workId" [workId] (read-work workId))
  (|-| retrieveWork ?bookId ?page
       (retrieve-work bookId page))
  (route/resources "/")
  (route/not-found "Not Found"))


(def app
  (-> (handler/site app-routes)
      (wrap-base-url)))





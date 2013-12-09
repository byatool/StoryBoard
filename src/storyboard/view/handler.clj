(ns storyboard.view.handler
  (:use compojure.core
        [hiccup core page]
        [hiccup.middleware :only (wrap-base-url)]
        [clojure.string :only (blank? join)]
        [storyboard.macro.compojure-macro :only (|-|)]
        [storyboard.view.work :only (adjust-work-title)]
        [storyboard.view.chapter :only (adjust-chapter-title)]
        [storyboard.view.page :only (adjust-page-body)]
        storyboard.view.read)
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [cheshire.core :refer :all]))


(defroutes app-routes
  (GET "/:workId" [workId] (read-work workId))
  (|-| retrieveWork ?workId ?page
       (retrieve-work (Integer. workId) (Integer. page)))
   (|-| updateChapterTitle ?text ?itemId
       (do
         (adjust-chapter-title (Integer. itemId) text)
         (generate-string {:MessageItems [{:Message "success" :MessageType "error"}]})))
   (|-| updatePageBody ?text ?itemId
        (do
          (adjust-page-body (Integer. itemId) text)
          (generate-string {:MessageItems [{:Message "success" :MessageType "error"}]})))
   (|-| updateWorkTitle ?text ?itemId
       (do
         (adjust-work-title (Integer. itemId) text)
         (generate-string {:MessageItems [{:Message "success" :MessageType "error"}]})))
   
   
   
   (route/resources "/")
   (route/not-found "Not Found"))


(def app
  (-> (handler/site app-routes)
      (wrap-base-url)))





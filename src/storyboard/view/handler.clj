(ns storyboard.view.handler
  (:use compojure.core
        clojure.tools.trace
        [hiccup core page]
        [hiccup.middleware :only (wrap-base-url)]
        [clojure.string :only (blank? join)]
        [storyboard.macro.compojure-macro :only (|-|)]
        [storyboard.view.author :only
         (update-author-name
          update-author-summary)]
        [storyboard.view.work :only
         (update-work-summary
          update-work-title
          retrieve-work-information)]
        [storyboard.view.chapter :only (update-chapter-title)]
        [storyboard.view.page :only (update-page-body)]
        storyboard.view.read)
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [cheshire.core :refer :all]))


(defroutes app-routes
  
  (GET "/workInformation/:workId" [workId]
       (generate-string (retrieve-work-information (Integer. workId))))
  
  (GET "/retrieveWork/:workId" [workId page]
       (retrieve-work (Integer. workId) (Integer. page)))
  
  (|-| updateAuthorSummary ?text ?itemId
       (do
         (update-author-summary (Integer. itemId) text)
         (generate-string {:MessageItems [{:Message "success" :MessageType "error"}]})))
  
  (|-| updateAuthorName ?text ?itemId
       (do
         (update-author-name (Integer. itemId) text)
         (generate-string {:MessageItems [{:Message "success" :MessageType "error"}]})))
  
  (|-| updateChapterTitle ?text ?itemId
       (do
         (update-chapter-title (Integer. itemId) text)
         (generate-string {:MessageItems [{:Message "success" :MessageType "error"}]})))
  
  (|-| updatePageBody ?text ?itemId
       (do
         (update-page-body (Integer. itemId) text)
         (generate-string {:MessageItems [{:Message "success" :MessageType "error"}]})))
  
  (|-| updateWorkSummary ?text ?itemId
       (do
         (update-work-summary (Integer. itemId) text)
         (generate-string {:MessageItems [{:Message "success" :MessageType "error"}]})))
  
  (|-| updateWorkTitle ?text ?itemId
       (do
         (update-work-title (Integer. itemId) text)
         (generate-string {:MessageItems [{:Message "success" :MessageType "error"}]})))
  (GET "/:workId" [workId]
       (read-work workId))
  
  (route/resources "/")
  (route/not-found "Not Found"))


(def app
  (-> (handler/site app-routes)
      (wrap-base-url)))





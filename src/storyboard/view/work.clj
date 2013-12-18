(ns storyboard.view.work
  (:use
   [storyboard.data.fake :only
    (update-works-summary
     update-works-title
     retrieve-work-information-base)]
   clojure.tools.trace))

;; Get

(defn retrieve-work-information [work-id]
  (retrieve-work-information-base work-id))

;; Post

(defn update-work-summary [id summary]
   (update-works-summary id summary))

(defn update-work-title [id title]
  (update-works-title id title))


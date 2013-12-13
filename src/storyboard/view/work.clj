(ns storyboard.view.work
  (:use
   [storyboard.data.fake :only (works update-work-title retrieve-work-information-base)]
   clojure.tools.trace))

(defn adjust-work-title [id title]
  (update-work-title id title))


(defn retrieve-work-information [work-id]
  (retrieve-work-information-base work-id))

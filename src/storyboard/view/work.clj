(ns storyboard.view.work
  (:use
   [storyboard.data.fake :only (works update-work-title)]
   clojure.tools.trace))

(defn adjust-work-title [id title]
  (update-work-title id title))

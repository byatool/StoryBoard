(ns storyboard.view.chapter
  (:use
   [storyboard.data.fake :only (update-chapters-title)]
   clojure.tools.trace))

(defn update-chapter-title [id title]
  (update-chapters-title id title))

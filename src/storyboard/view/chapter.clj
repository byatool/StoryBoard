(ns storyboard.view.chapter
  (:use
   [storyboard.data.fake :only (chapters update-chapter-title)]
   clojure.tools.trace))


(defn adjust-chapter-title [id title]
  (update-chapter-title id title))

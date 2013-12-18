(ns storyboard.view.author
  (:use
   clojure.tools.trace
   [storyboard.data.fake :only
    (update-authors-name
     update-authors-summary)]))


(defn update-author-name [id author-name]
  (update-authors-name id author-name))

(defn update-author-summary [id author-summary]
  (update-authors-summary id author-summary))

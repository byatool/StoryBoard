(ns storyboard.view.page
  (:use
   [storyboard.data.fake :only (pages update-pages-body)]
   clojure.tools.trace))


(defn update-page-body [id body]
  (update-pages-body id body))

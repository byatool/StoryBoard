(ns storyboard.view.page
  (:use
   [storyboard.data.fake :only (pages update-page-body)]
   clojure.tools.trace))


(defn adjust-page-body [id body]
  (update-page-body id body))

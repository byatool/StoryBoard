(ns storyboard.view.page
  (:use
   [storyboard.data.fake :only (pages update-pages-body)]
   [storyboard.data.page :only (retrieve-page-work-items-base)]
   clojure.tools.trace))


(defn update-page-body [id body]
  (update-pages-body id body))


(defn retrieve-page-wall-items [page-id page]
  (retrieve-page-work-items-base page-id page))

(ns storyboard.data.page
  (:use
   [clojure.string :only (join)]
   clojure.tools.trace
   [storyboard.macro.clojure-macro :only
    (|->)]
   [storyboard.data.fake :only
    (pages page-items)]
   [storyboard.utility.web-utility :only
    (resolve-next-page
     resolve-previous-page
     resolve-total-count-of-pages)])
  (:require
   storyboard.data.model)
  (:import
   [storyboard.data.model
    MethodResult
    PageWallItem]))


(def items-per-page 5)

(defn retrieve-page-id-by-work-id [work-id]
  (:id (first (filter #(= work-id (:id (:work (:chapter %)))) pages))))


(defn retrive-page-item-count [page-id]
  (count (filter #(= page-id (:id (:page %))) page-items)))


(defn retrieve-page-work-items-base [page-id page]
  (let [total-count-of-pages (resolve-total-count-of-pages (retrive-page-item-count page-id) items-per-page)
        previous-page        (resolve-previous-page page)
        next-page            (resolve-next-page page total-count-of-pages)
        page-wall-items
        (|->
         page-items
         (filter #(= page-id (:id (:page %))))
         (map #(PageWallItem.
                (:id %)
                (:body %)
                page-id
                "11/11/2013"
                (:name (:author %)))))]
    
    (MethodResult.
     previous-page
     next-page
     total-count-of-pages
     page-wall-items)))

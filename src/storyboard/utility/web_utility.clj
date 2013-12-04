(ns storyboard.utility.web-utility
  (:use
   [clojure.string :only (join capitalize blank?)]))

(defn append-return [& to-append]
  "untested"
  (join
   (map #(str % "\r ") (vec to-append))))


(defn resolve-previous-page [page]
  "untested"
  (if (> page 0)
    (- page 1 )
    page))


(defn resolve-next-page [page total-count-of-pages]
  "untested"
  (if (< page (- total-count-of-pages 1))
    (+ 1 page)
    page))


(defn to-key [sortBy]
  "untested"
  (keyword (str (capitalize (first sortBy)) (join (rest sortBy)))))

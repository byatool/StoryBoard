(ns storyboard.data.fake
  (:use
   [clojure.string :only (join)]
   faker.name
   faker.lorem))


(defrecord Author [id name works])
(defrecord Chapter [id title work])
(defrecord Page [id body chapter])
(defrecord Work [id title author chapters])


(def authors [(Author. 1 "sean" [])])
(def works [(Work. 1 "Work Title" (first authors) [])])
(def chapters [(Chapter. 1 "chapter 1" (first works))])
(def pages [(Page. 1 "This is the body." (first chapters))])






;; (count (filter #(=  1 (:id (:work %)))  chapters))

;; (count  (filter #(= 1 :id (:id (:work (first chapters))))) )



;; (defn add-list-to-parent [list-to-add parent key-word]
;;   (assoc parent key-word (into (key-word parent) list-to-add)))

;; (def works (add-list-to-parent chapters (first works) :chapters))
;; (def works (assoc (first works) :chapters (into (:chapters (first works)) chapters)))




;; (def test-me (author. 10 "sean" []))
;; (def test-me (assoc test-me :works (into (:works test-me) [1])))

;; (:works test-me)
;; (into (:works test-me) [1])

;; (defn create-chapters [count work]
;;   (map #(Chapter. % (join ["Chapter " %]) work) (range 0 count)))



;; (create-chapters 5 (Work. 10 "titile" {} []))


;; (defn create-users []
;;   (map create- (range 0 20)))




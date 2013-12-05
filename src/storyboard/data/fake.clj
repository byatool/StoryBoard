(ns storyboard.data.fake
  (:use
   [clojure.string :only (join)]
   clojure.tools.trace
   faker.name
   faker.lorem))


(defrecord Author [id name works])
(defrecord Chapter [id title work])
(defrecord Page [id body chapter])
(defrecord Work [id title author chapters])


(def authors [(Author. 1 "sean" [])])
(def works [(Work. 1 "Work Title" (first authors) [])])
(def chapters [(Chapter. 1 "chapter 1" (first works))
               (Chapter. 2 "chapter 2" (first works))])
(def pages [(Page. 1 "This is the first body." (first chapters))
            (Page. 2 "This is the second body." (first chapters))])

(defn update-chapter-title [id text]
  (def chapters (map
                 #(if (= id (:id %))
                    (assoc % :title text )
                    %)
                 chapters)))

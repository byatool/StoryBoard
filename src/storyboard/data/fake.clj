(ns storyboard.data.fake
  (:use
   [clojure.string :only (join)]
   clojure.tools.trace
   faker.name
   faker.lorem))


(defrecord Author [id name works])
(defrecord Chapter [id title work])
(defrecord Page [id body order chapter])
(defrecord Work [id title author chapters])


;; Mock database
(def authors [(Author. 1 "sean" [])])
(def works [(Work. 1 "Work Title" (first authors) [])])
(def chapters [(Chapter. 1 "chapter 1" (first works))
               (Chapter. 2 "chapter 2" (first works))])
(def pages [(Page. 10 "This is the first body."  1 (first chapters))
            (Page. 22 "This is the second body." 2 (first chapters))])


;; MOCK database methods

(defn update-chapter-title [id text]
  (def chapters (map
                 #(if (= id (:id %))
                    (assoc % :title text )
                    %)
                 chapters)))


(defn update-page-body [id text]
  (do
    (trace id)
    (def pages (map
                #(if (= id (:id %))
                   (assoc % :body text)
                  %)
                pages))))

(defn update-work-title [id text]
  (def works (map
              #(if (= id (:id %))
                 (assoc % :title text )
                 %)
              works)))

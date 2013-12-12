(ns storyboard.data.fake
  (:use
   [clojure.string :only (join)]
   clojure.tools.trace
   faker.name
   faker.lorem))

(def base-paragraph "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat mi in tellus sodales, ac bibendum augue fermentum. Quisque eu dui malesuada, cursus augue at, suscipit justo. Nam venenatis mollis ultricies. Quisque quis lectus ligula. Nunc quis ante id lorem scelerisque euismod. Praesent viverra ligula vitae eleifend commodo. Duis mauris quam, interdum et laoreet ac, varius euismod nunc. Curabitur lacinia leo eu lobortis imperdiet.

Nam vehicula vulputate ante eget lacinia. Maecenas mauris velit, fermentum et est placerat, vestibulum ornare metus. Maecenas eget libero et purus porttitor aliquam eget at metus. Integer sed ullamcorper ante. Nulla facilisi. Maecenas sed ligula ligula. Nullam quam turpis, auctor vel metus et, accumsan volutpat velit. Etiam urna odio, varius iaculis faucibus id, sollicitudin vel enim. Nunc vel metus nibh. Mauris feugiat bibendum mi sit amet tincidunt. Proin turpis leo, gravida ut nunc quis, blandit cursus nunc. Morbi lacinia pretium ante eu ullamcorper. Sed sodales consequat orci, sit amet pharetra eros iaculis nec. Aenean congue sagittis risus eu pellentesque. Proin imperdiet, nisi ut eleifend aliquam, risus ligula elementum erat, nec semper tellus diam sed lorem.

Nullam tincidunt ipsum ante, at ullamcorper neque feugiat non. Aliquam nec pulvinar sem. Curabitur non cursus lacus. Curabitur non tristique elit. Nullam ante orci, molestie a molestie luctus, suscipit sed quam. Proin rhoncus vel urna vitae ullamcorper. Duis sed erat ut dui commodo tincidunt. Ut non tempor dolor. Ut congue nibh arcu, id varius odio vestibulum ac. Mauris eleifend arcu quis neque cursus egestas. Pellentesque quis lectus dapibus, eleifend sem id, sagittis diam. Fusce vitae laoreet risus, eu venenatis nunc. Proin tristique sem odio, nec lobortis nisi rutrum blandit. Quisque ligula metus, rutrum ac metus sit amet, cursus placerat nibh. Vivamus lacinia lacinia nibh at fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus.")

(defrecord Author [id name works])
(defrecord Chapter [id title work])
(defrecord Page [id body order chapter])
(defrecord Work [id title author summary chapters])


(defn paragraph-part [size to-drop]
  (join (take size (drop to-drop base-paragraph))))

;; Mock database
(def authors [(Author. 1 "sean" [])])
(def works [(Work. 1 (paragraph-part 20 0) (first authors) (paragraph-part 20 0) [])])
(def chapters [(Chapter. 1 "chapter 1" (first works))
               (Chapter. 2 "chapter 2" (first works))])
(def pages [(Page. 10 (paragraph-part 100 0) 1 (first chapters))
            (Page. 22 (paragraph-part 100 100) 2 (first chapters))])


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

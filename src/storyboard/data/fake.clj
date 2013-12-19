(ns storyboard.data.fake
  (:use
   [clojure.string :only (join)]
   clojure.tools.trace
   [cheshire.core :only (generate-string)]
   faker.name
   faker.lorem
   [storyboard.utility.web-utility :only (append-return resolve-next-page resolve-previous-page)])
  (:require
   storyboard.data.model)
  (:import
   [storyboard.data.model
    Author
    Chapter
    Page
    WallItem
    Work
    WorkBasicInfoResponse
    WorkPageResponse]))


;; [storyboard.data.model :only (Work Chapter Page)]

(def items-per-page 1)

(def base-paragraph "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat mi in tellus sodales, ac bibendum augue fermentum. Quisque eu dui malesuada, cursus augue at, suscipit justo. Nam venenatis mollis ultricies. Quisque quis lectus ligula. Nunc quis ante id lorem scelerisque euismod. Praesent viverra ligula vitae eleifend commodo. Duis mauris quam, interdum et laoreet ac, varius euismod nunc. Curabitur lacinia leo eu lobortis imperdiet.

Nam vehicula vulputate ante eget lacinia. Maecenas mauris velit, fermentum et est placerat, vestibulum ornare metus. Maecenas eget libero et purus porttitor aliquam eget at metus. Integer sed ullamcorper ante. Nulla facilisi. Maecenas sed ligula ligula. Nullam quam turpis, auctor vel metus et, accumsan volutpat velit. Etiam urna odio, varius iaculis faucibus id, sollicitudin vel enim. Nunc vel metus nibh. Mauris feugiat bibendum mi sit amet tincidunt. Proin turpis leo, gravida ut nunc quis, blandit cursus nunc. Morbi lacinia pretium ante eu ullamcorper. Sed sodales consequat orci, sit amet pharetra eros iaculis nec. Aenean congue sagittis risus eu pellentesque. Proin imperdiet, nisi ut eleifend aliquam, risus ligula elementum erat, nec semper tellus diam sed lorem.

Nullam tincidunt ipsum ante, at ullamcorper neque feugiat non. Aliquam nec pulvinar sem. Curabitur non cursus lacus. Curabitur non tristique elit. Nullam ante orci, molestie a molestie luctus, suscipit sed quam. Proin rhoncus vel urna vitae ullamcorper. Duis sed erat ut dui commodo tincidunt. Ut non tempor dolor. Ut congue nibh arcu, id varius odio vestibulum ac. Mauris eleifend arcu quis neque cursus egestas. Pellentesque quis lectus dapibus, eleifend sem id, sagittis diam. Fusce vitae laoreet risus, eu venenatis nunc. Proin tristique sem odio, nec lobortis nisi rutrum blandit. Quisque ligula metus, rutrum ac metus sit amet, cursus placerat nibh. Vivamus lacinia lacinia nibh at fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus.")


(defn paragraph-part [size to-drop]
  (join (take size (drop to-drop base-paragraph))))

;; Mock database
(def authors [(Author. 1 "sean" "this is the summary" [])])
(def works [(Work. 1 (paragraph-part 20 0) (first authors) (paragraph-part 300 0) [])])
(def chapters [(Chapter. 1 "chapter 1" (first works))
               (Chapter. 2 "chapter 2" (first works))])
(def pages [(Page. 10 (paragraph-part 100 0) 0 (first chapters))
            (Page. 22 (paragraph-part 100 100) 1 (first chapters))])
(def page-items [(WallItem. 15 (paragraph-part 100 0)  (first authors) (first pages))
                 (WallItem. 16 (paragraph-part 100 101) (first authors) (first pages))
                 (WallItem. 17 (paragraph-part 100 201)  (first authors) (second pages))
                 (WallItem. 18 (paragraph-part 100 301)  (first authors) (second pages))])


;; MOCK database macros


(defmacro update-text [name property]
  "This is only to be used with mocked/in memory updates"
  `(def ~(symbol (join ["update-" (str name) "-" (str property)]))
     (fn [~(symbol "id") ~(symbol "text")]
       (def ~(symbol (str name))
         (map
          #(if (= ~(symbol "id") (:id %))
             (assoc % ~(keyword (str property)) ~(symbol "text"))
             %)
          ~(symbol (str name)))))))


;; MOCK database methods

(defn retrieve-author-actual [work]
  (first
   (filter #(= (:id (:author work)) (:id %)) authors)))

(defn retrieve-work-information-base [work-id]
  (first
   (map #(WorkBasicInfoResponse.
          (:id %)
          (:title %)
          (:summary %)
          (:id (:author %))
          (:name (retrieve-author-actual %))
          (:summary (retrieve-author-actual %)))
        (filter #(= work-id (:id %)) works))))


(defn retrieve-work-page [work-id page]
  (let [needed-work (first
                     (filter #(= work-id (:id %)) works))
        needed-page (first
                     (filter #(and
                               (= work-id (:id (:work (:chapter %))))
                               (= page (:order %))) 
                             pages))]
    (let [needed-chapter (first
                          (filter #(= (:id %) (:id (:chapter needed-page))) chapters))]
      (WorkPageResponse.
       (:id needed-chapter)
       (:title needed-chapter)
       (:id needed-page)
       (:body needed-page)
       (+ 1 page)))))


(defn retrieve-work-and-page [work-id page]
  (let [total-count-of-pages (/ (count pages) items-per-page)
        previous-page        (resolve-previous-page page)
        next-page            (resolve-next-page page total-count-of-pages)]
    (generate-string
     {:PreviousPage previous-page
      :NextPage next-page
      :TotalCountOfPages total-count-of-pages
      :List [(retrieve-work-page work-id page)]})))






(update-text authors name)
(update-text authors summary)
(update-text chapters title)
(update-text pages body)
(update-text works summary)
(update-text works title)

(ns storyboard.view.read
  (:use
   [hiccup core page]
   [cheshire.core :only (generate-string)]
   [storyboard.utility.web-utility :only (append-return resolve-next-page resolve-previous-page)]
   [storyboard.data.fake :only (authors works chapters pages)]
   [storyboard.view.default :only (master-page)]
   clojure.tools.trace ))

(defrecord workPageResponse [chapterId chapterTitle pageId workBody pageNumber])
(def items-per-page 1)


(defn read-work [book-id]
  (let [script-text (append-return
                     "var content = src.site.view.mainContent.initialize("
                     "  '1', "
                     "  'retrieveWork/', "
                     "  'updateChapterTitle/', "
                     "  'updateWorkTitle/', "
                     "  'updatePageBody/', "
                     "  'workContainer' "
                     " );"
                     " "
                     "var mainContainer = document.getElementById('mainContainer');"
                     "mainContainer.appendChild(content);")]
    (master-page
     [:div
      [:div {:id "mainContainer"}]
      [:script
       script-text]])))


(defn retrieve-work-page [work-id page]
  (let [needed-work (first
                     (filter #(= work-id (:id %)) works))
        needed-page (first
                     (drop (* page items-per-page)
                           (filter #(= work-id (:id (:work (:chapter %)))) pages)))]
    (let [needed-chapter (first
                          (filter #(= (:id %) (:id (:chapter needed-page))) chapters))]
      (do
        (trace page)
        (workPageResponse.
         (:id needed-chapter)
         (:title needed-chapter)
         (:id needed-page)
         (:body needed-page)
         page)))))


(defn retrieve-work [work-id page]
  (let [total-count-of-pages (/ (count pages) items-per-page)
        previous-page        (resolve-previous-page page)
        next-page            (resolve-next-page page total-count-of-pages)]
    (generate-string
     {:PreviousPage previous-page
      :NextPage next-page
      :TotalCountOfPages total-count-of-pages
      :List [(retrieve-work-page work-id page)]})))

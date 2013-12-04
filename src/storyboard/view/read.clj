(ns storyboard.view.read
  (:use
   [hiccup core page]
   [cheshire.core :only (generate-string)]
   [storyboard.utility.web-utility :only (append-return resolve-next-page resolve-previous-page)]
   [storyboard.data.fake :only (authors works chapters pages)]
   [storyboard.view.default :only (master-page)]))

(defrecord workPageResponse [authorName chapterId chapterTitle workId workBody workTitle])
(def items-per-page 1)


(defn read-work [book-id]
  (let [script-text (append-return
                     "var content = src.site.view.mainContent.initialize("
                     "  '1', "
                     "  'retrieveWork/', "
                     "  '', "
                     "  '', "
                     "  '', "
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
  (let [needed-work (first (filter #(= work-id (:id %)) works))
        needed-page (first
                     (drop (* page items-per-page)
                           (filter #(= work-id (:id (:work (:chapter %)))) pages)))]
    (workPageResponse.
     (:name (:author needed-work))
     (:id (:chapter needed-page))
     (:title (:chapter needed-page))
     (:id needed-work)
     (:body needed-page)
     (:title needed-work))))


(defn retrieve-work [work-id page]
  (let [total-count-of-pages 1
        previous-page        0
        next-page            0]
    (generate-string
     {:PreviousPage previous-page
      :NextPage next-page
      :TotalCountOfPages total-count-of-pages
      :List [(retrieve-work-page work-id page)]})))






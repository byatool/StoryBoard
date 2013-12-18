(ns storyboard.view.read
  (:use
   [hiccup core page]
   [cheshire.core :only (generate-string)]
   [storyboard.view.default :only (master-page)]
   clojure.tools.trace)
  (:require
   storyboard.data.model )
  (:import
   [storyboard.data.model WorkPageResponse]))

(defrecord workPageResponse [chapterId chapterTitle pageId workBody pageNumber])



(defn read-work [book-id]
  (let [script-text (append-return
                     "var content = src.site.view.mainContent.initialize("
                     "  '1', "
                     "  'retrieveWork', "
                     "  'updateChapterTitle/', "
                     "  'updateWorkTitle/', "
                     "  'updatePageBody/', "
                     "  'workInformation', "
                     "  'updateAuthorName/', "  ;; authorNameUpdate 
                     "  'updateAuthorSummary/', "  ;; authorSummaryUpdate
                     "  'updateWorkTitle/', "  ;; workTitleUpdate
                     "  'updateWorkSummary/', "  ;; workSummaryUpdate
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





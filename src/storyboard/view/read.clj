(ns storyboard.view.read
  (:use
   [hiccup core page]
   [clojure.string :only (join)]
   [storyboard.utility.web-utility :only (append-return)]
   [storyboard.view.default :only (master-page)]
   [storyboard.data.page :only [retrieve-page-id-by-work-id]]
   clojure.tools.trace)
  (:require
   storyboard.data.model )
  (:import
   [storyboard.data.model WorkPageResponse]))


(defn read-work [work-id]
  "At some point this will have to take in a page-id. If null, grab first. If not, use it."
  (let [page-id (retrieve-page-id-by-work-id (Integer. work-id))
        script-text (append-return
                     "var content = src.site.view.mainContent.initialize("
                     (join ["'" work-id "',"])
                     (join ["'" page-id "',"])
                     "  document, "
                     "  'retrieveWork', "
                     "  'updateChapterTitle/', "
                     "  'updateWorkTitle/', "
                     "  'updatePageBody/', "
                     "  'workInformation', "
                     "  'updateAuthorName/', "  ;; authorNameUpdate 
                     "  'updateAuthorSummary/', "  ;; authorSummaryUpdate
                     "  'updateWorkTitle/', "  ;; workTitleUpdate
                     "  'updateWorkSummary/', "  ;; workSummaryUpdate
                     "  'workContainer',  "
                     "  'addWall/', " ;; postWallTo,
                     "  'retrieveWall',  " ;; retrieveWallItemsUrl
                     "  'deleteWall/', " ;; deleteWallItemUrl
                     "  'editWall/' " ;; editWallItemUrl
                     " );"
                     " "
                     "var mainContainer = document.getElementById('mainContainer');"
                     "mainContainer.appendChild(content);")]
    (master-page
     [:div
      [:div {:id "mainContainer"}]
      [:script
       script-text]])))





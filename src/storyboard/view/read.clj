(ns storyboard.view.read
  (:use
   [hiccup core page]
   [cheshire.core :only (generate-string)]
   [storyboard.view.utility :only append-return]))


(defn master-page [to-inject]
  (html5
   [:head
    [:title "storyboard" ]
    (include-css "/css/final.css")
    (include-js "/script/final.js")]
   [:body
    to-inject]))

(defn read-work []
  (let [script-text (append-return
                     "var content = src.site.view.mainContent.initialize("
                     "  '10', "
                     "  'retrieveWork', "
                     "  '', "
                     "  '', "
                     "  '', "
                     "  'workContainer', "
                     " );"
                     
                     )]
    (master-page
     [:div
      [:div {:id "mainContainer"}]
      [:script ]])))


(defn retrieve-work [work-id]
  (generate-string {:chapterId 10
                    :chapterTitle "The chapter title."
                    :workId 1
                    :workBody "This is the body."
                    :workTitle "The work title."}))

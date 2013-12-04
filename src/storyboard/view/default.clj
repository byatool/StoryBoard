(ns storyboard.view.default
  (:use
   [hiccup core page]))

(defn master-page [to-inject]
  (html5
   [:head
    [:title "storyboard" ]
    (include-css "/css/final.css")
    (include-js "/script/final.js")]
   [:body
    to-inject]))

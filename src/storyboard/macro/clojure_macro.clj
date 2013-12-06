(ns storyboard.macro.clojure-macro)

;;(macroexpand '(t-> filter #(= 1 (:id %))))
;; (defmacro t-t[& items]
;;   `((partial ~@items)))






(defmacro t-t [start & items]
  `(
    ~start
    ~@(map #(cons (cons 'partial %) '()) items )))



(macroexpand
 '(t-t
   [1 2 3]
   (apply +)
   (apply +)))

(t-t
 (apply +) 2)

(macroexpand-1
 '(->
   [1 2 3]
   ((partial apply +))))





(reverse [1 2 3])

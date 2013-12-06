(ns storyboard.macro.clojure-macro)




;; (defmacro t-t [start & items]
;;   `(
;;     ~start
;;     ~@(map #(cons (cons 'partial %) '()) items )))



(defmacro t-t [& items]
  `(
     ~@(map #(cons (cons 'partial %) '()) items )))

(macroexpand
 '(->
   [1 2 3]
   (t-t
    (apply +)
    (apply -))))
(macroexpand
 '(->
   [1 2 3]
   ((partial apply +))))




(macroexpand
 '(t-t
   (apply +)
   (apply +)
   (filter #(= 1 %))))

(t-t
 (apply +) 2)

(macroexpand-1
 '(->
   [1 2 3]
   ((partial apply +))))





(reverse [1 2 3])

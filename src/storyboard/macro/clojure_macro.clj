(ns storyboard.macro.clojure-macro)


;; (|->
;;  (range 0 20)
;;  (drop 5)
;;  (take 5)
;;  (map #(+ 1 %)))
(defmacro |-> [original & items]
  `(->
    ~original
    ~@(map #(cons (cons 'partial %) '()) items )))


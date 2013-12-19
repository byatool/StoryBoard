(ns storyboard.data.model)


;; Data store

(defrecord Author [id name summary works])
(defrecord Chapter [id title work])
(defrecord Page [id body order chapter])
(defrecord Work [id title author summary chapters])

(defrecord WallItem [id body author page])

;; Response
(defrecord PageWallItem [Id Text SubjectId Date Username])
(defrecord WorkBasicInfoResponse [workId workTitle workSummary authorId authorName authorSummary])
(defrecord WorkPageResponse [chapterId chapterTitle pageId workBody pageNumber])


(defrecord MethodResult [PreviousPage NextPage TotalCountOfPages List])

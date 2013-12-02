goog.require('goog.dom');
goog.require('src.base.control.controlConstant');
goog.require('src.base.control.editableDiv');
goog.require('src.base.helper.domCreation');
goog.require('src.site.view.workContentRow.constant');


goog.provide('src.site.view.workContentRow');

/* PRIVATE FUNCTIONS */

/**
 @param {string} id The div id.
 @param {string} cssClass The div css class.
 @param {function} createADiv The function used to create
 the div.
 @return {Object} The created div.
 @private
 */
src.site.view.workContentRow.createAnEmptyDiv_ =
  function(id, cssClass, createADiv) {

    var Constant_ = src.site.view.workContentRow.constant;
    var ControlConstant_ = src.base.control.controlConstant;

    var divAttributes = {};
    divAttributes[ControlConstant_.Id] = id;
    divAttributes[ControlConstant_.Class] = cssClass;

    return createADiv(divAttributes);
  };


/* PROTECTED FUNCTIONS */

/**
 @param {Object} currentItem The current row information
 item.
 @param {Object} options The overall grid options.
 @param {function} createADiv The function used to create the
 body container.
 @param {function} initializeEditableDiv The function used
 to create editable divs.
 @param {function} appendChild The function used to add
 the elements to the header.
 @return {Object} The created row body.
 @protected
 */
src.site.view.workContentRow.createTheRowBody =
  function(currentItem, options, createADiv, initializeEditableDiv,
           appendChild) {
    var Constant_ = src.site.view.workContentRow.constant;
    var Current_ = src.site.view.workContentRow;

    var bodyContainer = Current_.createAnEmptyDiv_(Constant_.WorkContentBody,
                                                   Constant_.WorkContentBody,
                                                   createADiv);

    var bodyText = initializeEditableDiv(Constant_.WorkBodyTextContainerId,
                                         currentItem[Constant_.ParameterWorkBody],
                                         currentItem[Constant_.ParameterWorkId],
                                         options[Constant_.WorkBodyUrl]);

    appendChild(bodyContainer, bodyText);

    return bodyContainer;
  };


/**
 @param {Object} currentItem The current row information
 item.
 @param {Object} options The overall grid options.
 @param {function} createADiv The function used to create
 the header.
 @param {function} initializeEditableDiv The function used
 to create editable divs.
 @param {function} setTextContent The function to set the
 author name text.
 @param {function} appendChild The function used to add
 the elements to the header.
 @return {Object} The created header.
 @protected
 */
src.site.view.workContentRow.createTheRowHeader =
  function(currentItem, options, createADiv,
           initializeEditableDiv, setTextContent, 
           appendChild) {

    var Constant_ = src.site.view.workContentRow.constant;
    var Current_ = src.site.view.workContentRow;
    var ControlConstant_ = src.base.control.controlConstant;

    var header = Current_.createAnEmptyDiv_(Constant_.WorkContentRowHeader,
                                            Constant_.WorkContentRowHeader,
                                            createADiv);

    var chapterTitleHolder = initializeEditableDiv(Constant_.ChapterTitleContainerId,
                                                   currentItem[Constant_.ParameterChapterTitle],
                                                   currentItem[Constant_.ParameterChapterId],
                                                   options[Constant_.ChapterTitleUrl]);

    appendChild(header, chapterTitleHolder);

    var workTitleHolder = initializeEditableDiv(Constant_.WorkTitleContainerId,
                                                currentItem[Constant_.ParameterWorkTitle],
                                                currentItem[Constant_.ParameterWorkId],
                                                options[Constant_.WorkTitleUrl]);

    appendChild(header, workTitleHolder);



    var authorNameHolder = Current_.createAnEmptyDiv_(Constant_.AuthorNameContainer,
                                                      Constant_.AuthorNameContainer,
                                                      createADiv);
    setTextContent(authorNameHolder,
                   currentItem[Constant_.ParameterAuthorName]);

    appendChild(header, authorNameHolder);

    return header;
  };





/**
 @param {Object} currentItem The current row information.
 @param {Object} options The parent grid options.
 @param {function} refreshGrid The function used to
 refresh the current grid.
 @param {?function} createADiv The function used to create
 a div.
 @param {?function} createTheRowHeader The function used
 to create the header.
 @param {?function} appendChild The function used to
 add elements to the content row.
 @return {Object} The created control.
 @protected
 */
src.site.view.workContentRow.create =
  function(currentItem, options, refreshGrid, createADiv,
           createTheRowHeader, appendChild) {

    createADiv = createADiv ?
      createADiv :
      src.base.helper.domCreation.div;

    appendChild = appendChild ?
      appendChild :
      goog.dom.appendChild;

     /* Start */

    var Constant_ = src.site.view.workContentRow.constant;
    var Current_ = src.site.view.workContentRow;
    var ControlConstant_ = src.base.control.controlConstant;

    var row = Current_.createAnEmptyDiv_(Constant_.WorkContentRow,
                                         Constant_.WorkContentRow,
                                         createADiv);


    var header = createTheRowHeader(currentItem,
                                    options,
                                    createADiv,
                                    src.base.control.editableDiv.initialize,
                                    goog.dom.setTextContent,
                                    appendChild);





    // src.site.view.workContentRow.createTheRowHeader
    // src.base.control.editableDiv.initialize;


    //currentItem['chapterId']
    //currentItem['pageId']
    //currentItem['workId']


    //options['UpdateChapterUrl'] => chapterId
    //options['UpdateChapterTitle'] => workId
    //options['UpdateChapterAuthorName'] => workId
    //options['UpdatePageText'] => pageId
    return row;
  };

/*


 */

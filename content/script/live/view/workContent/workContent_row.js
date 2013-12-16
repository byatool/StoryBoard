goog.require('goog.dom');
goog.require('src.base.control.controlConstant');
goog.require('src.base.helper.domCreation');
goog.require('src.site.view.workContent.constant');


goog.provide('src.site.view.workContent.row');


/* PRIVATE FUNCTIONS */

/**
 @param {string} id The div id.
 @param {string} cssClass The div css class.
 @param {function} createADiv The function used to create
 the div.
 @return {Object} The created div.
 @private
 */
src.site.view.workContent.row.createAnEmptyDiv_ =
  function(id, cssClass, createADiv) {

    var Constant_ = src.site.view.workContent.constant;
    var ControlConstant_ = src.base.control.controlConstant;

    var divAttributes = {};
    divAttributes[ControlConstant_.Id] = id;
    divAttributes[ControlConstant_.Class] = cssClass;

    return createADiv(divAttributes);
  };


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
src.site.view.workContent.row.createTheRowBody =
  function(currentItem, options, createADiv, initializeEditableDiv,
           appendChild) {

    var Constant_ = src.site.view.workContent.constant;
    var Current_ = src.site.view.workContent.row;

    var bodyContainer = Current_.createAnEmptyDiv_(Constant_.WorkContentBody,
                                                   Constant_.WorkContentBody,
                                                   createADiv);

    var bodyText = initializeEditableDiv(Constant_.WorkBodyTextContainerId,
                                         currentItem[Constant_.ParameterWorkBody],
                                         currentItem[Constant_.ParameterPageId],
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
 @param {function} createAClearDiv The function used to
 create an ending clear div.
 @param {function} appendChild The function used to add
 the elements to the header.
 @return {Object} The created header.
 @protected
 */
src.site.view.workContent.row.createTheRowHeader =
  function(currentItem, options, createADiv,
           initializeEditableDiv, setTextContent,
           createAClearDiv, appendChild) {

    var Constant_ = src.site.view.workContent.constant;
    var Current_ = src.site.view.workContent.row;
    var ControlConstant_ = src.base.control.controlConstant;

    var header = Current_.createAnEmptyDiv_(Constant_.WorkContentRowHeader,
                                            Constant_.WorkContentRowHeader,
                                            createADiv);

    var chapterTitleHolder = initializeEditableDiv(Constant_.ChapterTitleContainerId,
                                                   currentItem[Constant_.ParameterChapterTitle],
                                                   currentItem[Constant_.ParameterChapterId],
                                                   options[Constant_.ChapterTitleUrl]);

    var pageNumberHolder = Current_.createAnEmptyDiv_(Constant_.PageNumberContainer,
                                                      Constant_.PageNumberContainer,
                                                      createADiv);

    setTextContent(pageNumberHolder, currentItem[Constant_.PageNumber]);

    appendChild(header, chapterTitleHolder);
    appendChild(header, pageNumberHolder);
    appendChild(header, createAClearDiv());

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
 @param {?function} createTheRowBody The function used to
 create the text container.
 @param {?function} appendChild The function used to
 add elements to the content row.
 @return {Object} The created control.
 @protected
 */
src.site.view.workContent.row.create =
  function(currentItem, options, refreshGrid, createADiv,
           createTheRowHeader, createTheRowBody, appendChild) {

    createADiv = createADiv ?
      createADiv :
      src.base.helper.domCreation.div;

    createTheRowHeader = createTheRowHeader ?
      createTheRowHeader :
      src.site.view.workContent.row.createTheRowHeader;

    createTheRowBody = createTheRowBody ?
      createTheRowBody :
      src.site.view.workContent.row.createTheRowBody;

    appendChild = appendChild ?
      appendChild :
      goog.dom.appendChild;

    /* Start */

    var Constant_ = src.site.view.workContent.constant;
    var Current_ = src.site.view.workContent.row;
    var ControlConstant_ = src.base.control.controlConstant;

    var row = Current_.createAnEmptyDiv_(Constant_.WorkContentRow,
                                         Constant_.WorkContentRow,
                                         createADiv);


    var header = createTheRowHeader(currentItem,
                                    options,
                                    createADiv,
                                    src.base.control.editableDiv.initialize,
                                    goog.dom.setTextContent,
                                    src.base.helper.domCreation.createAClearDiv,
                                    appendChild);

    appendChild(row, header);

    var body = createTheRowBody(currentItem,
                                options,
                                createADiv,
                                src.base.control.editableDiv.initialize,
                                appendChild);

    appendChild(row, body);

    return row;
  };


goog.require('goog.dom');
goog.require('src.base.control.controlConstant');
goog.require('src.base.control.gridBuilder');
goog.require('src.base.control.gridBuilder.constant');
goog.require('src.base.helper.domCreation');
goog.require('src.site.view.constant');
goog.require('src.site.view.mainContent.constant');
goog.require('src.site.view.workContent');
goog.require('src.site.view.workContent.constant');
goog.require('src.site.view.workInformation');


goog.provide('src.site.view.mainContent');

/**
 @param {string} workId The id for the work to view.
 @param {string}  retrieveWorkUrl The url to find the work
 information.
 @param {string} chapterTitleUrl The url needed to update the
 chapter title.
 @param {string} workTitleUrl The url needed to update the
 work title.
 @param {string} workBodyUrl The url needed to update the
 body text.
 @param {string} retrieveInformation The url used to retrieve
 the book information.
 @param {string} authorNameUpdate The url used to update the
 author name.
 @param {string} authorSummaryUpdate The url used to update
 the author summary.
 @param {string} workTitleUpdate The url used to update the
 work title.
 @param {string} workSummaryUpdate The url used to update the
 work summary.
 @param {string} containerId The id for the parent container.
 @param {?function} createADiv The method used  to create a
 div element.
 @param {function} initializeWorkInformation The function used
 to create the work information container.
 @param {?function} initializeTheWorkContentGrid The function used to
 fill the grid.
 @param {?function} createAClearDiv The function used to create a 
 clear both div.
 @param {?function} appendChild The function used to add
 elements to the main container.
 @return {Object} The created control.
 @export
 */
src.site.view.mainContent.initialize =
  function(workId, retrieveWorkUrl, chapterTitleUrl,
           workTitleUrl, workBodyUrl, retrieveInformation,
           authorNameUpdate, authorSummaryUpdate, workTitleUpdate,
           workSummaryUpdate, containerId, createADiv,
           initializeWorkInformation, initializeTheWorkContentGrid,
           createAClearDiv, appendChild) {
    
    createADiv = createADiv ?
      createADiv :
      src.base.helper.domCreation.div;
    
    initializeWorkInformation = initializeWorkInformation ?
      initializeWorkInformation :
      src.site.view.workInformation.initialize;
    
    initializeTheWorkContentGrid = initializeTheWorkContentGrid ?
      initializeTheWorkContentGrid :
      src.site.view.workContent.initialize;

    createAClearDiv = createAClearDiv ?
      createAClearDiv :
      src.base.helper.domCreation.createAClearDiv;
    
    appendChild = appendChild ?
      appendChild :
      goog.dom.appendChild;

    /* Start */

    var Constant_ = src.site.view.mainContent.constant;
    var ControlConstant_ = src.base.control.controlConstant;
    var GridBuilderConstant_ = src.base.control.gridBuilder.constant;
    var ViewConstant_ = src.site.view.constant;
    var WorkContent_ = src.site.view.workContentRow;
    var WorkContentConstant_ = src.site.view.workContentRow.constant;


    var containerAttributes = {};
    containerAttributes[ControlConstant_.Id] = containerId;
    containerAttributes[ControlConstant_.Class] = Constant_.ContainerClass;
    var container = createADiv(containerAttributes);


    var workInformation = initializeWorkInformation(workId,
                                                    Constant_.WorkInformationContainer,
                                                    retrieveInformation,
                                                    authorNameUpdate,
                                                    authorSummaryUpdate,
                                                    workTitleUpdate,
                                                    workSummaryUpdate);
    
    var gridResult = initializeTheWorkContentGrid(workId,
                                                  retrieveWorkUrl,
                                                  chapterTitleUrl,
                                                  workTitleUrl,
                                                  workBodyUrl);
    
    appendChild(container, workInformation);
    appendChild(container, gridResult[ControlConstant_.CreatedControl]);
    appendChild(container, createAClearDiv());
    
    return container;
  };

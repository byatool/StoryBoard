goog.require('goog.dom');
goog.require('goog.string');
goog.require('src.base.control.controlConstant');
goog.require('src.base.control.editableDiv');
goog.require('src.base.helper.domCreation');
goog.require('src.base.helper.domHelper');
goog.require('src.site.view.constant');
goog.require('src.site.view.workInformation.constant');


goog.provide('src.site.view.workInformation');



/**
 @param {Object} parentContainer The container to hold the
 created rows.
 @param {string} authorNameUpdate The url for updating the
 author name.
 @param {string} authorSummaryUpdate The url for updating the
 authod summary.
 @param {string} workTitleUpdate The url for updating the
 work title.
 @param {string} workSummaryUpdate The url for updating the
 work summary.
 @param {function} createARowItem The function used to create
 a row from data.
 @param {function} appendChild The function used to append
 the rows to the parent container.
 @return {function} The function to call after the information
 is returned. 
 @protected
 */
src.site.view.workInformation.createTheSubmitHandler =
  function(parentContainer, authorNameUpdate, authorSummaryUpdate,
           workTitleUpdate, workSummaryUpdate, createARowItem,
           appendChild) {
    
    return function(item) {
      
      var Constant_ = src.site.view.workInformation.constant;
      
      var workTitle = createARowItem(Constant_.WorkTitle,
                                     Constant_.WorkTitleLabel,
                                     item[Constant_.WorkTitle],
                                     item[Constant_.WorkId],
                                     workTitleUpdate);
      
      var summary = createARowItem(Constant_.WorkSummary,
                                   Constant_.WorkSummaryLabel,
                                   item[Constant_.WorkSummary],
                                   item[Constant_.WorkId],
                                   workSummaryUpdate);
      
      var authorName = createARowItem(Constant_.AuthorName,
                                      Constant_.AuthorNameLabel,
                                      item[Constant_.AuthorName],
                                      item[Constant_.AuthorId],
                                      authorNameUpdate);
      
      var authorSummary = createARowItem(Constant_.AuthorSummary,
                                         Constant_.AuthorSummaryLabel,
                                         item[Constant_.AuthorSummary],
                                         item[Constant_.AuthorId],
                                         authorSummaryUpdate);
      
      appendChild(parentContainer, workTitle);
      appendChild(parentContainer, summary);
      appendChild(parentContainer, authorName);
      appendChild(parentContainer, authorSummary);
    };
  };


/**
 @param {string} workId The id of the work for the information.
 @param {string} containerId The id for the parent container.
 @param {string} retrieveInformation The url for the needed 
 work information.
 @param {string} authorNameUpdate The url for updating the
 author name.
 @param {string} authorSummaryUpdate The url for updating the
 authod summary.
 @param {string} workTitleUpdate The url for updating the
 work title.
 @param {string} workSummaryUpdate The url for updating the
 work summary.
 @param {?function} createADiv The method used  to create a 
 div element.
 @param {?function} createTheSubmitHandler The function used to
 create the callback after getting the information.
 @param {?function} submitToGetUrl The function used to get the
 information.
 @return {Object} The created control.
 @protected
 */
src.site.view.workInformation.initialize =
  function(workId, containerId, retrieveInformation, authorNameUpdate,
           authorSummaryUpdate, workTitleUpdate, workSummaryUpdate,
           createADiv, createTheSubmitHandler,
           submitToGetUrl) {
    
    createADiv = createADiv ? 
      createADiv : 
              src.base.helper.domCreation.div;
    
    submitToGetUrl = submitToGetUrl ? 
      submitToGetUrl : 
      src.base.helper.domHelper.submitToGetUrl;
    
    
    /* Start */
    
    var Constant_ = src.site.view.workInformation.constant;
    var ControlConstant_ = src.base.control.controlConstant;
    var ViewConstant_ = src.site.view.constant;
    
    
    var containerAttributes = {};
    containerAttributes[ControlConstant_.Id] = containerId;
    containerAttributes[ControlConstant_.Class] = Constant_.ContainerClass;
    var container = createADiv(containerAttributes);
    
    
    var submitHandler = createTheSubmitHandler(container,
                                               authorNameUpdate,
                                               authorSummaryUpdate,
                                               workTitleUpdate,
                                               workSummaryUpdate,
                                               src.site.view.workInformation.rowItem.createARowItem,
                                               goog.dom.appendChild);
    
    
    var parameters = {};
    parameters[ViewConstant_.WorkId] = workId;
    submitToGetUrl(retrieveInformation,
                   parameters,
                   submitHandler);
    
    return container;
  };

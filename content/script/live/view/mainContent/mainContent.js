goog.require('goog.dom');
goog.require('src.base.control.controlConstant');
goog.require('src.base.control.gridBuilder');
goog.require('src.base.control.gridBuilder.constant');
goog.require('src.base.control.wall');
goog.require('src.base.helper.domCreation');
goog.require('src.site.view.constant');
goog.require('src.site.view.constant');
goog.require('src.site.view.mainContent.constant');
goog.require('src.site.view.workContent');
goog.require('src.site.view.workContent.constant');
goog.require('src.site.view.workInformation');


goog.provide('src.site.view.mainContent');


/**
 @param {Object} wallResult The result from creating the wall.
 @param {function} refreshWall The function used to refresh
 a wall.
 @return {function} The function for another control to call
 to update the wall control. 
 @protected 
*/
src.site.view.mainContent.createWallRefreshHandler =
  function(wallResult, refreshWall) {
    return function(result) {
      
      var Constant_ = src.site.view.mainContent.constant;
      var ControlConstant_ = src.base.control.controlConstant;
      var ViewConstant_ = src.site.view.constant;
      
      refreshWall(wallResult[ControlConstant_.CreatedOptions],
                  result[ViewConstant_.List][0][ViewConstant_.PageId],
                  wallResult[ControlConstant_.CreatedControl]);
    };
  };

/**
 @param {string} workId The id for the work to view.
 @param {string} pageId The id for the first page.
 @param {Object} document The page document object used for
 key shortcuts.
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
 @param {string} postWallTo The url to post new wall items to.
 @param {string} retrieveWallItemsUrl The url to retrieve all
 page wall items.
 @param {string} deleteWallItemUrl The url for deleting an item
 from the page wall.
 @param {string} editWallItemUrl The url for editing a wall item.
 @param {?function} createADiv The method used  to create a parent
 container.
 @param {function} initializeWorkInformation The function used
 to create the work information container.
 @param {?function} initializeTheWorkContentGrid The function used to
 fill the grid.
 @param {?function} initializeTheWall The function used to create
 the page wall.
 @param {?function} createAClearDiv The function used to create a 
 clear both div.
 @param {?function} createWallRefreshHandler The function used to
 create a funtion that updates the wall when a page is changed.
 @param {?function} appendChild The function used to add
 elements to the main container.
 @return {Object} The created control.
 @export
 */
src.site.view.mainContent.initialize =
  function(workId, pageId, document, retrieveWorkUrl, chapterTitleUrl,
           workTitleUrl, workBodyUrl, retrieveInformation,
           authorNameUpdate, authorSummaryUpdate, workTitleUpdate,
           workSummaryUpdate, containerId, postWallTo,
           retrieveWallItemsUrl, deleteWallItemUrl,
           editWallItemUrl, createADiv, initializeWorkInformation,
           initializeTheWorkContentGrid,
           initializeTheWall, createAClearDiv,
           createWallRefreshHandler, appendChild) {
    
    createADiv = createADiv ?
      createADiv :
      src.base.helper.domCreation.div;
    
    initializeWorkInformation = initializeWorkInformation ?
      initializeWorkInformation :
      src.site.view.workInformation.initialize;
    
    initializeTheWorkContentGrid = initializeTheWorkContentGrid ?
      initializeTheWorkContentGrid :
      src.site.view.workContent.initialize;
    
    initializeTheWall = initializeTheWall ? 
      initializeTheWall : 
      src.base.control.wall.initialize;
    
    createAClearDiv = createAClearDiv ?
      createAClearDiv :
      src.base.helper.domCreation.createAClearDiv;
    
    createWallRefreshHandler = createWallRefreshHandler ? 
      createWallRefreshHandler : 
      src.site.view.mainContent.createWallRefreshHandler;
    
    appendChild = appendChild ?
      appendChild :
      goog.dom.appendChild;
    
    /* Start */
    
    var Constant_ = src.site.view.mainContent.constant;
    var ControlConstant_ = src.base.control.controlConstant;
    var GridBuilder_ = src.base.control.gridBuilder;
    var GridBuilderConstant_ = src.base.control.gridBuilder.constant;
    var ViewConstant_ = src.site.view.constant;
    var WorkContent_ = src.site.view.workContentRow;
    var WorkContentConstant_ = src.site.view.workContentRow.constant;
    
    
    var containerAttributes = {};
    containerAttributes[ControlConstant_.Id] = containerId;
    containerAttributes[ControlConstant_.Class] = Constant_.ContainerClass;
    var container = createADiv(containerAttributes);
    
    
    var wallResult = initializeTheWall(document,
                                       Constant_.WallContainer,
                                       postWallTo,
                                       retrieveWallItemsUrl,
                                       deleteWallItemUrl,
                                       pageId,
                                       editWallItemUrl);
    
    
    var workInformation = initializeWorkInformation(workId,
                                                    Constant_.WorkInformationContainer,
                                                    retrieveInformation,
                                                    authorNameUpdate,
                                                    authorSummaryUpdate,
                                                    workTitleUpdate,
                                                    workSummaryUpdate);
    
    
    var wallRefresh = createWallRefreshHandler(wallResult,
                                               src.base.control.wall.refresh);

    
    var gridResult = initializeTheWorkContentGrid(workId,
                                                  retrieveWorkUrl,
                                                  chapterTitleUrl,
                                                  workTitleUrl,
                                                  workBodyUrl,
                                                  wallRefresh);
    
    appendChild(container, workInformation);
    appendChild(container, gridResult[ControlConstant_.CreatedControl]);
    appendChild(container, wallResult[ControlConstant_.CreatedControl]);
    appendChild(container, createAClearDiv());
    
    return container;
  };

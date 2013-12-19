goog.require('src.base.control.wall');

goog.provide('src.site.view.pageWall');


/**
 @protected
 */
src.site.view.pageWall.createPageIdRetrieveHandler =
  function(postTo, retrieveItemsUrl, deleteUrl,
           editableUrl, initializeWall) {
    
    
    return function(result) {
      
    };
    /*
     postTo, retrieveItemsUrl, deleteUrl, editableUrl
     */
  };

/**
 
 @param {string} workId The work that owns the needed page.
 @param {Object} document The document object.
 @param {string} retrieveItemsUrl The url used to get the page
 wall items.
 @param {string} deleteUrl The url used to delete a page wall
 item.
 @param {string} editableUrl The url used to update a page
 wall item.
 @param {string} retrieveFirstPageUrl The url needed to find the
 first page id of the work.
 @param {?function} createADiv The function used to create the overall
 container.
 @param {?function} initializeWall The function used to create 
 the wall.
 @protected
 */
src.site.view.pageWall.initialize =
  function(workId, document, postTo,
           retrieveItemsUrl, deleteUrl,
           editableUrl, retrieveFirstPageUrl,
           createADiv, initializeWall) {
    
    createADiv = createADiv ?
      createADiv :
      src.base.helper.domCreation.div;
    
    initializeWall = initializeWall ? 
      initializeWall : 
      src.base.control.wall.initialize;
    
    /* Start */
    
    
    //create the parent container
    //get the page id from the work id
    //  workId, parentContainer, src.base.helper.domHelper.submitRestfulGet
    
    
    //src.base.helper.domHelper
    //submitRestfulGet(retrieveFirstPageUrl, workId, parentContainer, initializeWall)
    //
  };

//function(workId, document, containerId, postTo, retrieveItemsUrl, deleteUrl,editableUrl)

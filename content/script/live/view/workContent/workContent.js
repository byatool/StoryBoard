goog.require('src.base.control.controlConstant');
goog.require('src.base.helper.domCreation');
goog.require('src.site.view.workContentRow.constant');


goog.provide('src.site.view.workContentRow');

/**
 @param {Object} currentItem The current row information.
 @param {Object} options The parent grid options.
 @param {function} refreshGrid The function used to 
 refresh the current grid.
 @param {?function} createADiv The function used to create
 a div.
 @return {Object} The created control.
 @protected
 */
src.site.view.workContentRow.create =
  function(currentItem, options, refreshGrid, createADiv) {
    
    createADiv = createADiv ? 
      createADiv : 
      src.base.helper.domCreation.div;
    
    /* Start */
    
    var Constant_ = src.site.view.workContentRow.constant;
    var ControlConstant_ = src.base.control.controlConstant;
    
    var rowAttributes = {};
    rowAttributes[ControlConstant_.Id] = Constant_.WorkContentRowClass;
    rowAttributes[ControlConstant_.Class] = Constant_.WorkContentRowClass;
    var row = createADiv(rowAttributes);
    
    return row;
  };

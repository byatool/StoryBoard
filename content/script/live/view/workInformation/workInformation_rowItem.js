goog.require('goog.dom');
goog.require('src.base.control.controlConstant');
goog.require('src.base.control.editableDiv');
goog.require('src.base.helper.domCreation');
goog.require('src.site.view.workInformation');


goog.provide('src.site.view.workInformation.rowItem');


/**
 @param {string} containerId The id for the row item.
 @param {string} labelText The text for the label paired
 with the editable div.
 @param {string} editableDivText The text used to
 populate the editable div.
 @param {string} itemId The id needed by the editable
 div on save.
 @param {string} postTo The url needed to post the 
 updated text to.
 @param {function?} createALabel The function used to
 create the label that is paired with an editableDiv.
 @param {function?} createAnEditableDiv The function used
 to create the editable div.
 @param {function?} createADiv The function used to add
 create the new row item.
 @param {function?} createAClearDiv The function used to
 create an ending clear both civ.
 @param {function?} appendChild Thefunction used to add
 the elements to the new row item.
 @return {Object} The created row.
 @protected
 */
src.site.view.workInformation.rowItem.initialize =
  function(containerId, labelText, editableDivText, itemId,
           postTo, createALabel, createAnEditableDiv,
           createADiv, createAClearDiv, appendChild){
    
    createALabel = createALabel ?
      createALabel :
      src.base.helper.domCreation.label;
     
    createAnEditableDiv = createAnEditableDiv ? 
      createAnEditableDiv : 
      src.base.control.editableDiv.initialize;
     
    createADiv = createADiv ?
      createADiv :
      src.base.helper.domCreation.div;
     
    createAClearDiv = createAClearDiv ?
      createAClearDiv :
      src.base.helper.domCreation.createAClearDiv;
    
    appendChild = appendChild ?
      appendChild :
      goog.dom.appendChild;

    
    /* Start */
    
    var Constant_ = src.site.view.workInformation.constant;
    var ControlConstant_ = src.base.control.controlConstant;
    
    
    var labelAttributes = {};
    labelAttributes[ControlConstant_.Class] = Constant_.WorkInformationLabel;
    var label = createALabel(labelAttributes,
                             labelText);
    
    
    var editableDiv = createAnEditableDiv(Constant_.WorkInformationRow + containerId,
                                          editableDivText,
                                          itemId,
                                          postTo);
    
    var rowAttributes = {};
    rowAttributes[ControlConstant_.Class] = Constant_.WorkInformationRow;
    rowAttributes[ControlConstant_.Id] = containerId;
    rowAttributes[ControlConstant_.Name] = containerId;
    var containerRow = createADiv(rowAttributes);
    
    appendChild(containerRow, label);
    appendChild(containerRow, editableDiv);
    appendChild(containerRow, createAClearDiv());
    
    return createADiv(rowAttributes);
    
  };

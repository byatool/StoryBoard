goog.require('goog.string');
goog.require('src.base.control.controlConstant');
goog.require('src.site.view.workInformation.constant');
goog.require('src.site.view.workInformation.rowItem');


goog.provide('src.test.view.workInformation.rowItem.whenCreatingARowItem');


/**
 @export
 */
src.test.view.workInformation.rowItem.whenCreatingARowItem.describe = function () {
  
  //Using
  
  var Constant_ = src.site.view.workInformation.constant;
  var Current_ = src.site.view.workInformation.rowItem;
  var ControlConstant_ = src.base.control.controlConstant;    
  var PostTo_ = goog.string.getRandomString();
  
  
  //Fields
  
  
  var ContainerId_ = goog.string.getRandomString();
  var ItemId_ = goog.string.getRandomString();
  var EditableDivText_ = goog.string.getRandomString();
  var LabelText_ = goog.string.getRandomString();
  
  var appendChild_;
  var createAClearDiv_;
  var containerRow_;
  var createADiv_;
  var createAnEditableDiv_;
  var createALabel_;
  
  
  //Test Hooks
  
  beforeEach(function() {
    containerRow_ = {};
    createADiv_ = function() { return containerRow_;};

    
    appendChild_ = function(){};
    createAClearDiv_ = function(){};
    createAnEditableDiv_ = function() {};
    createALabel_ = function() {};
    PostTo_ = function(){};
    
  });
  
  
  //Support Methods
  
  var callTheMethod_ = function() {
    return Current_.initialize(ContainerId_, LabelText_, EditableDivText_, ItemId_,
                               PostTo_, createALabel_, createAnEditableDiv_, createADiv_,
                               createAClearDiv_, appendChild_);
  };
  
  
  //Test Methods
  
  it('should create the label holder.', function() {
    var methodWasCalled = false;
    
    createALabel_ = function(attributes, text){
      methodWasCalled = methodWasCalled ||
        (Constant_.WorkInformationLabel !== undefined &&
         attributes[ControlConstant_.Class] === Constant_.WorkInformationLabel &&
         text === LabelText_);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  it('should create the editable div.', function() {
    var methodWasCalled = false;
    
    createAnEditableDiv_ = function(containerId, text, id, url){
      methodWasCalled = Constant_.WorkInformationRow !== undefined && 
        containerId === Constant_.WorkInformationRow + ContainerId_ &&
        text === EditableDivText_ &&
        id === ItemId_ &&
        url === PostTo_;
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  it('should create the container row.', function() {
    var methodWasCalled = false;
    
    createADiv_ = function(attributes){
      methodWasCalled = methodWasCalled ||
        (Constant_.WorkInformationRow !== undefined &&
         attributes[ControlConstant_.Class] === Constant_.WorkInformationRow &&
         attributes[ControlConstant_.Id] === ContainerId_ &&
         attributes[ControlConstant_.Name] === ContainerId_);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  
  it('should append the label to the container row.', function() {
    var methodWasCalled = false;
    var label = {};
    
    createALabel_ = function(){
      return label;
    };
    
    appendChild_ = function(parent, child){
      methodWasCalled = methodWasCalled || 
        (parent === containerRow_ && child === label);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  it('should append the editable div to the container row.', function() {
    var methodWasCalled = false;
    var editableDiv = {};
    
    createAnEditableDiv_ = function(){
      return editableDiv;
    };
    
    appendChild_ = function(parent, child){
      methodWasCalled = methodWasCalled || 
        (parent === containerRow_ && child === editableDiv);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
   
  
  it('should append the clear div to the container row.', function() {
    var methodWasCalled = false;
    var clearDiv = {};
    
    createAClearDiv_ = function(){
      return clearDiv;
    };
    
    
    appendChild_ = function(parent, child){
      methodWasCalled = methodWasCalled || 
        (parent === containerRow_ && child === clearDiv);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
   
  it('should return the row.', function() {
    var createdRow = {};
    
    expect(callTheMethod_()).toBe(containerRow_);
  });
  
};



describe('When creating a row item , it', function() {
  src.test.view.workInformation.rowItem.whenCreatingARowItem.describe();
});


//--namespace="src.test.view.workInformation.rowItem.whenCreatingARowItem" ^

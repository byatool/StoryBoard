goog.require('goog.dom');
goog.require('goog.string');
goog.require('src.base.control.controlConstant');
goog.require('src.base.control.editableDiv');
goog.require('src.base.helper.domCreation');
goog.require('src.site.view.workInformation');


goog.provide('src.test.view.workInformation.whenCreatingTheSubmitHandler');


/**
 @export
 */
src.test.view.workInformation.whenCreatingTheSubmitHandler.describe = function () {
  
  //Using
  
  var Constant_ = src.site.view.workInformation.constant;
  var Current_ = src.site.view.workInformation;
  var ControlConstant_ = src.base.control.controlConstant;    
  
  
  //Fields
  
  
  var AuthorId_ = goog.string.getRandomString();
  var AuthorSummary_ = goog.string.getRandomString();
  var AuthorSummaryUpdate_ = goog.string.getRandomString();
  var AuthorName_ = goog.string.getRandomString();
  var AuthorNameUpdate_ = goog.string.getRandomString();
  var WorkId_ = goog.string.getRandomString();
  var WorkSummary_ = goog.string.getRandomString();
  var WorkSummaryUpdate_ = goog.string.getRandomString();
  var WorkTitle_ = goog.string.getRandomString();
  var WorkTitleUpdate_ = goog.string.getRandomString();
  
  var appendChild_;
  var createARowItem_;
  var parentContainer_;
  var resultItem_;
  
  
  //Test Hooks
  
  beforeEach(function() {
    
    createARowItem_ = function() {};
    parentContainer_ = {};
    
    resultItem_ = {};
    resultItem_[Constant_.AuthorId] = AuthorId_;
    resultItem_[Constant_.AuthorSummary] = AuthorSummary_;
    resultItem_[Constant_.AuthorName] = AuthorName_;
    resultItem_[Constant_.WorkId] = WorkId_;
    resultItem_[Constant_.WorkSummary] = WorkSummary_;
    resultItem_[Constant_.WorkTitle] = WorkTitle_;
    
    appendChild_ = function(){};
  });
  
  
  //Support Methods
  
  var callTheMethod_ = function() {
    return Current_.createTheSubmitHandler(parentContainer_, AuthorNameUpdate_,
                                           AuthorSummaryUpdate_, WorkTitleUpdate_,
                                           WorkSummaryUpdate_, createARowItem_,
                                           appendChild_)(resultItem_);
  };
  
  
  //Test Methods
  
  it('should create the work title row.', function() {
    var methodWasCalled = false;
    
    createARowItem_ = function(containerId, labelText, editableDivText, itemId,
                               postTo){
      
      methodWasCalled = methodWasCalled ||
        (Constant_.WorkTitleLabel !== undefined &&
         Constant_.WorkTitle !== undefined && 
         containerId === Constant_.WorkTitle &&
         labelText === Constant_.WorkTitleLabel &&
         editableDivText === WorkTitle_ &&
         itemId === WorkId_,
         postTo === WorkTitleUpdate_);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  it('should create the work summary row.', function() {
    var methodWasCalled = false;
    
    createARowItem_ = function(containerId, labelText, editableDivText, itemId,
                               postTo){
      
      methodWasCalled = methodWasCalled ||
        (Constant_.WorkSummaryLabel !== undefined &&
         Constant_.WorkSummary !== undefined && 
         containerId === Constant_.WorkSummary &&
         labelText === Constant_.WorkSummaryLabel &&
         editableDivText === WorkSummary_ &&
         itemId === WorkId_ &&
         postTo === WorkSummaryUpdate_);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  it('should create the author name row.', function() {
    var methodWasCalled = false;
    
    createARowItem_ = function(containerId, labelText, editableDivText, itemId,
                               postTo){
      
      methodWasCalled = methodWasCalled ||
        (Constant_.AuthorNameLabel !== undefined &&
         Constant_.AuthorName !== undefined && 
         containerId === Constant_.AuthorName &&
         labelText === Constant_.AuthorNameLabel &&
         editableDivText === AuthorName_ &&
         itemId === AuthorId_ &&
         postTo === AuthorNameUpdate_);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  it('should create the author summary row.', function() {
    var methodWasCalled = false;
    
    createARowItem_ = function(containerId, labelText, editableDivText, itemId,
                               postTo){
      
      methodWasCalled = methodWasCalled ||
        (Constant_.AuthorSummaryLabel !== undefined &&
         Constant_.AuthorSummary !== undefined && 
         containerId === Constant_.AuthorSummary &&
         labelText === Constant_.AuthorSummaryLabel &&
         editableDivText === AuthorSummary_ &&
         itemId === AuthorId_ &&
         postTo === AuthorSummaryUpdate_);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
   
  
  it('should append the work title row to the parent.', function() {
    var methodWasCalled = false;
    var workTitle = {};
    
    createARowItem_ = function(name){
      return name === Constant_.WorkTitle ?
        workTitle :
        {};
      
    };
     
    appendChild_ = function(parent, child){
      methodWasCalled = methodWasCalled || 
        (parent === parentContainer_ && child === workTitle);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  it('should append the work summary row to the parent.', function() {
    var methodWasCalled = false;
    var workSummary = {};
    
    createARowItem_ = function(name){
      return name === Constant_.WorkSummary ?
        workSummary :
        {};
      
    };
    
    appendChild_ = function(parent, child){
      methodWasCalled = methodWasCalled || 
        (parent === parentContainer_ && child === workSummary);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });

  
  it('should append the author name row to the parent.', function() {
    var methodWasCalled = false;
    var authorName = {};
    
    createARowItem_ = function(name){
      return name === Constant_.AuthorName ?
        authorName :
        {};
      
    };
    
    appendChild_ = function(parent, child){
      methodWasCalled = methodWasCalled || 
        (parent === parentContainer_ && child === authorName);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });

  
  it('should append the author summary row to the parent.', function() {
    var methodWasCalled = false;
    var authorSummary = {};
    
    createARowItem_ = function(name){
      return name === Constant_.AuthorSummary ?
        authorSummary :
        {};
      
    };
    
    appendChild_ = function(parent, child){
      methodWasCalled = methodWasCalled || 
        (parent === parentContainer_ && child === authorSummary);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });

};



describe('When creating the submit handler, it', function() {
  src.test.view.workInformation.whenCreatingTheSubmitHandler.describe();
});


//--namespace="src.test.view.workInformation.whenCreatingTheSubmitHandler" ^

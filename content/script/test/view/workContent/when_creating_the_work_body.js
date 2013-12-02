goog.require('goog.string');
goog.require('src.base.control.controlConstant');
goog.require('src.site.view.workContentRow');
goog.require('src.site.view.workContentRow.constant');

goog.provide('src.test.view.workContentRow.whenCreatingTheWorkBody');


/**
 @export
 */
src.test.view.workContentRow.whenCreatingTheWorkBody.describe = function () {
  
  //Using
  
  var Constant_ = src.site.view.workContentRow.constant;
  var Current_ = src.site.view.workContentRow;
  var ControlConstant_ = src.base.control.controlConstant; 
  
  
  //Fields

  var appendChild_;
  var createADiv_;
  var currentItem_;
  var initializeEditableDiv_;
  var options_;
  var parentContainer_;
  
  
  //Test Hooks
  
  beforeEach(function() {
    currentItem_ = {};
    options_ = {};
    parentContainer_ = {};
    
    appendChild_ = function(){};
    createADiv_ = function(){ return parentContainer_; };
    initializeEditableDiv_ = function(){};
  });
  
  
  //Support Methods
  
  var callTheMethod_ = function() {
    return Current_.createTheRowBody(currentItem_, options_, createADiv_, initializeEditableDiv_,
                                     appendChild_);
  };
  
  
  //Test Methods
  
  it('should create the parent holder.', function() {
    var methodWasCalled = false;
    
    createADiv_ = function(attributes){
      methodWasCalled = methodWasCalled ||
        (Constant_.WorkContentBody !== undefined &&
         attributes[ControlConstant_.Id] === Constant_.WorkContentBody &&
         attributes[ControlConstant_.Class] === Constant_.WorkContentBody);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  it('should create the work body editable div.', function() {
    var methodWasCalled = false;
    var workId = goog.string.getRandomString();
    var workBodyUrl = goog.string.getRandomString();
    var workBodyText = goog.string.getRandomString();
    
    currentItem_[Constant_.ParameterWorkBody] = workBodyText;
    currentItem_[Constant_.ParameterWorkId] = workId;
    options_[Constant_.WorkBodyUrl] = workBodyUrl;
    
    initializeEditableDiv_ = function(name, text, id, url){
      methodWasCalled = methodWasCalled ||
        (Constant_.WorkBodyTextContainerId !== undefined &&
         Constant_.ParameterWorkId !== undefined &&
         Constant_.ParameterWorkBody !== undefined &&
         Constant_.WorkBodyUrl !== undefined &&
         name === Constant_.WorkBodyTextContainerId &&
         text === workBodyText &&
         id === workId &&
         url === workBodyUrl);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  
  
  it('should append the chapter title div to the header.', function() {
    var methodWasCalled = false;
    var workBodyTextContainer = {};
    
    initializeEditableDiv_ = function(name) {
      return name === Constant_.WorkBodyTextContainerId ?
        workBodyTextContainer :
        {};
    };
    
    appendChild_ = function(parent, child){
      methodWasCalled = methodWasCalled || 
        (parent === parentContainer_ && child === workBodyTextContainer);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });


  
  it('should return the created row body.', function() {
    expect(callTheMethod_()).toBe(parentContainer_);
  });
};



describe('When creating the work body , it', function() {
  src.test.view.workContentRow.whenCreatingTheWorkBody.describe();
});


//--namespace="src.test.view.workContentRow.whenCreatingTheWorkBody" ^

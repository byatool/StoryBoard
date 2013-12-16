goog.require('goog.dom');
goog.require('goog.string');
goog.require('src.base.control.controlConstant');
goog.require('src.site.view.constant');
goog.require('src.site.view.workInformation');
goog.require('src.site.view.workInformation.rowItem');


goog.provide('src.test.view.workInformation.whenInitializingAWorkInformation');

/**
 @export
 */
src.test.view.workInformation.whenInitializingAWorkInformation.describe = function () {
  
  //Using
  
  var Constant_ = src.site.view.workInformation.constant;
  var Current_ = src.site.view.workInformation;
  var ControlConstant_ = src.base.control.controlConstant;    
  var ViewConstant_ = src.site.view.constant;
  
  //Fields
  
  var AuthorNameUpdate_ = goog.string.getRandomString();
  var AuthorSummaryUpdate_ = goog.string.getRandomString();
  var ContainerId_ = goog.string.getRandomString();
  var WorkId_ = goog.string.getRandomString();
  var WorkSummaryUpdate_ = goog.string.getRandomString();
  var WorkTitleUpdate_ = goog.string.getRandomString();
  
  var RetrieveInformation_ = goog.string.getRandomString();
  
  
  var createADiv_;
  var createTheSubmitHandler_;
  var parentContainer_;
  var submitToGetUrl_;
  
  
  //Test Hooks
  
  beforeEach(function() {
    parentContainer_ = {};
    
    createADiv_ = function(attributes){
      switch(attributes[ControlConstant_.Class]) {
      case Constant_.ContainerClass:
        return parentContainer_;
        break;               
      default:
        return parentContainer_;
        break;
      }};
    
    createTheSubmitHandler_ = function(){};
    submitToGetUrl_ = function(){};
  });
  
  
  //Support Methods
  var callTheMethod_ = function() {
    return Current_.initialize(WorkId_, ContainerId_, RetrieveInformation_, AuthorNameUpdate_,
                               AuthorSummaryUpdate_, WorkTitleUpdate_, WorkSummaryUpdate_,
                               createADiv_, createTheSubmitHandler_,
                               submitToGetUrl_);
  };
  
  
  //Test Methods
  
  it('should create a parent container.', function() {
    var methodWasCalled = false;
    
    createADiv_ = function(attributes) {
      methodWasCalled = methodWasCalled ||
        (Constant_.ContainerClass !== undefined &&
         attributes[ControlConstant_.Id] === ContainerId_&&
         attributes[ControlConstant_.Class] === Constant_.ContainerClass);
      
      return parentContainer_;
    };
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  
  it('should create the submit hander.', function() {
    var methodWasCalled = false;
    
    createTheSubmitHandler_ = function(parentContainer, authorNameUpdate, authorSummaryUpdate,
                                       workTitleUpdate, workSummaryUpdate, createARowItem,
                                       appendChild){
      
      methodWasCalled = parentContainer === parentContainer_ &&
        authorNameUpdate === AuthorNameUpdate_ &&
        authorSummaryUpdate === AuthorSummaryUpdate_ &&
        workTitleUpdate === WorkTitleUpdate_ &&
        workSummaryUpdate === WorkSummaryUpdate_ &&
        createARowItem === src.site.view.workInformation.rowItem.initialize &&
        appendChild === goog.dom.appendChild;
    };
    
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
   
  
  it('should submit for the information.', function() {
    var methodWasCalled = false;
    var createdSubmitHandler = {};
    
    createTheSubmitHandler_ = function(){
      return createdSubmitHandler;
    };
    
    submitToGetUrl_ = function(url, workId, parameters, submitHandler){
      methodWasCalled = url === RetrieveInformation_ &&
        workId === WorkId_ &&
        parameters === null &&
        submitHandler === createdSubmitHandler;
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  it('should return the parent container.', function() {
    expect(callTheMethod_()).toBe(parentContainer_);
  });    
};

describe('When initializing a Work Information, it', function() {
  src.test.view.workInformation.whenInitializingAWorkInformation.describe();
});




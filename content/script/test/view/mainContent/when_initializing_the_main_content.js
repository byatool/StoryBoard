goog.require('goog.string');
goog.require('src.base.control.controlConstant');
goog.require('src.base.control.gridBuilder');
goog.require('src.base.control.gridBuilder.constant');
goog.require('src.site.view.constant');
goog.require('src.site.view.mainContent');
goog.require('src.site.view.workContentRow');
goog.require('src.site.view.workContentRow.constant');


goog.provide('src.test.view.mainContent.whenInitializingAMainContent');

/**
 @export
 */
src.test.view.mainContent.whenInitializingAMainContent.describe = function () {
  
  //Using
  
  var Constant_ = src.site.view.mainContent.constant;
  var ControlConstant_ = src.base.control.controlConstant;    
  var Current_ = src.site.view.mainContent;
  var GridBuilderConstant_ = src.base.control.gridBuilder.constant;
  var ViewConstant_ = src.site.view.constant;
  var WorkContent_ = src.site.view.workContentRow;
  var WorkContentConstant_ = src.site.view.workContentRow.constant;
  
  
  //Fields
  
  
  var ChapterTitleUrl_ = goog.string.getRandomString();
  var ContainerId_ = goog.string.getRandomString();
  var RetrieveWorkUrl_ = goog.string.getRandomString();
  var WorkBodyUrl_ = goog.string.getRandomString();
  var WorkId_ = goog.string.getRandomString();
  var WorkTitleUrl_ = goog.string.getRandomString();
  
  var appendChild_;
  var createADiv_;
  var grid_;
  var gridResult_;
  var initializeTheGrid_;
  var options_;
  var parentContainer_;
  
  
  //Test Hooks
  
  beforeEach(function() {
    parentContainer_ = {};
    
    grid_ = {};
    gridResult_ = {};
    gridResult_[ControlConstant_.CreatedControl] = grid_;
    
    initializeTheGrid_ = function(){
      return gridResult_;
    };

    
    createADiv_ = function(attributes){
      switch(attributes[ControlConstant_.Class]) {
      case Constant_.ContainerClass:
        return parentContainer_;
        break;               
      default:
        return parentContainer_;
        break;
      }};
    
    appendChild_ = function() {};
  });
  
  
  //Support Methods
  
  var callTheMethod_ = function() {
    return Current_.initialize(WorkId_, RetrieveWorkUrl_, ChapterTitleUrl_, WorkTitleUrl_, WorkBodyUrl_,
                               ContainerId_, createADiv_, initializeTheGrid_, appendChild_);
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
  
  
  
  it('should create a grid builder to house the work.', function() {
    var methodWasCalled = false;
    
    initializeTheGrid_ = function(options){
      methodWasCalled = Constant_.WorkContainer !== undefined && 
        options[GridBuilderConstant_.ContainerClass] === Constant_.WorkContainer &&
        options[GridBuilderConstant_.ContainerId] === Constant_.WorkContainer &&
        options[GridBuilderConstant_.Url] === RetrieveWorkUrl_ && 
        options[GridBuilderConstant_.Parameters][ViewConstant_.WorkId] === WorkId_ &&
        options[GridBuilderConstant_.Parameters][ViewConstant_.Page] === 0 &&
        options[GridBuilderConstant_.Map][GridBuilderConstant_.HeaderText] === '' &&
        options[GridBuilderConstant_.Map][GridBuilderConstant_.PropertyName] === '' &&
        options[GridBuilderConstant_.Map][ControlConstant_.Class] === '';
      
      return grid_;
    };
    
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  it('should pass on the needed urls.', function() {
    var methodWasCalled = false;
    
    initializeTheGrid_ = function(options) {
      methodWasCalled = options[WorkContentConstant_.ChapterTitleUrl] === ChapterTitleUrl_ &&
        options[WorkContentConstant_.WorkBodyUrl] === WorkBodyUrl_ &&
        options[WorkContentConstant_.WorkTitleUrl] === WorkTitleUrl_;
      
      return grid_;
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  
  it('should pass on the correct create row function.', function() {
    var methodWasCalled = false;
    
    initializeTheGrid_ = function(options) {
      methodWasCalled = options[GridBuilderConstant_.CreateARow] === WorkContent_.create;
      
      return grid_;
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  it('should append the grid to the parent container.', function() {
    var methodWasCalled = false;
    
    appendChild_ = function(parent, child){
      methodWasCalled = methodWasCalled || 
        (parent === parentContainer_ && child === grid_);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  
  it('should return the parent container.', function() {
    expect(callTheMethod_()).toBe(parentContainer_);
  });    
};

describe('When refreshing AMainContent, it', function() {
  src.test.view.mainContent.whenInitializingAMainContent.describe();
});





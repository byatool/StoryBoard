goog.require('goog.string');
goog.require('src.base.control.controlConstant');
goog.require('src.site.view.workContentRow');


goog.provide('src.test.view.workContentRow.whenInitializingAWorkContentRow');

/**
 @export
 */
src.test.view.workContentRow.whenInitializingAWorkContentRow.describe = function () {
  
  //Using
  
  var Constant_ = src.site.view.workContentRow.constant;
  var Current_ = src.site.view.workContentRow;
  var ControlConstant_ = src.base.control.controlConstant;    
  
  
  //Fields
  
  var ContainerId_ = goog.string.getRandomString();
  
  var createADiv_;
  var currentItem_;
  var options_;
  var parentRow_;
  var refreshGrid_;
  
  
  //Test Hooks
  
  beforeEach(function() {
    parentRow_ = {};
    
    createADiv_ = function(attributes){
      switch(attributes[ControlConstant_.Class]) {
      case Constant_.ContainerClass:
        return parentRow_;
        break;               
      default:
        return parentRow_;
        break;
      }};
  });
  
  
  //Support Methods
  
  var callTheMethod_ = function() {
    return Current_.create(currentItem_, options_, refreshGrid_, createADiv_);
  };
  
  
  //Test Methods
  
  it('should create a parent container.', function() {
    var methodWasCalled = false;
    
    createADiv_ = function(attributes) {
      methodWasCalled = methodWasCalled ||
        (Constant_.WorkContentRowClass !== undefined &&
         attributes[ControlConstant_.Id] === Constant_.WorkContentRowClass &&
         attributes[ControlConstant_.Class] === Constant_.WorkContentRowClass);
      
      return parentRow_;
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  it('should return the parent container.', function() {
    expect(callTheMethod_()).toBe(parentRow_);
  });    
};

describe('When refreshing AWorkContent, it', function() {
  src.test.view.workContentRow.whenInitializingAWorkContentRow.describe();
});









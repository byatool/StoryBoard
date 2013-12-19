goog.require('goog.string');
goog.require('src.base.control.controlConstant');
goog.require('src.site.view.constant');
goog.require('src.site.view.mainContent');


goog.provide('src.test.view.mainContent.whenCreatingTheWallRefreshHandler');


/**
 @export
 */
src.test.view.mainContent.whenCreatingTheWallRefreshHandler.describe = function () {
  
  //Using
  
  var Constant_ = src.site.view.mainContent.constant;
  var Current_ = src.site.view.mainContent;
  var ControlConstant_ = src.base.control.controlConstant;    
  var ViewConstant_ = src.site.view.constant;
  
  
   //Fields
  
  
  var PageId_ = goog.string.getRandomString();
  
  var wallControl_;
  var wallOptions_;
  var refreshWall_;
  var result_;
  var wallCreationResult_;
  
  
  //Test Hooks
  
  beforeEach(function() {
    result_ = {};
    result_[ViewConstant_.List] = {};
    result_[ViewConstant_.List][0] = {};
    result_[ViewConstant_.List][0][ViewConstant_.PageId] = PageId_;
    
    wallControl_ = {};
    wallCreationResult_= {};
    wallOptions_ = {};
    wallCreationResult_[ControlConstant_.CreatedControl] = wallControl_;
    wallCreationResult_[ControlConstant_.CreatedOptions] = wallOptions_;
    
    refreshWall_ = function(){};
  });
  
  
  //Support Methods

  var callTheMethod_ = function() {
    return Current_.createWallRefreshHandler(wallCreationResult_, refreshWall_);
  };
  
  
  //Test Methods
  
  it('should refresh the wall.', function() {
    var methodWasCalled = false;
    
    refreshWall_ = function(options, pageId, control) {
      methodWasCalled = options === wallOptions_ &&
        pageId === PageId_ &&
        control === wallControl_;
    };
    
    callTheMethod_()(result_);
    
    expect(methodWasCalled).toBe(true);
  });
};



describe('When creating the wall refresh handler, it', function() {
  src.test.view.mainContent.whenCreatingTheWallRefreshHandler.describe();
});




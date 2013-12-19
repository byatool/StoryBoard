goog.require('goog.string');
goog.require('src.base.control.controlConstant');
goog.require('src.site.view.constant');
goog.require('src.site.view.workContent');
goog.require('src.site.view.workContent.row');


goog.provide('src.test.view.workContent.whenInitializingAWorkContentGrid');


/**
 @export
 */
src.test.view.workContent.whenInitializingAWorkContentGrid.describe = function () {
  
  //Using
  
  var Constant_ = src.site.view.workContent.constant;
  var Current_ = src.site.view.workContent;
  var ControlConstant_ = src.base.control.controlConstant;
  var GridBuilderConstant_ = src.base.control.gridBuilder.constant;
  var ViewConstant_ = src.site.view.constant;
  var WorkContentRow_ = src.site.view.workContent.row;
  
  
  //Fields
  
  
  var ChapterTitleUrl_ = goog.string.getRandomString();
  var RetrieveWorkUrl_ = goog.string.getRandomString();
  var WorkId_ = goog.string.getRandomString();
  var WorkBodyUrl_ = goog.string.getRandomString();
  var WorkTitleUrl_ = goog.string.getRandomString();
  
  var callOnRefresh_;
  var initializeTheGrid_;
  
  //Test Hooks
  
  beforeEach(function() {
    callOnRefresh_ = function(){};
    initializeTheGrid_ = function(){};
  });
  
  
  //Support Methods
  
  var callTheMethod_ = function() {
    return Current_.initialize(WorkId_, RetrieveWorkUrl_, ChapterTitleUrl_,
                               WorkTitleUrl_, WorkBodyUrl_, callOnRefresh_,
                               initializeTheGrid_);
  };
  
  
  //Test Methods
  
  it('should create a grid builder to house the work.', function() {
    var methodWasCalled = false;
    
    initializeTheGrid_ = function(options){
      methodWasCalled = Constant_.WorkContainer !== undefined && 
        options[GridBuilderConstant_.ContainerClass] === Constant_.WorkContainer &&
        options[GridBuilderConstant_.ContainerId] === Constant_.WorkContainer &&
        options[GridBuilderConstant_.Url] === RetrieveWorkUrl_ && 
        options[GridBuilderConstant_.MainParameter] === WorkId_ &&
        options[GridBuilderConstant_.Parameters][ViewConstant_.Page] === 0 &&
        options[GridBuilderConstant_.Map][GridBuilderConstant_.HeaderText] === '' &&
        options[GridBuilderConstant_.Map][GridBuilderConstant_.PropertyName] === '' &&
        options[GridBuilderConstant_.Map][ControlConstant_.Class] === '' &&
        options[GridBuilderConstant_.CallOnRefresh] === callOnRefresh_ &&
        options[Constant_.ChapterTitleUrl] === ChapterTitleUrl_ &&
        options[Constant_.WorkBodyUrl] === WorkBodyUrl_ &&
        options[Constant_.WorkTitleUrl] === WorkTitleUrl_ &&
        options[GridBuilderConstant_.CreateARow] === WorkContentRow_.create;
      
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
};



describe('When creating the work content grid , it', function() {
  src.test.view.workContent.whenInitializingAWorkContentGrid.describe();
});


//--namespace="src.test.view.workContent.whenInitializingAWorkContentGrid" ^

goog.require('goog.string');
goog.require('src.base.control.controlConstant');
goog.require('src.base.control.gridBuilder.constant');
goog.require('src.base.control.wall');
goog.require('src.site.view.constant');
goog.require('src.site.view.mainContent');
goog.require('src.site.view.workContent');
goog.require('src.site.view.workContent.constant');


goog.provide('src.test.view.mainContent.whenInitializingAMainContent');

/**
 @export
 */
src.test.view.mainContent.whenInitializingAMainContent.describe = function () {
  
  //Using
  
  var AuthorNameUpdate_ = goog.string.getRandomString();
  var AuthorSummaryUpdate_ = goog.string.getRandomString();
  var Constant_ = src.site.view.mainContent.constant;
  var ControlConstant_ = src.base.control.controlConstant;    
  var Current_ = src.site.view.mainContent;
  var GridBuilderConstant_ = src.base.control.gridBuilder.constant;
  var RetrieveInformation_ = goog.string.getRandomString();
  var ViewConstant_ = src.site.view.constant;
  var WorkContentConstant_ = src.site.view.workContent.constant;
  var WorkContent_ = src.site.view.workContent;
  var WorkSummaryUpdate_ = goog.string.getRandomString();
  var WorkTitleUpdate_ = goog.string.getRandomString();
  
  
  //Fields
  
  var ChapterTitleUrl_ = goog.string.getRandomString();
  var ContainerId_ = goog.string.getRandomString();
  var DeleteWallItemUrl_ = goog.string.getRandomString();
  var EditWallItemUrl_ = goog.string.getRandomString();
  var PageId_ = goog.string.getRandomString();
  var PostWallTo_ = goog.string.getRandomString();
  var RetrieveWallItemsUrl_ = goog.string.getRandomString();
  var RetrieveWorkUrl_ = goog.string.getRandomString();
  var WorkBodyUrl_ = goog.string.getRandomString();
  var WorkId_ = goog.string.getRandomString();
  var WorkTitleUrl_ = goog.string.getRandomString();
  
  
  var appendChild_;
  var createClearDiv_;
  var createWallRefreshHandler_;
  var createADiv_;
  var document_;
  var grid_;
  var gridResult_;
  var initializeTheGrid_;
  var initializeTheWall_;
  var initializeWorkInformation_;
  var options_;
  var parentContainer_;
  var wall_;
  var wallResult_;
  
  
  //Test Hooks
  
  beforeEach(function() {
    document_ = {};
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
    
    wall_ = {};
    wallResult_ = {};
    wallResult_[ControlConstant_.CreatedControl] = wall_;
    initializeTheWall_ = function(){ return wallResult_; };
    
    appendChild_ = function() {};
    createClearDiv_ = function(){};
    createWallRefreshHandler_ = function(){};
    initializeWorkInformation_ = function(){};
  });
  
  
  //Support Methods
  
  var callTheMethod_ = function() {
    return Current_.initialize(WorkId_, PageId_, document_, RetrieveWorkUrl_, ChapterTitleUrl_, WorkTitleUrl_,
                               WorkBodyUrl_, RetrieveInformation_, AuthorNameUpdate_, AuthorSummaryUpdate_,
                               WorkTitleUpdate_, WorkSummaryUpdate_, ContainerId_, PostWallTo_,
                               RetrieveWallItemsUrl_, DeleteWallItemUrl_, EditWallItemUrl_, createADiv_,
                               initializeWorkInformation_, initializeTheGrid_, initializeTheWall_,
                               createClearDiv_, createWallRefreshHandler_, appendChild_);
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
  
  
  it('should create the page wall control.', function() {
    var methodWasCalled = false;
    
    initializeTheWall_ = function(document, containerId, postTo, retrieveItemsUrl, deleteUrl,
                                  subjectId, editableUrl){
      methodWasCalled = Constant_.WallContainer !== undefined && 
        document === document_ &&
        containerId === Constant_.WallContainer &&
        postTo === PostWallTo_ &&
        retrieveItemsUrl === RetrieveWallItemsUrl_ &&
        deleteUrl === DeleteWallItemUrl_ &&
        subjectId === PageId_ &&
        editableUrl === EditWallItemUrl_;

      return wallResult_;
    };
    
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });

  
  
  
  it('should create the work information control.', function() {
    var methodWasCalled = false;
    
    
    
    initializeWorkInformation_ = function(workId, containerId, retrieveInformation, authorNameUpdate,
                                          authorSummaryUpdate, workTitleUpdate, workSummaryUpdate){
      
      methodWasCalled = Constant_.WorkInformationContainer !== undefined && 
        workId === WorkId_ &&
        containerId === Constant_.WorkInformationContainer &&
        retrieveInformation === RetrieveInformation_ &&
        authorNameUpdate === AuthorNameUpdate_ &&
        authorSummaryUpdate === AuthorSummaryUpdate_ &&
        workTitleUpdate === WorkTitleUpdate_ &&
        workSummaryUpdate === WorkSummaryUpdate_;
    };
    
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  it('should append the work information to the parent.', function() {
    var methodWasCalled = false;
    var workInformation = {};
    
    initializeWorkInformation_ = function(){
      return workInformation;
    };
    
    appendChild_ = function(parent, child){
      methodWasCalled = methodWasCalled || 
        (parent === parentContainer_ && child === workInformation);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  it('should create the wall refresh handler.', function() {
    var methodWasCalled = false;
    
    createWallRefreshHandler_ = function(result, refreshGrid){
      methodWasCalled = result === wallResult_ &&
        refreshGrid ===  src.base.control.wall.refresh;
    };
    
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  it('should initialize the work content grid.', function() {
    var methodWasCalled = false;
    
    var wallRefreshHandler_ = function(){};
    
    
    createWallRefreshHandler_ = function(){
      return wallRefreshHandler_;
    };
    
    initializeTheGrid_ = function(workId, retrieveWorkUrl, chapterTitleUrl,
                                  workTitleUrl, workBodyUrl, callOnRefresh){
      
      methodWasCalled = workId === WorkId_ &&
        retrieveWorkUrl === RetrieveWorkUrl_ &&
        chapterTitleUrl === ChapterTitleUrl_ &&
        workTitleUrl ===  WorkTitleUrl_ &&
        workBodyUrl === WorkBodyUrl_ &&
        callOnRefresh === wallRefreshHandler_;
      
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

  
  it('should append the wall to the parent.', function() {
    var methodWasCalled = false;
    
    appendChild_ = function(parent, child){
      methodWasCalled = methodWasCalled || 
        (parent === parentContainer_ && child === wall_);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
   
  
  it('should append a clear div.', function() {
    var methodWasCalled = false;
    var clearDiv = {};
    
    createClearDiv_ = function() {
      return clearDiv;
    };
    
    appendChild_ = function(parent, child){
      methodWasCalled = methodWasCalled || 
        (parent === parentContainer_ && child === clearDiv);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  
  
  it('should return the parent container.', function() {
    expect(callTheMethod_()).toBe(parentContainer_);
  });    
};

describe('When initializing a MainContent, it', function() {
  src.test.view.mainContent.whenInitializingAMainContent.describe();
});

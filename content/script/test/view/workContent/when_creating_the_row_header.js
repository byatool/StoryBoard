goog.require('goog.string');
goog.require('src.site.view.workContentRow');
goog.require('src.site.view.workContentRow.constant');

goog.provide('src.test.view.workContentRow.whenCreatingTheRowHeader');

/**
 @export
 */
src.test.view.workContentRow.whenCreatingTheRowHeader.describe = function () {
  
  //Using
  
  var Constant_ = src.site.view.workContentRow.constant;
  var ControlConstant_ = src.base.control.controlConstant;
  var Current_ = src.site.view.workContentRow;
  
  
  //Fields
  
  
  
  var appendChild_;
  var createADiv_;
  var currentItem_;
  var initializeEditableDiv_;
  var options_;
  var workContentRowHeader_;
  
  //Test Hooks
  
  beforeEach(function() {
    currentItem_ = {};
    options_ = {};
    workContentRowHeader_ = {};
    
    appendChild_ = function(){ };
    createADiv_ = function(){ return workContentRowHeader_; };
    initializeEditableDiv_ = function(){};
  });
  
  
  //Support Methods
  
  var callTheMethod_ = function() {
    return Current_.createTheRowHeader(currentItem_, options_, createADiv_,
                                       initializeEditableDiv_, appendChild_);
  };
  
  //Test Methods
  
  
  it('should create the row header.', function() {
    var methodWasCalled = false;
    
    createADiv_ = function(attributes){
      methodWasCalled = methodWasCalled ||
        (Constant_.WorkContentRowHeader !== undefined &&
         attributes[ControlConstant_.Class] === Constant_.WorkContentRowHeader);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  it('should create the chapter title editable div.', function() {
    var methodWasCalled = false;
    
    var chapterId = goog.string.getRandomString();
    var chapterTitleUrl = goog.string.getRandomString();
    var chapterTitleText = goog.string.getRandomString();
    
    currentItem_[Constant_.ParameterChapterTitle] = chapterTitleText;
    currentItem_[Constant_.ParameterChapterId] = chapterId;
    options_[Constant_.ChapterTitleUrl] = chapterTitleUrl;
    
    initializeEditableDiv_ = function(name, text, id, url){
      methodWasCalled = methodWasCalled ||
        (Constant_.ChapterTitleContainerId !== undefined &&
         Constant_.ParameterChapterId !== undefined &&
         Constant_.ParameterChapterTitle !== undefined &&
         Constant_.ChapterTitleUrl !== undefined &&
         name === Constant_.ChapterTitleContainerId &&
         text === chapterTitleText &&
         id === chapterId &&
         url === chapterTitleUrl);
    };
    
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  it('should append the chapter title div to the header.', function() {
    var methodWasCalled = false;
    var chapterTitleDiv = {};
    
    initializeEditableDiv_ = function(name) {
      return name === Constant_.ChapterTitleContainerId ?
        chapterTitleDiv :
        {};
    };
    
    appendChild_ = function(parent, child){
      methodWasCalled = methodWasCalled || 
        (parent === workContentRowHeader_ && child === chapterTitleDiv);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  it('should create the work title editable div.', function() {
    var methodWasCalled = false;
    var workId = goog.string.getRandomString();
    var workTitleUrl = goog.string.getRandomString();
    var workTitleText = goog.string.getRandomString();
    
    currentItem_[Constant_.ParameterWorkTitle] = workTitleText;
    currentItem_[Constant_.ParameterWorkId] = workId;
    options_[Constant_.WorkTitleUrl] = workTitleUrl;
    
    initializeEditableDiv_ = function(name, text, id, url){
      methodWasCalled = methodWasCalled ||
        (Constant_.WorkTitleContainerId !== undefined &&
         Constant_.ParameterWorkId !== undefined &&
         Constant_.ParameterWorkTitle !== undefined &&
         Constant_.WorkTitleUrl !== undefined &&
         name === Constant_.WorkTitleContainerId &&
         text === workTitleText &&
         id === workId &&
         url === workTitleUrl);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
};

describe('When creating the row header, it', function() {
  src.test.view.workContentRow.whenCreatingTheRowHeader.describe();
});


//--namespace="src.test.view.workContentRow.whenCreatingTheRowHeader" ^


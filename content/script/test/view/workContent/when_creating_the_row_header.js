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
  var createAClearDiv_;
  var createADiv_;
  var currentItem_;
  var initializeEditableDiv_;
  var options_;
  var setTextContent_;
  var workContentRowHeader_;
  
  //Test Hooks
  
  beforeEach(function() {
    currentItem_ = {};
    options_ = {};
    workContentRowHeader_ = {};
    
    appendChild_ = function(){ };
    createAClearDiv_ = function(){};
    createADiv_ = function(){ return workContentRowHeader_; };
    initializeEditableDiv_ = function(){};
    setTextContent_ = function(){};
    
  });
  
  
  //Support Methods
  
  var callTheMethod_ = function() {
    return Current_.createTheRowHeader(currentItem_, options_, createADiv_,
                                       initializeEditableDiv_, setTextContent_,
                                       createAClearDiv_, appendChild_);
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
  
  
  it('should append the work title holder to the parent.', function() {
    var methodWasCalled = false;
    var workTitleHolder = {};
    
    initializeEditableDiv_ = function(name) {
      return name === Constant_.WorkTitleContainerId ?
        workTitleHolder :
        {};
    };
    
    appendChild_ = function(parent, child){
      methodWasCalled = methodWasCalled || 
        (parent === workContentRowHeader_ && child === workTitleHolder);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  it('should create the author name holder.', function() {
    var methodWasCalled = false;
    
    createADiv_ = function(attributes){
      methodWasCalled = methodWasCalled ||
        (Constant_.AuthorNameContainer !== undefined &&
         attributes[ControlConstant_.Id] === Constant_.AuthorNameContainer &&
         attributes[ControlConstant_.Class] === Constant_.AuthorNameContainer);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  it('should set the text of the author name container.', function() {
    var methodWasCalled = false;
    var authorName = goog.string.getRandomString();
    var authorNameHolder = {};
    
    createADiv_ = function(attributes) {
      return attributes[ControlConstant_.Id] === Constant_.AuthorNameContainer ?
        authorNameHolder :
        workContentRowHeader_;
    };
    
    currentItem_[Constant_.ParameterAuthorName] = authorName;
    
    setTextContent_ = function(element, text){
      methodWasCalled = methodWasCalled ||
        (element === authorNameHolder &&
         Constant_.ParameterAuthorName !== undefined  &&
         text === currentItem_[Constant_.ParameterAuthorName]);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  it('should append the author name holder to the parent.', function() {
    var methodWasCalled = false;
    var authorNameHolder = {};
    
    createADiv_ = function(attributes) {
      return attributes[ControlConstant_.Id] === Constant_.AuthorNameContainer ?
        authorNameHolder :
        workContentRowHeader_;
    };
    
    appendChild_ = function(parent, child){
      methodWasCalled = methodWasCalled || 
        (parent === workContentRowHeader_ && child === authorNameHolder);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });


  
  it('should append the clear div to the parent.', function() {
    var methodWasCalled = false;
    var clearDiv = {};

    createAClearDiv_ = function(){
      return clearDiv;
    };
 
    appendChild_ = function(parent, child){
      methodWasCalled = methodWasCalled || 
        (parent === workContentRowHeader_ && child === clearDiv);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  
  it('should return the created header row.', function() {
    expect(callTheMethod_()).toBe(workContentRowHeader_);
  });
  
};

describe('When creating the row header, it', function() {
  src.test.view.workContentRow.whenCreatingTheRowHeader.describe();
});


//--namespace="src.test.view.workContentRow.whenCreatingTheRowHeader" ^


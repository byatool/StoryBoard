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
  
  var PageNumber_ = goog.string.getRandomString();
  
  var appendChild_;
  var createAClearDiv_;
  var createADiv_;
  var currentItem_;
  var initializeEditableDiv_;
  var pageNumberContainer_;
  var options_;
  var setTextContent_;
  var workContentRowHeader_;
  
  //Test Hooks
  
  beforeEach(function() {
    currentItem_ = {};
    currentItem_[Constant_.PageNumber] = PageNumber_;
    options_ = {};
    pageNumberContainer_ = {};
    workContentRowHeader_ = {};
    
    createADiv_ = function(attributes) {
      if(attributes[ControlConstant_.Class] === Constant_.PageNumberContainer) {
        return pageNumberContainer_;
      }
      else{
        return workContentRowHeader_; 
      }
    };
    
    appendChild_ = function(){ };
    createAClearDiv_ = function(){};
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


  it('should create the page number holder.', function() {
    var methodWasCalled = false;
    
    createADiv_ = function(attributes){
      methodWasCalled = methodWasCalled ||
        (Constant_.PageNumberContainer !== undefined &&
         attributes[ControlConstant_.Class] === Constant_.PageNumberContainer);
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  it('should set the text of the page number container.', function() {
    var methodWasCalled = false;
    
    setTextContent_ = function(element, text){
      methodWasCalled = methodWasCalled ||
        (Constant_.PageNumber !== undefined && 
         element === pageNumberContainer_ &&
         text === PageNumber_);
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


  
  it('should append the page number holder to the parent.', function() {
    var methodWasCalled = false;
    
    appendChild_ = function(parent, child){
      methodWasCalled = methodWasCalled || 
        (parent === workContentRowHeader_ && child === pageNumberContainer_);
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


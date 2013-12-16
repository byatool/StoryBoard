goog.require('goog.dom');
goog.require('src.base.control.controlConstant');
goog.require('src.base.control.editableDiv');
goog.require('src.base.control.gridBuilder.constant');
goog.require('src.base.helper.domCreation');
goog.require('src.base.helper.domCreation');
goog.require('src.site.view.constant');
goog.require('src.site.view.workContent.constant');
goog.require('src.site.view.workContent.row');

goog.provide('src.site.view.workContent');


/* PROTECTED FUNCTIONS */


/**
 @param {string} workId The id for the work to view.
 @param {string}  retrieveWorkUrl The url to find the work
 information.
 @param {string} chapterTitleUrl The url needed to update the
 chapter param.
 @param {string} workTitleUrl The url needed to update the
 work title.
 @param {string} workBodyUrl The url needed to update the
 body text.
 @param {?function} initializeTheGrid The function used to
 fill the grid.
 @return {Object} The created content grid.
 @protected
 */
src.site.view.workContent.initialize =
  function(workId, retrieveWorkUrl, chapterTitleUrl,
           workTitleUrl, workBodyUrl, initializeTheGrid) {

    initializeTheGrid = initializeTheGrid ?
      initializeTheGrid :
      src.base.control.gridBuilder.initialize;

    /* Start */

    var Constant_ = src.site.view.workContent.constant;
    var ControlConstant_ = src.base.control.controlConstant;
    var GridBuilderConstant_ = src.base.control.gridBuilder.constant;
    var ViewConstant_ = src.site.view.constant;
    var WorkContentRow_ = src.site.view.workContent.row;

    var contentGridOptions = {};

    contentGridOptions[GridBuilderConstant_.ContainerClass] = Constant_.WorkContainer;
    contentGridOptions[GridBuilderConstant_.ContainerId] = Constant_.WorkContainer;
    contentGridOptions[GridBuilderConstant_.Url] = retrieveWorkUrl;

    contentGridOptions[GridBuilderConstant_.MainParameter] = workId;

    contentGridOptions[GridBuilderConstant_.Parameters] = {};
    contentGridOptions[GridBuilderConstant_.Parameters][ViewConstant_.Page] = 0;

    contentGridOptions[GridBuilderConstant_.Map] = {};
    contentGridOptions[GridBuilderConstant_.Map][GridBuilderConstant_.HeaderText] = '';
    contentGridOptions[GridBuilderConstant_.Map][GridBuilderConstant_.PropertyName] = '';
    contentGridOptions[GridBuilderConstant_.Map][ControlConstant_.Class] = '';

    contentGridOptions[Constant_.ChapterTitleUrl] = chapterTitleUrl;
    contentGridOptions[Constant_.WorkBodyUrl] = workBodyUrl;
    contentGridOptions[Constant_.WorkTitleUrl] = workTitleUrl;
    contentGridOptions[GridBuilderConstant_.CreateARow] = WorkContentRow_.create;

    return initializeTheGrid(contentGridOptions);
  };



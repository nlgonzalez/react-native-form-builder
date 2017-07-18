Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/questions/YesNoQuestion.js';var _react=require('react');var _react2=_interopRequireDefault(_react);var _nativeBase=require('native-base');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var YesNoQuestion=function YesNoQuestion(_ref){var answer=_ref.answer,question=_ref.question,onChange=_ref.onChange;var change=function change(value){return onChange({target:{name:question.name,value:value}});};return _react2.default.createElement(_nativeBase.Content,{__source:{fileName:_jsxFileName,lineNumber:8}},_react2.default.createElement(_nativeBase.View,{__source:{fileName:_jsxFileName,lineNumber:9}},_react2.default.createElement(_nativeBase.Badge,{__source:{fileName:_jsxFileName,lineNumber:10}},_react2.default.createElement(_nativeBase.Text,{__source:{fileName:_jsxFileName,lineNumber:11}},question.number?''+question.number:'')),_react2.default.createElement(_nativeBase.Label,{__source:{fileName:_jsxFileName,lineNumber:13}},question.text)),_react2.default.createElement(_nativeBase.View,{__source:{fileName:_jsxFileName,lineNumber:15}},_react2.default.createElement(_nativeBase.ListItem,{onClick:function onClick(){return change(true);},__source:{fileName:_jsxFileName,lineNumber:16}},_react2.default.createElement(_nativeBase.Text,{__source:{fileName:_jsxFileName,lineNumber:19}},'1 '),_react2.default.createElement(_nativeBase.Radio,{selected:answer===true,onPress:function onPress(){return change(true);},__source:{fileName:_jsxFileName,lineNumber:20}}),_react2.default.createElement(_nativeBase.Text,{__source:{fileName:_jsxFileName,lineNumber:24}},' Si ')),_react2.default.createElement(_nativeBase.ListItem,{onPress:function onPress(){return change(false);},__source:{fileName:_jsxFileName,lineNumber:26}},_react2.default.createElement(_nativeBase.Text,{__source:{fileName:_jsxFileName,lineNumber:29}},'2 '),_react2.default.createElement(_nativeBase.Radio,{selected:answer===false,onPress:function onPress(){return change(false);},__source:{fileName:_jsxFileName,lineNumber:30}}),_react2.default.createElement(_nativeBase.Text,{__source:{fileName:_jsxFileName,lineNumber:34}},' No '))));};YesNoQuestion.propTypes={answer:_react.PropTypes.bool,onChange:_react.PropTypes.func.isRequired,question:_react.PropTypes.shape({}).isRequired};YesNoQuestion.defaultProps={answer:null};exports.default=YesNoQuestion;
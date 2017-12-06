'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProjectSchema = new _mongoose2.default({
	title: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	photo: {},
	list: {
		type: String,
		required: true
	}
});

exports.default = mongoose.model('Project', ProjectSchema);
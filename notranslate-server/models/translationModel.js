'use strict';

var debug = require('debug');
var error = debug('reportModel:error');
var log = debug('reportModel:log');

var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Translation = new Schema({
    phrase: {
        type: String
    },
    context: {
        type: String
    },
    translation: {
        type: String
    },
    gender: {
        type: String
    }
},
{
    timestamps: true
});


Translation.set('toJSON', {
    transform: function (doc, ret, options) {
        return ret;
    }
});

module.exports = mongoose.model('Translation', Translation);

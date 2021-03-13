'use strict'
const mongoose = require('mongoose');
const schema_admin = new mongoose.Schema({
    'usuario': { type: String, required: true, unique: true },
    'contrasenna': { type: String, required: true, unique: false }
});

module.exports = mongoose.model('Admin', schema_admin, 'Admin');
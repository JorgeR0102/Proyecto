'use strict'
const mongoose = require('mongoose');
const schema_cancion = new mongoose.Schema({
    'nombre': { type: String, required: true, unique: true },
    'duracion': { type: Number, required: true, unique: false },
    'artista': { type: String, required: true, unique: false },
    'album': { type: String, required: false, unique: false },
});

module.exports = mongoose.model('Cancion', schema_cancion, 'cancion');
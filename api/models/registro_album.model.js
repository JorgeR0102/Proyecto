'use strict'
const mongoose = require('mongoose');
const schema_album = new mongoose.Schema({
    'codigo': { type: Number, required: true, unique: true },
    'nombre': { type: String, required: true, unique: false },
    'fecha': { type: Date, required: true, unique: false },
    'cantidad_canciones': { type: Number, required: true, unique: false },
    'duracion': { type: Number, required: true, unique: false },
    'artista': { type: String, required: true, unique: false }
});

module.exports = mongoose.model('Album', schema_album, 'album');
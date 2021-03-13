'use strict'
const mongoose = require('mongoose');
const schema_playlist = new mongoose.Schema({
    'nombre': { type: String, required: true, unique: false },
    'correo': { type: String, required: true, unique: false },
    canciones: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cancion'
    }]
});

module.exports = mongoose.model('Playlist', schema_playlist, 'playlist');
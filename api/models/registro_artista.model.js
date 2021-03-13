'use strict'
const mongoose = require('mongoose');
const schema_artista = new mongoose.Schema({
    'nombre': { type: String, required: true, unique: true },
    'disquera': { type: String, required: true, unique: false },
    'edad': { type: Number, required: true, unique: false },
});

module.exports = mongoose.model('Artista', schema_artista, 'artistas');
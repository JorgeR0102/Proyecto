'use strict'
const mongoose = require('mongoose');
const schema_usuario = new mongoose.Schema({
    'nombre': { type: String, required: true, unique: false },
    'fecha_nacimiento': { type: Date, required: true, unique: false },
    'correo': { type: String, required: true, unique: true },
    'sexo': { type: String, required: true, unique: false },
    'usuario': { type: String, required: true, unique: false },
    'contrasenna': { type: String, required: true, unique: false }
});

module.exports = mongoose.model('Usuarios', schema_usuario, 'usuarios');
'use strict'
const express = require('express');
const Usuarios = require('../models/registro_usuario.model')
const Admin = require('../models/admin.model')
const router = new express.Router();

router.post('/registro-usuario', (req, res) => {
    let obj_usuario = JSON.parse(req.body.usuario)
    let nuevo_usuario = new Usuarios({
        'nombre': obj_usuario.nombre,
        'fecha_nacimiento': obj_usuario.fecha,
        'correo': obj_usuario.correo,
        'sexo': obj_usuario.sexo,
        'usuario': obj_usuario.usuario,
        'contrasenna': obj_usuario.contrasenna
    })
    nuevo_usuario.save((err, usuario_bd) => {
        if (err) {
            res.json({
                'msj': 'Hubo un error en el proceso',
                err
            })
        } else {
            res.json({
                'msj': 'El usuario se registro exitosamente',
                usuario_bd
            })
        }
    })
});


router.get('/inicio-sesion', (req, res) => {
    Usuarios.findOne({ correo: req.query.correo }, (err, usuario_bd) => {
        if (err) {
            res.json({
                'msj': 'Hubo un error en el proceso',
                err
            })
        } else {
            res.json({
                'msj': 'El usuario inicio sesion exitosamente',
                usuario_bd
            })
        }
    })
});

router.get('/inicio-sesionAd', (req, res) => {
    Admin.findOne({ usuario: req.query.usuario }, (err, admin_bd) => {
        if (err) {
            res.json({
                'msj': 'Hubo un error en el proceso',
                err
            })
        } else {
            res.json({
                'msj': 'El admin inicio sesion exitosamente',
                admin_bd
            })
        }
    })
});

router.get('/obtener-user', (req, res) => {
    Usuarios.find((err, usuario_bd) => {
        if (err) {
            res.json({
                'msj': 'Hubo un error en el proceso',
                err
            })
        } else {
            res.json({
                'msj': 'Los usuarios se han encontrado de manera exitosa',
                usuario_bd
            })
        }
    })
});

module.exports = router;
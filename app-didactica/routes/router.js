const express = require('express')
const router = express.Router()
const conexion = require('../database/db');
const authController = require('../controllers/authController')

//Rutas para las vistas
router.get('/', (req, res) => {
    res.render('index')
})
router.get('/login', (req, res) => {
    res.render('login', { alert: false })
})
router.get('/register', (req, res) => {
    res.render('register', { alert: false })
})
router.get('/aboutus', (req, res) => {
    res.render('aboutus', { alert: false })
})
router.get('/dashboard', authController.isAuthenticated, (req, res) => {
    res.render('dashboard')
})

//Rutas para los métodos del controlador
router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/logout', authController.logout)

module.exports = router
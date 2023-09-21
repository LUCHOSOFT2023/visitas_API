const {Router} = require('express')

//Desestructuración. Extraer un atributo de un objeto

const route = Router() 

//Importar métodos del controlador
const {compraGet, compraPost, compraPut, compraDelete} = require('../controllers/compras')

route.get('/', compraGet) //Listar los datos

route.post('/', compraPost) //Insertar Datos

route.put('/', compraPut) //Modificar los datos

route.delete('/', compraDelete) //Eliminar los datos

module.exports = route
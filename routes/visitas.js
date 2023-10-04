const {Router} = require('express')

//Desestructuración. Extraer un atributo de un objeto

const route = Router() 

//Importar métodos del controlador
const {visitaGet, visitaPost, visitaPut, visitaDelete} = require('../controllers/usuarios')

route.get('/', visitaGet) //Listar los datos

route.post('/',  visitaPost) //Insertar Datos

route.put('/',visitaPut) //Modificar los datos

route.delete('/', visitaDelete) //Eliminar los datos

module.exports = route
const {Router} = require('express')

//Desestructuración. Extraer un atributo de un objeto

const route = Router() 

//Importar métodos del controlador
const {categoriaGet, categoriaPost, categoriaPut, categoriaDelete} = require('../controllers/categorias')

route.get('/', categoriaGet) //Listar los datos

route.post('/', categoriaPost) //Insertar Datos

route.put('/', categoriaPut) //Modificar los datos

route.delete('/', categoriaDelete) //Eliminar los datos

module.exports = route
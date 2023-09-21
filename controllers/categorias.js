const {response} = require('express')


//Importación de los modelos
const Categoria = require('../models/categorias')

//Método GET de la API
const categoriaGet = async(req, res = response) =>{
    const {id_categoria_productos} = req.query;//Desestructuración
    //Consultar todos las categorias
    try {
        let categoria;

        if (id_categoria_productos) {
            // Si se proporciona un id, realizar una búsqueda por nombre
            categoria = await categoria.find({ id_categoria_productos: id_categoria_productos });
        } else {
            categoria= await Categoria.find();
        }

        res.json({ categoria });
    } catch (error) {
        console.error('Error al buscar la categoria:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}

const categoriaPost = async(req, res) => {
    let mensaje = "Inserción exitosa"
    const body = req.body
    try {
        const categoria= new Categoria(body)
        await categoria.save() //Inserta en la colección
    }catch (error) {
        mensaje = "Se presentaron problemas en la inserción"
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}

const categoriaPut = async(req, res) => {

    const {id_categoria_productos, nombre_categoria, estado_categoria} = req.body

    let mensaje = "Modificación exitosa"

    try {
        await Categoria.updateMany({id_categoria_productos:id_categoria_productos}, {$set: {
            nombre_categoria: nombre_categoria,
            estado_categoria: estado_categoria,

        }});

    }catch (error) {
        mensaje = "Se presentaron problemas en la modificación."
    }
    res.json({
        msg: mensaje
    })
}

const categoriaDelete = async (req, res) => {
    const {id_categoria_productos} = req.query
    let mensaje = ''

    try{
        const categoria = await Categoria.deleteOne({id_categoria_productos: id_categoria_productos})
        mensaje = 'La eliminación se efectuó exitosamente'
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminación'
    }

    res.json({
        msg: mensaje
    })
}

module.exports = {
    categoriaGet,
    categoriaPost,
    categoriaPut,
    categoriaDelete
}
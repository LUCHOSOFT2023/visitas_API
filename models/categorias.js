const  {Schema,model} = require('mongoose')

const CategoriaSchema = Schema({

 id_categoria_productos:{
    type: Number,
    unique:true,
    required: [true, 'El id de la categoria es necesario']
 },

 nombre_categoria:{
    type: String,
    required:[true, 'El nombre de la categoria es necesario']
 },

  estado_categoria:{
    type: Boolean,
    default: true,
  }

})

//Exportar la funcion CategoriaSchema
module.exports= model('categoriasNuevas',CategoriaSchema)
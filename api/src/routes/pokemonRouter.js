
const {Router}=require('express');
const pokemonRouter=Router();
const {getPokemonByIdHandler}=require('../handlers/getPokemonByIdHandler')
const {createPokemonHandler} = require('../handlers/createPokemonHandler');
const {getAllPokemonHandler}=require('../handlers/getAllPokemonHandler')
const {deletePokemonHandler}= require('../handlers/deletePokemonHandler')


const multer = require('multer');

/*
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  });
  */

  const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, // limita el tamaño de la imagen a 5MB
    },
});


 // const upload = multer({ storage: storage });
pokemonRouter.get('/:id', getPokemonByIdHandler);
pokemonRouter.get('/', getAllPokemonHandler);
pokemonRouter.post('/', upload.single('image'), createPokemonHandler);


// ruta agregada
pokemonRouter.delete('/:id',deletePokemonHandler )



module.exports= {pokemonRouter};
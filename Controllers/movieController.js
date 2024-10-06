const movieModuls = require('../Moduls/movieModuls')


const defultController =async (req, res) => {
    
    const viewMovieList =await movieModuls.find()
    console.log("view",viewMovieList);
    res.render('index', {movie: viewMovieList })
    
}
const addform = (req , res)=>{
    res.render('addform')
}

const addmovieController =async (req, res) => {
    const movieData = {
        movie_title: req.body.title ,
        relese_date:req.body.date,
        genre:  req.body.genre ,
        movie_reating:  req.body.reating ,
        path: req.file.path ,
        movie_description: req.body.description  ,
    }

    const addMovie = new movieModuls(movieData)
    await addMovie.save()
    console.log("addmmovie",addMovie);
    res.redirect('/')
}
const ContactController = (req, res) => {
    res.render('contactForm')
}

module.exports = { defultController,addform, addmovieController, ContactController }
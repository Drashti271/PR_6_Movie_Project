import Movie from "../../models/movie.model.js";
import fs from 'fs';

export const dashboard = (req,res)=>{
    return res.render('./server/index.ejs');
}

export const addMoviePage = (req,res)=>{
    return res.render('./server/pages/addMovie.ejs');
}

export const viewMoviePage = (req,res)=>{
    return res.render('./server/pages/viewMovies.ejs');
}

export const editMoviePage = (req,res)=>{
    return res.render('./server/pages/editMovie.ejs');
}

export const addMovie = async(req,res)=>{
    try {
        req.body.image = req.file.path;      
        let data = await Movie.create(req.body);
        console.log(data);        
        return res.redirect(req.get('Referrer') || '/');
    } catch (error) {
        return res.redirect(req.get('Referrer') || '/');
    }
}

export const viewMovie = async (req,res) => {
    try {
        const movies = await Movie.find({});
        console.log(movies);
        return res.render('./server/pages/viewMovies.ejs',{
            movies
        })
    } catch (error) {
        return res.render('./server/pages/viewMovies.ejs',{
            movies:[]
        })
    }
}

export const deleteMovie = async (req,res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findById(id);
        await Movie.findByIdAndDelete(id);
        fs.unlinkSync(movie.image);
        return res.redirect('/admin/view-movies');
    } catch (error) {
        console.log(error.message);
    }
}

export const editMovie = async (req,res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findById(id);
        return res.render('./server/pages/editMovie.ejs',{
            movie
            
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;

        const movie = await Movie.findById(id);
        if (!movie) {
            return res.redirect('/admin/view-movies');
        }

        if (req.file) {
            if (fs.existsSync(movie.image)) {
                fs.unlinkSync(movie.image);
            }
            req.body.image = req.file.path;
        } else {
            req.body.image = movie.image;
        }

        await Movie.findByIdAndUpdate(id, req.body, { new: true });

        return res.redirect('/admin/view-movies');
    } catch (error) {
        console.log(error.message);
        return res.redirect('/admin/view-movies');
    }
};


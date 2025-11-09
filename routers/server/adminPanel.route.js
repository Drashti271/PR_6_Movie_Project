import { Router } from "express";
import { addMoviePage, dashboard, addMovie, viewMovie, deleteMovie, editMovie, updateMovie } from "../../controllers/server/adminPanel.controller.js";
import imageUpload from "../../middlewares/imageUpload.js";

const adminPanelRouter = Router();

adminPanelRouter.get('/',dashboard);
adminPanelRouter.get('/add-movie',addMoviePage);
adminPanelRouter.post('/add-movie',imageUpload,addMovie);
adminPanelRouter.get('/view-movies',viewMovie);
adminPanelRouter.get('/delete/:id',deleteMovie);
adminPanelRouter.get('/edit/:id',editMovie);
adminPanelRouter.post('/update-movie/:id', imageUpload, updateMovie);

export default adminPanelRouter;
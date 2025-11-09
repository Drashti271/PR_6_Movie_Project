import { Router } from "express";
import { about, contact, homePage, joinus, review, singlePage } from "../../controllers/client/index.js";

const router = Router();

router.get('/',homePage);
router.get('/about',about);
router.get('/review',review);
router.get('/joinus',joinus);
router.get('/contact',contact);
router.get('/single/:id',singlePage);

export default router;

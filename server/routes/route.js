import express from "express";
import { createPost, getAllPosts, getPost ,updatePost,deletePost} from "../controller/post_controller.js";

import {getcontest} from "../controller/archive_controller.js";

import {getgallary} from "../controller/gallary_controller.js";

import { updateleaderboard , getleaderboard} from "../controller/leaderboard_controller.js";

import {getteam} from "../controller/team_controller.js";
const router = express.Router();

router.post('/create',createPost);
router.get('/posts', getAllPosts);
router.get('/post/:id',getPost);

router.post('/update/:id',updatePost);
router.delete('/delete/:id',deletePost);

router.get('/archive',getcontest);
router.get('/gallary',getgallary);

router.post('/leaderboard_update/:id',updateleaderboard);

router.get('/get_leaderboard',getleaderboard);

router.get('/team',getteam);




export default router;
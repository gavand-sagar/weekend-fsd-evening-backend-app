import { readJsonFromFile, writeJsonToFile } from "../file-operations.js";
import { Router } from 'express';
const postRouter = Router();

postRouter.get('/posts', (req, res) => {

    const posts = readJsonFromFile('./posts.json')    

    res.json(posts)
})


postRouter.post('/posts', (req, res) => {

    let user = req.body

    const allPost = readJsonFromFile('./posts.json')

    allPost.push(user)

    writeJsonToFile('./posts.json', allPost)

    res.json(allPost)

})

export default postRouter;
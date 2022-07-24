import { readJsonFromFile, writeJsonToFile } from "../file-operations.js";
import { Router } from 'express';
const userRouter = Router();

userRouter.get('/users', (req, res) => {
    //return all users
    const fileData = readJsonFromFile('./users.json');


    res.json(fileData)
})

userRouter.post('/users', (req, res) => {

    let user = req.body

    const allUsersList = readJsonFromFile('./users.json')

    allUsersList.push(user)
    // this doesn't mean we updated file// we need update file as well

    writeJsonToFile('./users.json', allUsersList)

    res.json('user added')

    // add a entry in users collection
})

userRouter.delete('/users/:username', (req, res) => {
    //return all users
    const username = req.params.username;

    const allUsersList = readJsonFromFile('./users.json')

    const index = allUsersList.findIndex(x => x.username == username);

    if (index > -1) {
        // delete

        allUsersList.splice(index, 1)
        writeJsonToFile('./users.json', allUsersList)

        res.json('user deleted')

    } else {
        res.json('user not found')
    }

})


userRouter.get('/authenticate', (req, res) => {
    const username = req.query.username;
    const password = req.query.password;

    //lookup in database

    const matchingRecord = mainUserList.filter(item => item.username == username && item.password == password)

    if (matchingRecord.length > 0) {
        res.json("Authenticated")
    } else {
        res.json("Invalid credentials")
    }

})


export default userRouter;
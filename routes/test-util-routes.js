
import {Router} from 'express' 
const utils = Router()

utils.get('/', (req, res) => {
    res.send('Homepage')
})

utils.get('/greet', (req, res) => {
    res.send('Welcome to my first server application!!!!!')
})

utils.get('/sadjfkj', (req, res) => {
    res.send('asdkjfklasdjfkjsad')
})

export default utils



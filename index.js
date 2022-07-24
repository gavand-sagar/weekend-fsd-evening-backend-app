import express from "express";
import userRoutes from './routes/users.routes.js'
import mathRoutes from './routes/math.routes.js'
import utilsRoute from "./routes/test-util-routes.js";
const app = express();
app.use(express.json())

app.use(userRoutes);
app.use(mathRoutes);
app.use(utilsRoute)


app.listen(3001, () => {
    console.log('Server is listening on 3001')
})
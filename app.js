import  express  from "express"
import * as dotenv from "dotenv"

dotenv.config()
import cors from 'cors';

const app = express()
app.use(cors({
    origin: '*'
}));

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
import express from 'express'
import userRouter from './app/service/user/router'

const app = express()

app.get('/', (req, res) => {
  res.end('Hello, World')
})

app.use('/user', userRouter)

const port = process.env.PORT || 8000
app.listen(port)

console.log(`Server Listening (${port})`)

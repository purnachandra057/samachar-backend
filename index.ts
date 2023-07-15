import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express'
import Exception from './app/exception/Exception'

import userRouter from './app/service/user/router'

const app = express()

app.get('/', async (req, res) => {
  res.send('Welcome to Samachar Backend')
})

app.use('/user', userRouter)

app.use(
  (
    e: Error | Exception,
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    if (res.headersSent) {
      next(e)
      return
    }
    if (e instanceof Exception) {
      res.status(e.status)
      res.json({ message: e.message })
      return
    }

    next(e)
  },
)

const port = process.env.PORT || 8000

app.listen(port)
console.log(`Server Listening (${port})`)

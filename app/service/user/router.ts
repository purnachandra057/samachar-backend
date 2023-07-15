import express from 'express'
import wrap from 'express-async-handler'

const router = express.Router()

router.get(
  '/',
  wrap(async () => {
    await Promise.reject(1)
  }),
)

export default router

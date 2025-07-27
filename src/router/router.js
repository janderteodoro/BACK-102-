const { Router } = require('express')
const { getTasksController } = require('../controllers/tasks.controller')

const router = Router()

router.get('/tasks', getTasksController)

module.exports = router

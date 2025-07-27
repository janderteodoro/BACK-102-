const {getTasks} = require('../models/tasks.models')

function getTasksController(request, response) {
  const execute = getTasks()
  return response.json(execute)
}


module.exports = {
  getTasksController
}
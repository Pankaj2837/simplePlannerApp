const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        label: 'title',
        max: 100,
      },
      assignTo: {
        type: String,
        label: 'assignTo',
        max: 100,
      },
      taskStatus: {
        type: String,
        label: 'taskStatus',
        max: 100,
      },
      discription: {
        type: String,
        label: 'discription',
        max: 1000,
      },
      createdAt: {
        type: Date,
        label: 'createdAt'
      },
      completedAt: {
        type: Date,
        label: 'completedAt',
        optional:true
      },
      createdBy: {
        type: String,
        label: 'createdBy',
        max: 100,
        optional:true
      },
      changedBy: {
        type: String,
        label: 'changedBy',
        max: 100,
        optional:true
      },
})

module.exports = mongoose.model('tasks', TaskSchema)

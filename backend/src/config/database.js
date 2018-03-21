const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exposts = mongoose.connect('mongodb://localhost/todo')

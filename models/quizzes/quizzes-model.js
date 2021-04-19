const quizzesSchema = require("./quizzes-schema")
const mongoose = require("mongoose")
const quizzesModel = mongoose.model("QuizzesModel", quizzesSchema)

module.exports = quizzesModel
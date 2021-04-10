
module.exports = (app) => {
    const questionService = require("../services/questions/questions-service")

    const findAllQuestions = (req, res) => {
        const questions = questionService.findAllQuestions()
        res.send(questions)
        // questionService.findAllQuestions()
        //     .then((questions) => {
        //         res.send(questions)
        //     })
    }

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params.qzid;
        const questions = questionService.findQuestionsForQuiz(quizId);
        res.send(questions);
        // questionService.findQuestionsForQuiz(quizId)
        //     .then((questions) => {
        //         res.send(questions)
        //     })
    }

    const findQuestionById = (req, res) => {
        const quid = req.params['questionId'];
        const question = questionService.findQuestionById(quid);
        res.send(question);
    }

    app.get("/api/questions", findAllQuestions);
    app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz);
}
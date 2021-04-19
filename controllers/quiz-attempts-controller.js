const quizAttemptDao = require('../daos/quiz-attempts-dao')

module.exports = (app) => {
    app.post('/api/quizzes/:qid/attempts', (req, res) => {
        let attempt = quizAttemptDao.createAttempt( req.params.qid, req.body)
        res.send(attempt)
        console.log(req.body)
    })

    app.get('/api/quizzes/:qid/attempts', (req, res) =>
        quizAttemptDao.findAttemptsForQuiz(req.params.qid)
            .then(attempts => res.send(attempts)))

}

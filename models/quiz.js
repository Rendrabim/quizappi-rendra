module.exports = (sequelize, Sequielize) => {
    const Quiz = sequelize.define('quiz', {
        quiz: {
            type: Sequielize.STRING,
        },
        a: {
            type: Sequielize.STRING,
        },
        b: {
            type: Sequielize.STRING,
        },
        c: {
            type: Sequielize.STRING,
        },
        d: {
            type: Sequielize.STRING,
        },
        key: {
            type: Sequielize.STRING,
        },
        categoryId: {
            type: Sequielize.INTEGER,
        },
        levelId: {
            type: Sequielize.INTEGER,
        },

    });
    return Quiz;
}
let savedStudents = [];

let canHelp = [];

let needHelp = [];


populateStudents();
function populateStudents() {
    let names = ["Billy", "Jess", "Travis", "Brandy", "Kevin"];

    for (let i = 0; i < names.length; i++) {

        let student = {
            name: names[i],
            html: Math.floor(Math.random() * 9 + 2),
            css: Math.floor(Math.random() * 9 + 2),
            git: Math.floor(Math.random() * 9 + 2),
            bootstrap: Math.floor(Math.random() * 9 + 2),
            heroku: Math.floor(Math.random() * 9 + 2),
            javascript: Math.floor(Math.random() * 9 + 2),
            jquery: Math.floor(Math.random() * 9 + 2),
            jstimers: Math.floor(Math.random() * 9 + 2),
            api: Math.floor(Math.random() * 9 + 2),
            ajax: Math.floor(Math.random() * 9 + 2),
            localstorage: Math.floor(Math.random() * 9 + 2),
            firebase: Math.floor(Math.random() * 9 + 2),
            nodejs: Math.floor(Math.random() * 9 + 2),
            constructors: Math.floor(Math.random() * 9 + 2),
            callbacks: Math.floor(Math.random() * 9 + 2),
            mysql: Math.floor(Math.random() * 9 + 2),
            nodeexpressserver: Math.floor(Math.random() * 9 + 2),
            sequelize: Math.floor(Math.random() * 9 + 2),
            mongodb: Math.floor(Math.random() * 9 + 2),
            reactjs: Math.floor(Math.random() * 9 + 2),
        };

        savedStudents.push(student);
    };
};

module.exports = {
    savedStudents: savedStudents,
    canHelp: canHelp,
    needHelp: needHelp
};
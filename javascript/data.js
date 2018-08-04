let savedStudents = [];

let canHelp = [];

let needHelp = [];


populateStudents();
function populateStudents() {
    let names = ["Billy", "Jess", "Travis", "Brandy", "Kevin", "Chad", "Justin", "Cathy", "Chris", "Carl", "Beebo", "Lacy", "Christa", "Andrew", "Levi", "Jose", "Robert", "Alicia", "Kay", "Russ", "Walter", "Yiri", "Isa", "Orson", "Peter", "Sal", "Frankie", "George", "Hannah", "Kelcy", "Loren", "Chan", "Brody", "Max", "Dustin", "Jessica", "Dan", "Andree"];

    for (let i = 0; i < names.length; i++) {

        let student = {
            name: names[i],
            html: Math.floor(Math.random() * 11),
            css: Math.floor(Math.random() * 11),
            git: Math.floor(Math.random() * 11),
            bootstrap: Math.floor(Math.random() * 11),
            heroku: Math.floor(Math.random() * 11),
            javascript: Math.floor(Math.random() * 11),
            jquery: Math.floor(Math.random() * 11),
            jstimers: Math.floor(Math.random() * 11),
            api: Math.floor(Math.random() * 11),
            ajax: Math.floor(Math.random() * 11),
            localstorage: Math.floor(Math.random() * 11),
            firebase: Math.floor(Math.random() * 11),
            nodejs: Math.floor(Math.random() * 11),
            constructors: Math.floor(Math.random() * 11),
            callbacks: Math.floor(Math.random() * 11),
            mysql: Math.floor(Math.random() * 11),
            nodeexpressserver: Math.floor(Math.random() * 11),
            sequelize: Math.floor(Math.random() * 11),
            mongodb: Math.floor(Math.random() * 11),
            reactjs: Math.floor(Math.random() * 11)
        };

        savedStudents.push(student);
    };

    for (let j = 0; savedStudents.length < 9; j++) {
        for (let key in savedStudents[j]) {
            savedStudents[i].key = j + 1;
        };
    };
};

module.exports = {
    savedStudents: savedStudents,
    canHelp: canHelp,
    needHelp: needHelp
};
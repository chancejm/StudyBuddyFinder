// TO DO: 
// - Evaluate Logic and add in process to handle multiple "good" Matches with the same point values
// - Add input & logic to accept, store, and display User Photos
// - Finish Features in Read Me.
// - Try Refactor JS, HTML, File Structure

$("document").ready(function () {
    // console.log("ready");
    // let needHelp = false;
    // let canHelp = false;
    let saveStudent = true;
    let obj = {};
    let match = [];

    let subjectArr = ['html', 'css', 'git', 'bootstrap', 'heroku', 'javascript', 'jquery', 'js-timers', 'api', 'ajax', 'local-storage', 'firebase', 'nodejs', 'constructors', 'callbacks', 'mysql', 'node-express-server', 'sequelize', 'mongodb', 'reactjs'];

    function createSliderCards(subject) {
        let html = $(`<div class="card float-left text-center m-1 rounded" style="height:300px; width:269px; background: lightgrey; border: 3px solid grey;">
            <h1 id="${subject}Score" style="margin-top: 40px;">0</h1>
            <div class="card-body">
                <h2 class="card-title" style="font-size: 25px";><strong>${subject.toUpperCase()}</strong></h2>
                    <div class="form-group">
                        <label for="formControlRange">Scale: 1-10</label>
                        <input type="range" data="${subject}" min="0" max="10" value="0" class="slider form-control-range" id="${subject}Range">
                    </div>
            </div>
        </div>`);

        $(".subjects").append(html);
    };
    function createSubjectResults(subject, counter) {
        let header = $(`<div id="${subject}" style="height: 5%;font-size: 20px; font-weight: bold; font-size: 2vmin;">${subject} </div>`);
        $("#userMatchResults").append(header);
    };

    for (let i = 0; i < subjectArr.length; i++) {
        createSliderCards(subjectArr[i]);
        createSubjectResults(subjectArr[i]);
    };

    $(".slider").on("input", function () {
        let data = $(this).attr("data");
        let value = $(this).val();

        switch (data) {
            case "html": $("#htmlScore").text(value);
                break;
            case "css": $("#cssScore").text(value);
                break;
            case "git": $("#gitScore").text(value);
                break;
            case "bootstrap": $("#bootstrapScore").text(value);
                break;
            case "heroku": $("#herokuScore").text(value);
                break;
            case "javascript": $("#javascriptScore").text(value);
                break;
            case "jquery": $("#jqueryScore").text(value);
                break;
            case "js-timers": $("#js-timersScore").text(value);
                break;
            case "api": $("#apiScore").text(value);
                break;
            case "ajax": $("#ajaxScore").text(value);
                break;
            case "local-storage": $("#local-storageScore").text(value);
                break;
            case "firebase": $("#firebaseScore").text(value);
                break;
            case "nodejs": $("#nodejsScore").text(value);
                break;
            case "constructors": $("#constructorsScore").text(value);
                break;
            case "callbacks": $("#callbacksScore").text(value);
                break;
            case "mysql": $("#mysqlScore").text(value);
                break;
            case "node-express-server": $("#node-express-serverScore").text(value);
                break;
            case "sequelize": $("#sequelizeScore").text(value);
                break;
            case "mongodb": $("#mongodbScore").text(value);
                break;
            case "reactjs": $("#reactjsScore").text(value);
                break;
            default: console.log("UH OH :(");
                break;
        };
    });

    $(".submitBtn").on("click", function (event) {
        event.preventDefault();
        if($("#nameInput").val() != ""){
        obj = {
            name: $("#nameInput").val().trim(),
            html: $("#htmlRange").val(),
            css: $("#cssRange").val(),
            git: $("#gitRange").val(),
            bootstrap: $("#bootstrapRange").val(),
            heroku: $("#herokuRange").val(),
            javascript: $("#javascriptRange").val(),
            jquery: $("#jqueryRange").val(),
            jstimers: $("#js-timersRange").val(),
            api: $("#apiRange").val(),
            ajax: $("#ajaxRange").val(),
            localstorage: $("#local-storageRange").val(),
            firebase: $("#firebaseRange").val(),
            nodejs: $("#nodejsRange").val(),
            constructors: $("#constructorsRange").val(),
            callbacks: $("#callbacksRange").val(),
            mysql: $("#mysqlRange").val(),
            nodeexpressserver: $("#node-express-serverRange").val(),
            sequelize: $("#sequelizeRange").val(),
            mongodb: $("#mongodbRange").val(),
            reactjs: $("#reactjsRange").val(),
        };
        if (saveStudent) {
            $.get("/api", function (req, res) {
                // console.log(req);
                createResult(req);
            });
            setTimeout(() => {
                $.post("/newStudent", obj, function (response) {
                    // console.log(response);
                });
            }, 500);
        } else {
            $.get("/api", function (req, res) {
                // console.log(req);
                createResult(req);
            });
        };
        // if (needHelp) {
        //     $.post("/needHelpStudents", obj, function (response) {
                // console.log(response);
        //     });
        // };
        // if (canHelp) {
        //     $.post("/canHelpStudents", obj, function (response) {
                // console.log(response);
        //     });
        // };
        $("#displayResult").css("visibility", "visible");
    };
    });

    // $("#needHelp").click(function () {
    //     switch (needHelp) {
    //         case false:
    //             $(this).css("border", "1px solid green");
    //             $(this).css("background", "darkgreen");
    //             needHelp = true;
    //             break;
    //         default:
    //             $(this).css("border", "");
    //             $(this).css("background", "");
    //             needHelp = false;
    //             break;
    //     };
        // console.log(needHelp);
    // });

    // $("#canHelp").click(function () {
    //     switch (canHelp) {
    //         case false:
    //             $(this).css("border", "1px solid green");
    //             $(this).css("background", "darkgreen");
    //             canHelp = true;
    //             break;
    //         default:
    //             $(this).css("border", "");
    //             $(this).css("background", "");
    //             canHelp = false;
    //             break;
    //     }
        // console.log(canHelp);
    // });

    $("#saveStudent").click(function () {
        switch (saveStudent) {
            case true:
                $(this).css("border", "");
                $(this).css("background", "");
                saveStudent = false;
                break;
            default:
                $(this).css("border", "1px solid green");
                $(this).css("background", "darkgreen");
                saveStudent = true;
                break;
        };
        // console.log(saveStudent)
    });

    function createResult(array) {
        // console.log("Starting Matching");
        let counterOne = 0;
        let counterTwo = 0;
        let compare = [];
        let currentMatch = [];
        for (let i = 0; i < array.length; i++) {
            // console.log("Creating Comparison Array for:" + array[i].name);
            testArr = [];
            testArr.push(array[i].html - obj.html);
            testArr.push(array[i].css - obj.css);
            testArr.push(array[i].git - obj.git);
            testArr.push(array[i].bootstrap - obj.bootstrap);
            testArr.push(array[i].heroku - obj.heroku);
            testArr.push(array[i].javascript - obj.javascript);
            testArr.push(array[i].jquery - obj.jquery);
            testArr.push(array[i].jstimers - obj.jstimers);
            testArr.push(array[i].api - obj.api);
            testArr.push(array[i].ajax - obj.ajax);
            testArr.push(array[i].localstorage - obj.localstorage);
            testArr.push(array[i].firebase - obj.firebase);
            testArr.push(array[i].nodejs - obj.nodejs);
            testArr.push(array[i].constructors - obj.constructors);
            testArr.push(array[i].callbacks - obj.callbacks);
            testArr.push(array[i].mysql - obj.mysql);
            testArr.push(array[i].nodeexpressserver - obj.nodeexpressserver);
            testArr.push(array[i].sequelize - obj.sequelize);
            testArr.push(array[i].mongodb - obj.mongodb);
            testArr.push(array[i].reactjs - obj.reactjs);
            testArr.push(array[i].name);
            compare.push(testArr);
        };
        currentMatch = compare[0];

        for (let j = 1; j < compare.length; j++) {

            for (let k = 0; k < compare[0].length - 1; k++) {
                if (currentMatch[k] <= 1 && currentMatch[k] >= -1) {
                    counterOne++;
                }
                if (compare[j][k] <= 1 && compare[j][k] >= -1) {
                    counterTwo++;
                };
            };
            if (counterOne >= counterTwo) {
                match = currentMatch;
                console.log(counterOne + " " + counterTwo);
                counterOne = 0;
                counterTwo = 0;
            } else {
                match = compare[j];
                currentMatch = compare[j];
                console.log(counterOne + " " + counterTwo);
                counterOne = 0;
                counterTwo = 0;
            };
        };
        $("#matchName").text(match[20]);
        $("#userName").text(obj.name);
        symbols();
    };

    function symbols() {
        // console.log(match);
        for (let i = 0; i < match.length - 1; i++) {
            // console.log(subjectArr[i]);
            switch (i) {
                case i:
                    symbolDisplay(match[i], subjectArr[i]);
                    break;
                default:
                    console.log("Uh Oh :(");
                    break;
            };
        };
    };

    function symbolDisplay(param, subject) {
        if (param === 3) {
            $("#" + subject).text(subject + " +++");
        } else if (param === 2) {
            $("#" + subject).text(subject + " ++");
        } else if (param === 1) {
            $("#" + subject).text(subject + " +"); 
        } else if (param === -1) {
            $("#" + subject).text("+ "+subject);
        } else if (param === -2) {
            $("#" + subject).text("++ "+subject);
        } else if (param === -3) {
            $("#" + subject).text("+++ "+subject);
        } else if (param === 0) {
            $("#" + subject).text("+" + subject + "+");
        } else if (param < -3) {
            $("#" + subject).text("++++ " + subject);
        } else if (param > 3) {
            $("#" + subject).text(subject + " ++++");
        };
    };
});


// WRITE YOUR ANSWERS IN THE OBJECT IN answers.js

const questions = {
    // ------ JSON ------
    1: {
        question: `Which of these is true?`,
        answers: {
            a: "JSON is valid JS but JS isn't always valid JSON",
            b: "JSON is valid JS and JS is never valid JSON",
            c: "JS is valid JSON but JSON isn't always valid JS",
            d: "JS is valid JSON and JSON is never valid JS"
        }
    },
    2: {
        question: `The three main rules of JSON are`,
        answers: {
            a: "No dangling commas, no comments, no special characters in the keys",
            b: "No special characters in the keys, no single-quote keys, no trailing commas",
            c: "No dangling commas, no comments, keys must be wrapped in double quotes",
            d: "There are not special rules to JSON, any valid JS object is fine"
        }
    },
    // ------ Handlebars ------
    3: {
        question: `Will the following work?
            const people = [
                {name: "Alexa"}, {name: "Jarvis"}
            ]
            const source = $("#ex-template").html()
            const template = Handlebars.compile(source)
            const newHTML = template(people)
            $("body").append(newHTML)
        `,
        answers: {
            a: "Yes",
            b: "No, because Alexa and Jarvis are on the same line",
            c: "No, because we used `const` for `newHTML` instead of let",
            d: "No, because people is an array"
        }
    },
    4: {
        question: `In your JS file there is a 'data' object. 
        One of the keys of 'data' is 'img', which is an image URL.
        Assuming everything else (in HTML and JS) is set up correctly, 
        will the following Handlebars code display the image? 
            
        <div>{{img}}</div>    
        `,
        answers: {
            a: "Yes",
            b: "No, it needs to be nested in an `#each`",
            c: "No, it needs an `img` tag",
            d: "No, it needs an `img` tag and a `src` attribute"
        }
    },
    // ------ APIs & GET Requests ------
    5: {
        question: `What does API stand for?`,
        answers: {
            a: "Application Protocol Interface",
            b: "Application Parameters Interface",
            c: "Application Programming Internet",
            d: "Application Programming Interface"
        }
    },
    6: {
        question: `What do we use APIs for?`,
        answers: {
            a: "Getting JSON files from servers",
            b: "Getting JSON from servers",
            c: "Getting JSON and files from servers",
            d: "Getting any files from servers"
        }
    },
    7: {
        question: `What does the following do?
            let data = $.get('/someAPIurl', function(result){
                return data
            })
            console.log(data)
        `,
        answers:{
            a: "Console logs the data that came back from the API",
            b: "Console logs something that's not our data",
            c: "Console logs the data that came back from the API, wrapp in an object or array",
            d: "Throws an error"
        }
    },
    // ------ Array Methods ------
    8: {
        question: `What will the following code do?
        const people = [
            {id: 1, name: "Humbert", money: 499, hasAC: false},
            {id: 2, name: "Bellatrix", money: 499, hasAC: true},
            {id: 3, name: "Mola", money: 720, hasAC: false}
        ]
        
        let isCool = function(humbert){
            return (humbert.money > 500 || humbert.hasAC)
        }

        let print = (p) => console.log(p)

        people.filter(isCool).map(p => p.name).forEach(print)
        `,
        answers: {
            a: "Nothing",
            b: "Console log 'Humbert', 'Bellatrix'",
            c: "Console log 'Bellatrix', 'Mola'",
            d: "Console log 'Mola', 'Humbert'",
            e: "Throw an error"
        }
    },
    9: {
        question: `Using the same 'people' array from above, what will the following code do?
            console.log(people.find(p.id === 2))
        `,
        answers: {
            a: "Nothing",
            b: "Throw an error",
            c: "Print 'Mola'",
            d: "Print 'Bellatrix'"
        }
    },
    // ------ OOP ------
    10: {
        question: ``
    }
}





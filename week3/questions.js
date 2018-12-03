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
        answers:{
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
        answers:{
            a: "Yes",
            b: "No, because Alexa and Jarvis are on the same line",
            c: "No, because we used `const` for `newHTML` instead of let",
            d: "No, because people is an array"
        }
    },
    4:{
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
    }
}

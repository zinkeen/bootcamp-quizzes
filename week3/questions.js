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
        answers: {
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
        question: `OOP is a natural extension of...`,
        answers: {
            a: "Closures",
            b: "Callback functions",
            c: "Modules",
            d: "JSON"
        }
    },
    11: {
        question: `Does a class constructor ever get invoked?`,
        answers: {
            a: "Yes, the `new` keyword precedes its invocation",
            b: "Yes, as soon as we access a property of a class' instance",
            c: "No, the values automatically get attached to the instance",
            d: "Only when we use `super`"
        }
    },
    12: {
        question: `What is an instance?`,
        answers: {
            a: "A concrete manifestation of a class",
            b: "A plain JS object",
            c: "A module",
            d: "All of the above"
        }
    },
    13: {
        question: `What does the following code do?
            class Trip{
                constructor(destination, date){
                    this.dest = destination
                    this.date = date
                    this.plan = []
                }
            }
            let t = Trip("Guadalupe", new Date())
        `,
        answers: {
            a: "Nothing",
            b: "Throws an error",
            c: "Creates an instance of Trip, and stores it in `t`",
            d: "c, but the value of `this.plan` will be `undefined` because we don't pass it in the constructor"
        }
    },
    14: {
        question: `What does the super keyword do?`,
        answers: {
            a: "Invokes the class' consturctor, which is mandatory",
            b: "Invokes the class' constructor, but it's optional",
            c: "Invokes the parent's constructor, which is mandatory",
            d: "Invokes the parent's constructor, but it's optional"
        }
    },
    15: {
        question: `What does the following code do?

            class Page{
                constructor(text){
                    this.text = text
                }
            }

            class Notebook{
                constructor(pageNum){
                    this.pageNum = pageNum
                    this.pages = []
                }

                write(page){
                    this.pages.push(page)
                }
            }

            class Diary extends Notebook{
                constructor(pageNum, owner){
                    super(pageNum, owner)
                    this.owner = JSON.stringify(owner)
                }
            }

            const myDiary = new Diary(50, "Shila")
            const mathNotebook = new Notebook(200)
            const p1 = new Page("Pythagoreas realized tha the sum of the squares of the sides of a right triangle will equal the square of the hypoteneuse")
            myDiary.pages.push(new Page("I think I'm in love with a Greek man."))

            console.log(myDiary.pages[0].text)
        `,
        answers: {
            a: "Throw an error",
            b: "Console log `undefined`",
            c: "Console log the sentence about Pythagoreas",
            d: "Console log the sentence about the Greek man"
        }
    },
    16: {
        question: `Using the same code from the previous question (except for the console log at the end), what will the following do?
        console.log(mathNotebook.pages[0].text)
        `,
        answers: {
            a: "Throw an error",
            b: "Console log `undefined`",
            c: "Console log the sentence about Pythagoreas",
            d: "Console log the sentence about the Greek man"
        }
    },
    17: {
        question: `Using the same code from before (except for the console log at the end), what will the following do?
            console.log(p1 instanceof Page)
            console.log(myDiary instanceof Notebook)
            console.log(myDiary instanceof mathNotebook)
        `,
        answers: {
            a: "Console log `true` for all three",
            b: "Console log `true` twice then `false` once",
            c: "Console log `false` for all three",
            d: "Console log `true` twice then throw an error"
        }
    },
    18: {
        question: `Assuming we have a class Planet that has on parameter in its constructor, name, what will the following do?
            let earth = new Planet
            earth.name = "Earth 2.0"
            console.log(earth.name)
        `,
        answers: {
            a: "Throw an error",
            b: "Console log `undefined`",
            c: "Console log `Earth 2.0",
            d: "Console log ''"
        }
    },

    19: {
        question: `What's going on in the following code?
            class Image{
                constructor(url, width, height, db){
                    this.url = url
                    this.width = width || 150
                    this.height = height || 150
                    this.db = db
                }

                save(){
                    this.db.save(JSON.stringify(this))
                }
            }

            class SQL_DB{
                constructor(){}
                save(str){
                    //wicked code that saves to SQL database
                }
            }

            class Mongo_DB{
                constructor(){}
                save(str){
                    //wicked code that saves to Mongo database
                }
            }

            const sqlDB = new SQL_DB()
            const mongoDB = new Mongo_DB()
            const pic = new Image("https://a3.amazon.com/93112/ist.png", null, null, sqlDB)

            pic.save()
        `,
        answers: {
            a: "Throws an error, we need to call `super` inside of `Image`'s `save` method",
            b: "Throws an error, you can't stringify `this`",
            c: "Saves the image to the SQL database",
            d: "Saves a stringified version of the image object to the SQL database"
        }
    },
    // ------ Local Storage ------
    20: {
        question: `Where is Local Storage stored, and what's the deal with stringify/parse?`,
        answers: {
            a: "Cache. We use stringify/parse to insert data as a string then extract it normally",
            b: "Cache. We use stringify/parse to insert our data in a consistent way",
            c: "Browser. We use stringify/parse to insert data as a string then extract it normally",
            d: "Browser. We use stringify/parse to insert our data in a consistent way"
        }
    },
    // ------ Bam ------
    21: {
        question: `What's going on with this code?

            class APIManager{
                constructor(route){
                    this.route = route
                    this.data = {}
                }

                fetch(){
                    $.get(route, function(response){
                        this.data = response
                    })
                }
            }

            class Renderer{
                construcor(scriptID, containerID, apiManager){
                    this.scriptID = scriptID
                    this.containerID = containerID
                    this.apiManager = apiManager
                }

                render(){    
                    let source = $("#" + this.scriptID).html()
                    let template = Handlebars.compile(source)
                    $("#" + this.containerID).append(template(this.apiManager.data))
                }
            }

            const foodApi = new APIManager("/foodRoute")
            const renderer = new Renderer("food-template", "container", foodApi)
            
            foodApi.fetch()
            renderer.render()
        `
    },
    answers: {
        a: "Perfectly valid code",
        b: "There's an async problem",
        c: "There's problem with Handlebars (not syntax related)",
        d: "There's a problem with our API request"
    }

}





// WRITE YOUR ANSWERS IN THE OBJECT IN answers.js

const questions = {
    // ------ DBs ------
    1: {
        question: `What is the main difference between a relational and non-relational DB?`,
        answers: {
            a: "Scale",
            b: "Structure",
            c: "Speed",
            d: "All of the above"
        }
    },
    2: {
        question: `What is Mongo DB?`,
        answers: {
            a: "An NPM package",
            b: "A node module",
            c: "A relational database",
            d: "A non-relational database"
        }
    },
    // ------ Mongo & Mongoose ------
    3: {
        question: `What is the difference between the following?
            db.animals.find({})
            //vs.
            Animals.find({})
        `,
        answers: {
            a: "They're exactly the same",
            b: "Mongo vs. Mongoose",
            c: "Mongo vs. Server",
            d: "Mongo vs. Node",
            e: "b, c, and d"
        }
    },
    4: {
        question: `What will this code do?
            const FurnitureSchema = new Schema({
                name: String,
                legs: Number,
                own: Boolean
            })

            let table = new FurnitureSchema({
                name: "table",
                legs: 4,
                own: false
            })

            table.save()
        `,
        answers: {
            a: "Save a table document to the `furniture` collection",
            b: "Save a table document to the `furnitures` collection",
            c: "Save a table document to the `furnitureSchema` collection",
            d: "Save a table document to the `furnitureSchemas` collection",
            e: "None of the above"
        }
    },
    5: {
        question: `How does Mongoose work?`,
        answers: {
            a: "It's an NPM package that runs on a server and lets us communicate with our Mongo DB",
            b: "It's an NPM package that runs on a server and lets us communicate with our DB",
            c: "It's an NPM package that lets us communicate with our Mongo DB",
            d: "It's an addition to Express that lets us communicate with our Mongo DB"
        }
    },
    6: {
        question: `What can you say about this code?
        router.get('/stuff', function(req, res){
            Person.find({}, function(err, people){
                res.send(people)
            })
        })
        `,
        answers: {
            a: "It's ok",
            b: "The route must be named `/people` to work with the `people` collection",
            c: "It will throw an error if the `people` collection is empty",
            d: "None of the above"
        }
    },
    7: {
        question: `What can you say about this code?
            Person.find({}, function(err, p){
                console.log(p.name)
            })
        `,
        answers: {
            a: "It's ok",
            b: "It will throw an error",
            c: "It will print undefined",
            d: "None of the above"
        }
    },
    8: {
        question: `What will this code do?
            //Assume you have a Company schema/model with the following properties:
                -name: String
                -employees: [Reference ID of Employee]
                -revenue: Number

            //And an Employee schema/model with the following properties:
                -name: String
                -salary: Number
                -Manager: Reference ID of Employee

            //And assume you have some data in your DB with companies and employees properly saved.

            Company.findOne({})
                .populate('employees')
                .exec(function(err, e){
                    console.log(e.salary)
                })
        `,
        answers: {
            a: "Throw an error",
            b: "Print undefined",
            c: "Print the `salary` of the first employee found",
            d: "Print the `revenue` of the first company found"
        }
    },
    9: {
        question: `Fill in the blank:
            const bookSchema = new Schema({
                author: String,
                title: String,
                reviews: [{type: Schema.Types.ObjectId, ref: _________}]
            })

            const reviewSchema = new Schema({
                reviewText: String
            })

            const Book = mongoose.model('Book', bookSchema)
            const Review = mongoose.model('Review', reviewSchema)
        `,
        answers: {
            a: "review",
            b: "reviews",
            c: "Review",
            d: "reviewSchema"
        }
    },
    10: {
        question: `Why do we need to learn Mongo if we have Mongoose?`,
        answers: {
            a: "Mongo is languge independent, Mongoose can only run on node",
            b: "We don't have to",
            c: "You can't write Mongoose without also writing Mongo commands",
            d: "Mongo is extremely faster than Mongoose, so in big applications we want to use Mongo"
        }
    },
    11: {
        question: `What does the following function return?
        
        //Assume you have a Person Schema with a name property
        
        const removePerson = (name) => {
            let p = Person.findOneAndDelete({
                name: name
            })
            return p
        }
        `,
        answers: {
            a: "It will return the document of the person that was deleted",
            b: "It will return the ID of the person that was deleted",
            c: "It will not return anything, since this is a delete operation",
            d: "It will return a promise",
            e: "It will return an empty object"
        }
    },
    // ------ Async ------
    12: {
        question: `What does the async keyword do to a function?`,
        answers: {
            a: "It synchronizes it with the previous function",
            b: "It makes the function return promise",
            c: "It allows us to use `.then ` on the function's returned value",
            d: "It resets the order of the call stack",
            e: "b and c",
            f: "c and d"
        }
    },
    13: {
        question: `Will this work?
            const getFeed = async function(user){
                let name = user.firstName = user.lastName
                let feed = await $.get('/feedApi/' + name)
                return feed
            }

            const puppeteer = async function(user){
                let feed = await getFeed(user)
                render(feed)
            }
        `,
        answers: {
            a: "Yes",
            b: "No, throws an error",
            c: "No, async issue",
            d: "No, undefined"
        }
    },
    14: {
        question: `What is the difference between the call stack and the event queue?`,
        answers: {
            a: "They're basically the same",
            b: "All async operations will go to the stack first, wait for the queue to empty, then go to the queue",
            c: "All async operations will go to the queue first, wait for the stack to empty, then go to the stack",
            d: "The stack is for synchronous operations and the queue for asynchronous ones"
        }
    },
    15: {
        question: `Generally speaking, the call stack...`,
        answers: {
            a: "Works FIFO - first in, first out",
            b: "Works LIFO - last in, first out",
            c: "Executes the fastest operations first",
            d: "Executes the slowest operations first"
        }
    },
    // ------ Testing ------
    16: {
        question: `What is Test Driven Development?`,
        answers: {
            a: "An idea that says that we should write test for all our code",
            b: "An idea that says that separate programmers should write the test and the code",
            c: "An idea that says that we should write tests first, then the code",
            d: "All of the above"
        }
    },
    17: {
        question: `Which of the following is an important rule writing good unit tests?`,
        answers: {
            a: "Each test should be as small as possible",
            b: "Each test should cover as much of the app as possible",
            c: "Each test should have at least 5 checks",
            d: "All of the above"

        }
    },
    18: {
        question: `The following is a test for a function called removeAccount(accounts, account) - is the test good enough? 
                    Assume the test's name is as descriptive as it needs to be

        test("should remove an account from the accounts array, based off its ID", function(){
            let dummyAccounts = [{data:{}, id: 312}, {data:{}, id: 118}]
            let dummyAccount = {data:{}, id: 118}

            removeAccount(dummyAccounts, dummyAccount)

            expect(dummyAccounts.length).toBe(1)
            expect(dummyAccounts[0].id).not.toBe(118)
            expect(dummyAccounts[0].id).toBe(312)
        })
            
        `,
        answers: {
            a: "Yes",
            b: "No"
        }
    },
    // ------ Bam ------
    19: {
        question: `What does this mean to you?
            [$.get, '/items/', Item.find, res.send, $(elem).append]
        `,
        answers: {
            a: "A mistake",
            b: "Fullstack",
            c: "Nonesense"
        }
    }
}





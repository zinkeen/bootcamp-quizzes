// WRITE YOUR ANSWERS IN THE OBJECT IN answers.js

const questions = {
    1: {
        question: `What is the time complexity of inserting into a stack?`,
        answers: {
            a: "O( 1 )",
            b: "O( log(n) )",
            c: "O( n )",
            d: "O( mn )",
            e: "O( n^2 )"
        }
    },
    2: {
        question: `What is the time complexity of removing all the items from a stack?`,
        answers: {
            a: "O( 1 )",
            b: "O( log(n) )",
            c: "O( n )",
            d: "O( mn )",
            e: "O( n^2 )"
        }
    },
    3: {
        question: `Stacks are ____ and queues are ____?`,
        answers: {
            a: "FIFO, FIFO",
            b: "FIFO, LIFO",
            c: "LIFO, FIFO",
            d: "LIFO, LIFO"
        }
    },
    4: {
        question: `Which of the following is not a data structure?`,
        answers: {
            a: "Array",
            b: "Object",
            c: "Recursive function",
            d: "Matrix",
            e: "Tree"
        }
    },
    5: {
        question: `What is the time complexity of generating a matrix?`,
        answers: {
            a: "O( 1 )",
            b: "O( log(n) )",
            c: "O( n )",
            d: "O( mn )",
            e: "O( n^2 )"
        }
    },
    6: {
        question: `What is the time complexity of finding an item in a matrix?`,
        answers: {
            a: "O( 1 )",
            b: "O( log(n) )",
            c: "O( n )",
            d: "O( mn )",
            e: "O( n^2 )"
        }
    },
    7: {
        question: `What is the time complexity of accessing an item from a matrix?`,
        answers: {
            a: "O( 1 )",
            b: "O( log(n) )",
            c: "O( n )",
            d: "O( mn )",
            e: "O( n^2 )"
        }
    },
    8: {
        question: `What is the time complexity of finding a node in a Binary Search Tree?`,
        answers: {
            a: "O( 1 )",
            b: "O( log(n) )",
            c: "O( n )",
            d: "O( mn )",
            e: "O( n^2 )"
        }
    },
    9: {
        question: `What is the time complexity of inserting a node into a BST?`,
        answers: {
            a: "O( 1 )",
            b: "O( log(n) )",
            c: "O( n )",
            d: "O( mn )",
            e: "O( n^2 )"
        }
    },
    10: {
        question: `What is the time complexity of the following function?

        const sendEmailsToBestEmployees = function(){
            let employees = $.get('/employeesByPerformance', function(employees){
                for(let i = 0; i< 10; i++){
                    sendEmail(employees[i], "Well Done")
                }
            })
        }
        `,
        answers: {
            a: "O( 1 )",
            b: "O( log(n) )",
            c: "O( n )",
            d: "O( mn )",
            e: "O( n^2 )"
        }
    },
    11: {
        question: `What does the following code do?
            let s = new Stack()
            s.push(3)
            s.push(4)
            s.push(1)
            s.push(2)

            while(!s.isEmpty()){
                s.pop()
            }
        `,
        answers: {
            a: "Throws an error",
            b: "Nothing",
            c: "Risks as Stack Overflow",
            d: "Risks an infinite loop",
            e: "Empties the stack"
        }
    },
    12: {
        question: `What would cause a Tree to become unbalanced?`,
        answers: {
            a: "Trees always automatically balance because of the way we insert nodes",
            b: "Inserting data randomly into the tree",
            c: "Inserting sorted data into the tree",
            d: "Inserting too little data into the tree"
        }
    },
    13: {
        question: `What is the complexity of the following code?
            let autoComplete = {
                A: ["Aardvak", "Aladdin", "Alabastor"],
                B: ["Bane", "Broach", "Broam", "Brood", "Broom"],
                ...
                Z: ["Zap", "Zebra", "Zoo", "Zoom"]
            }

            const findMatch = function(wordPrefix){
                let firstLetter = wordPrefix[0]
                let words = autoComplete[firstLetter]
                
                for(let w in words){
                    let word = words[i]
                    if(word.startsWith(wordPrefix)){
                        return words.slice(i)
                    }
                }
            }
        `,
        answers: {
            a: "O( 1 )",
            b: "O( log(n) )",
            c: "O( n )",
            d: "O( mn )",
            e: "O( n^2 )"
        }
    },
    14: {
        question: `What is dataStorage in this code?
            let employeesData = [
                ["Sally", 1000],
                ["Dave", 1200],
                ["Hector", 800]
            ]

            let dataStorage = {
                store1: [],
                store2: new Stack(),
                store3: new Queue(),
                store4: employeeData,
                store5: {}
            }
        `,
        answers: {
            a: "An object",
            b: "An array",
            c: "A stack",
            d: "A queue",
            e: "A matrix"
        }
    },
    15: {
        question: `What is the time complexity of finding some item in dataStorage from the previous question?`,
        answers: {
            a: "At least O( n )",
            b: "At least O( mn )",
            c: "O( mn )",
            d: "Depends"
        }
    },
    16: {
        question: `Which of the following is most efficient in terms of time complexity?`,
        answers: {
            a: "Searching an unbalanced BST",
            b: "Inserting into a balanced BST",
            c: "Finding a coordinate of a specific value in a matrix",
            d: "They're all the same"
        }
    },
    17: {
        question: `What is the efficiency of the following?
            let s = new Stack()
            let q = new Queue()
            //insert values in s and q

            while(s.peek()){
                q.enqueue(s.pop())
            }
        `,
        answers: {
            a: "O( 1 )",
            b: "O( log(n) )",
            c: "O( n )",
            d: "O( mn )",
            e: "O( n^2 )"

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





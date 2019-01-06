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
        question: `What is the time complexity of finding a node in a balanced Binary Search Tree?`,
        answers: {
            a: "O( 1 )",
            b: "O( log(n) )",
            c: "O( n )",
            d: "O( mn )",
            e: "O( n^2 )"
        }
    },
    9: {
        question: `What is the time complexity of inserting a node into a balanced BST?`,
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
        question: `When deciding on which data structure to use, what should we consider?`,
        answers: {
            a: "The total time complexities of the insert, find, update, and remove operations",
            b: "The worst time complexity out of the insert, find, update, and remove operations",
            c: "The best time complexity out of the insert, find, update, and remove operations",
            d: "The business requirements of our system"
        }
    },
    19: {
        question: `When inserting a node into a binary search tree we:`,
        answers: {
            a: "Run our insert method on the root node, and recursively go down our tree to insert",
            b: "Run our insert method on a the relevant child node we want to 'insertLeft()' or 'insertRight()' on",
            c: "First recursively check if it already exists and only insert if it doesn't exist",
            d: "Add the node to the children array of whichever node the insert method was run on"
        }
    },
    20: {
        question: `What will the following do?
            let queue = new Queue()
            queue.enqueue(4)
            queue.enqueue(1)
            queue.enqueue(3)

            const clearQueue = function(q){
                return q.peek() ? clearQueue(q.dequeue()) : "Done"
            }

            clearQueue(queue)
        `,
        answers: {
            a: "Throw an error",
            b: "Nothing",
            c: "Cause an infinite loop",
            d: "Remove all the items from the queue and then return 'Done'"
        }
    },
    // ------ Bam ------
    21: {
        question: `What will this do?
            let people = [
                {name: "Claire", priority: "MED"},
                {name: "Josh", priority: "HIGH"},
                {name: "Tom", priority: "MED"},
                {name: "Geoffery", priority: "LOW"}
            ]

            let stack = new Stack()
            let priorityQueue = new Queue()
            let medQueue = new Queue()
            let trashQueue = new Queue()

            people.forEach(p => stack.push(p))

            const transfer = function(s){
                if(!s.length){ return }

                s.peek().priority === "HIGH" ?
                    priorityQueue.enqueue(s.pop().name) :
                    s.peek().priority === "MED" ?
                        medQueue.enqueue(s.pop().name):
                        trashQueue.enqueue(s.pop().name)
                
                transfer(s)
            }

            transfer(stack)
        `,
        answers: {
            a: "Throw an error",
            b: "Nothing",
            c: "Cause an infinite loop",
            d: "Populate each queue by priority"
        }
    }
}





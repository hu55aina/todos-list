import inquirer from "inquirer"
let todos = [];
let loop= true;


while(loop)
    
{
    let addTask = await inquirer.prompt(
[
    {
        name: 'todos',
        type: 'input',
        message:"what you want to add in your todos?"
    },

    {
        name:'addmore',
        type:'confirm',
        message:"do you want to add more?",
        default:"false"
    },
]

);
todos.push(addTask.todos);
loop = addTask.addmore
console.log(addTask.todos)

}
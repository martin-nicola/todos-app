todo_list = [
    {
        text: 'Learn Python',
        done: false
    },
    {
        text: 'Buy Milk',
        done: false
    },
];

function getAll() {
    return todo_list
}

function addTodo(todo) {
    todo_list.push(todo)
}

module.exports = {
    getAll,
    addTodo
}
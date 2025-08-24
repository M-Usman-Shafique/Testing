// DB Table
const users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Bruce" },
    { id: 3, name: "Sara" },
];

export const greet = (id, findOne) => {
    // DB call
    const user = findOne(id);
    return `Hello, ${user.name}`
}

const findUserById = (userId) => users.find(user => user.id === userId);

console.log(greet(2, findUserById)); // DI

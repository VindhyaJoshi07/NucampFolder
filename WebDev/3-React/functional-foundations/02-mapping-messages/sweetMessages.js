const messages = [
    'how are you doing',
    'what are you up to',
    'would you like to get a bite later'
];

// const sweetMessages = [
//     'how are you doing, sweetie?',
//     'what are you up to, sweetie?',
//     'would you like to get a bite later, sweetie?',
// ];

//const sweetMessages = `${messages[0]}, sweetie?`;

// ------- Below is the imperative type of approach -------
// const sweetMessages = [];

// for(let i = 0; i< messages.length; i++){
//     const newMessage = `${messages[0]}, sweetie?`;
//     sweetMessages.push(newMessage);
// }
// console.log(sweetMessages);

// ------- Below is the declarative type of approach -------
const sweetMessages = messages.map((message) => `${message}, sweetie?`);

console.log(sweetMessages);
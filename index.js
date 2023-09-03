

// Single thread can manage multiple threads

// Non-blocking I/O Model
// when Nodejs is runned on server the particular thread will simoultanously handles many process at the same time
// ek se ziyada connections sim handle kiye jate hen.
// examples real time chat applicatons

const lovish = require("./second");

console.log("Hello world", lovish)

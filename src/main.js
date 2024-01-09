const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const question = "What is the meaning of life?";

const promise = tell(question);

promise.then(console.log);

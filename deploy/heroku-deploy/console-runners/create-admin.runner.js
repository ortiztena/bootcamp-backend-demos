"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = void 0;

var _inquirer = require("inquirer");

const passwordQuestions = [{
  name: "password",
  type: "password",
  message: "Password:",
  mask: true
}, {
  name: "confirmPassword",
  type: "password",
  message: "Confirm password:",
  mask: true
}];

const run = async () => {
  // TODO: Connect to DB
  const {
    user
  } = await (0, _inquirer.prompt)({
    name: "user",
    type: "input",
    message: "User name:"
  });
  let passwordAnswers = await (0, _inquirer.prompt)(passwordQuestions);

  while (passwordAnswers.password !== passwordAnswers.confirmPassword) {
    console.error("Password does not match, fill it again");
    passwordAnswers = await (0, _inquirer.prompt)(passwordQuestions);
  } // TODO: Insert into DB and disconnect it


  console.log(`User ${user} created!`);
};

exports.run = run;
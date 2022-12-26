import inquirer from "inquirer";
import fs from "fs";
inquirer
.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of the project? ",
  },
  {
    type: "input",
    name: "installation",
    message: "how to install the project?",
  },
  {
    type: "input",
    name: "usage",
    message: "how to use the project?",
  },
  {type: "input",
  name: "credits",
  message: "what is the credits?",
  },
  {
    type: "rawlsit",
    name: "license",
    message: "what is the license of your project?",
  },
  {
    type: "input",
    name: "features",
    message: "what are the features of your project?",
  },
  {
    type: "input",
    name: "contribute",
    message: "How to contribute?",
  },
])
.then ((answers) => {
  fs.writeFileSync(
    "README.MD",
    `# ${anwsers.title}
    ## Description
    ${amswers.description}
    ## Installation
    $ {answers.installation}
    ## Usage
    $ {answers.usage}
    ## Credits
    $ {answers.credits}
    ## License
    $ {answers.license}
    ## Features
    $ {answers.features}
    ## How to contribute
    $ {answers.contribute}
    `
  );
})
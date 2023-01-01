import inquirer from "inquirer";
import fs from "fs";
inquirer
.prompt([
  {
    type: "input",
    name: "username",
    message: "What is your Github Username?",
  },
  {
    type : "input",
    name : "email",
    message : "What is your email?",
  },
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
    name: "Installation",
    message: "How to install the project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How to use the project?",
  },
  {type: "input",
  name: "credits",
  message: "What are the credits?",
  },
  {
    type: "rawlist",
    name: "license",
    message: "What is the license of your project?",
    choices: ["MIT License", "Apache License", "Eclipse License", "Mozilla License"]
  },
  {
    type: "input",
    name: "features",
    message: "What are the features of your project?",
  },
  {
    type: "input",
    name: "contribute",
    message: "How to Contribute?",
  },
  {
  type: "input",
  name: "Tests",
  message: "Tests?",
},
])
.then ((answers) => {
  fs.writeFileSync(
  "README.MD",
  `# ${answers.title}
  ## Description
  ${answers.description}
  ## Table of contents: <br>
  [Installation](#Installation). <br>
  [Usage](#usage). <br>
  [Questions](#questions). <br>
  [Credits](#credits). <br>
  [License](#license). <br>
  [Features](#features). <br>
  [Contribute](#contribute). <br>
  [Tests](#tests). <br>
  ## Installation
  ${answers.Installation}
  ## Usage
  ${answers.usage}
  ## Questions
  The link to the developer's github profile [${answers.username}](https://github.com/${answers.username}). <br>
  How to reach the developer for questions [${answers.email}](mailto:${answers.email}). <br>
  ## Credits
  ${answers.credits} <br>
  ## License
  ${answers.license} <br>
  ## Features
  ${answers.features} <br>
  ## How to contribute
  ${answers.contribute} <br>
  ## Tests
  ${answers.Tests} <br>
    `
  );
})

.catch((error) => {
  console.log(error);

});


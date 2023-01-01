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
  message: "what are the credits?",
  },
  {
    type: "rawlist",
    name: "license",
    message: "what is the license of your project?",
    choices: ["MIT License", "Apache License", "Eclipse License", "Mozilla License",]
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
  ##Table of content:
  [installation](#installation).
  [Usage](#usage).
  [Questions](#questions).
  [Credits](#credits).
  [License](#license).
  [Features](#features).
  [Contribute](#contribute).
  [Tests](#tests).
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## Questions
  The link to the developer's github profile [${answers.username}](https://github.com/${answers.username}).
  How to reach the developer for questions [${answers.email}](${answer.email}).
  ## Credits
  ${answers.credits}
  ## License
  ${answers.license}
  ## Features
  ${answers.features}
  ## How to contribute
  ${answers.contribute}
  ## Tests
  ${answers.Tests}
    `
  );
})

.catch((error) => {
  if (error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else went wrong
  }
});


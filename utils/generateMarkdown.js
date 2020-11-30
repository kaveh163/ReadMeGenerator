// function to generate markdown for README
function generateMarkdown(data) {
    return `[![license](https://img.shields.io/badge/license-${data.license}-green.svg)](https://img.shields.io)\n# ${data.title}\n## Description\n${data.description}\n## Table of Contents\n* [Installation](#installation)\n* [Usage](#usage)\n* [License](#license)\n* [Contributing](#contributing)\n* [Tests](#tests)\n* [Questions](#questions)\n## Installation\n${data.installation}\n## Usage\n${data.usage}\n## License\nlicensed under the ${data.license} license.\n## Contributing\n${data.contribution}\n## Tests\n${data.test}\n## Questions\nmy username is ${data.userName} and here is my [Github profile](https://github.com/)  \nPlease email ${data.email} for questions you have about this application
  `;
  }
  
  module.exports = generateMarkdown;
const { link } = require("fs");

// If there is no license, return an empty string
function renderLicenseBadge(license) {

  license =license.split(' ').join('');

 return license != 'none' ? `[![${license}](https://img.shields.io/badge/License-${license}-<COLOR>.svg)](https://shields.io/)` : "";
}



// If there is no license, return an empty string
function renderLicenseLink(license) {

    var linkURL = '';

    switch (license) {
      case 'GNU AGPLv3': 
              linkURL = 'https://www.gnu.org/licenses/agpl-3.0.txt';
              break;

      case 'GNU GPLv3': 
              linkURL = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
              break;

      case 'GNU LGPLv3': 
              linkURL = 'https://www.gnu.org/licenses/lgpl-3.0.en.html';
              break;

      case  'Mozilla Public License-2.0': 
              linkURL = 'https://www.mozilla.org/en-US/MPL/2.0/';
              break;

      case  'Apache License-2.0': 
              linkURL = 'https://www.apache.org/licenses/LICENSE-2.0';
              break;
          
      case  'MIT License': 
              linkURL = 'https://opensource.org/licenses/MIT';
              break;

      case  'Boost Software License 1.0': 
              linkURL = 'https://www.boost.org/LICENSE_1_0.txt';
              break;

      case  'The Unlicense':
              linkURL = 'https://unlicense.org/';
              break;

      case 'none':  
              linkURL = 'No license';
              break;
    }

    return linkURL;

}




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## ${data.githubURL}
  
  # Project Description
  
  **${data.projectDescr}**

  # Usage

  **${data.usage}**
  
  # License
  
  ### [${data.license} Link](${renderLicenseLink(data.license)})
  `;
  
}

module.exports = generateMarkdown;

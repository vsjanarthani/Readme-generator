// Function to generate a MD template
const generateMD = readmeInput => {

// getting badge for the license
let badge = "";
if (readmeInput.license === "MIT") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
} else if (readmeInput.license === "GNU GPLv3") {
    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
} else if (readmeInput.license === "GNU AGPLv3") {
    badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
} else if (readmeInput.license === "GNU LGPLv3") {
    badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
} else if (readmeInput.license === "Mozilla Public License 2.0") {
    badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
} else if (readmeInput.license === "Apache 2.0") {
    badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
} else if (readmeInput.license === "Boost Software License 1.0") {
    badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
} else if (readmeInput.license === "The Unlicense") {
    badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
} else if (readmeInput.license === "ISC") {
    badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
} else if (readmeInput.license === "IBM Public License Version 1.0") {
    badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
} 


return `
# ${readmeInput.title} ${badge}

## Description
${readmeInput.description}

## Languages
${readmeInput.languages}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

### Installation :
Inorder to install the necessary dependencies, run the following command in your terminal

\`\`\`${readmeInput.installations}\`\`\`

### Usage :
${readmeInput.usage}

### License :
${readmeInput.license}

### Contributing :
${readmeInput.contributing}

### Tests :
Inorder to test, run the following command in your terminal

\`\`\`${readmeInput.tests}\`\`\`

### Questions :
If you have any questions, please reach out to 
Author: (${readmeInput.author})
Email 📧: ${readmeInput.email}
Author's github profile: [GitHub](https://github.com/${readmeInput.github})
`
}

module.exports = generateMD;
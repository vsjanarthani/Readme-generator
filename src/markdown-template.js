// Function to generate a MD template
const generateMD = readmeInput => {
return `
# ${readmeInput.title}

## Description
${readmeInput.description}

## Languages
${readmeInput.languages}

## Table of Contents
* [Installation] (#installation)
* [Usage] (#usage)
* [License] (#license)
* [Contributing] (#contributing)
* [Tests] (#tests)
* [Questions] (#questions)

### Installation:
Inorder to install the necessary dependencies, run the following command in your terminal

\`\`\`${readmeInput.installations}\`\`\`

### Usage:
${readmeInput.usage}

### License:
${readmeInput.license}

### Contributing:
${readmeInput.contributing}

### Tests:
Inorder to test, run the following command in your terminal

\`\`\`${readmeInput.tests}\`\`\`

### Questions:
If you have any questions, please reach out to me (${readmeInput.author}) on my email ${readmeInput.email}
My github profile [GitHub] (https://github.com/${readmeInput.github})
`
}

module.exports = generateMD;
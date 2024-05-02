// Function to render license section
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return `This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).`;
    case 'GPL':
      return `This project is licensed under the [GPL License](https://opensource.org/licenses/GPL-3.0).`;
    case 'Apache':
      return `This project is licensed under the [Apache License](https://opensource.org/licenses/Apache-2.0).`;
    default:
      return ''; // Return empty string if license is not recognized
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseSection}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;

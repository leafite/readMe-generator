function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return `This project is licensed under the ${renderLicenseLink(license)}.`;
    case 'GPL':
      return `This project is licensed under the ${renderLicenseLink(license)}.`;
    case 'Apache':
      return `This project is licensed under the ${renderLicenseLink(license)}.`;
    default:
      return ''; // Return empty string if license is not recognized
  }
}

// Function to render license badge
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'GPL':
      return `[![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)](https://opensource.org/licenses/GPL-3.0)`;
    case 'Apache':
      return `[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    default:
      return ''; // Return empty string if license is not recognized
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `[MIT License](https://opensource.org/licenses/MIT)`;
    case 'GPL':
      return `[GPL License](https://opensource.org/licenses/GPL-3.0)`;
    case 'Apache':
      return `[Apache License](https://opensource.org/licenses/Apache-2.0)`;
    default:
      return ''; // Return empty string if license is not recognized
  }
}

module.exports = generateMarkdown;

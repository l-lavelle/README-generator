// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license!="None"){
  let editedLicense = license.replace(" ","_")
  const licensebadge=`![License](https://img.shields.io/badge/License-${editedLicense}-blue.svg)`
  return licensebadge
} else {
  const licensebadge=""
  return licensebadge
}}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license==="Apache 2.0"){
    const licenseLink="[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)"
    return licenseLink
  }else if (license==="MIT"){
    const licenseLink="[MIT](https://choosealicense.com/licenses/mit/)"
    return licenseLink
  }else if (license==="GPLv2"){
    const licenseLink="[General Public License v2.0](https://choosealicense.com/licenses/gpl-2.0/)"
    return licenseLink
  }else if (license==="GPLv3"){
    const licenseLink="[General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)"
    return licenseLink
  }else if (license==="Unlicense"){
    const licenseLink="[Unlicense](https://choosealicense.com/licenses/unlicense/)"
    return licenseLink
  } else if (license==="None"){
    const licenseLink=""
    return licenseLink
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !="None"){
    return `The license for this project is ${license}.<br />
    Please click the link below to view.`
  } else {
    return `No license used for this project.`
  }

}

function webAddresses(websites){
  const websiteArray = websites.split(",");
  var allSites = ""
  for (const website of websiteArray) {  
    allSites += `${website} <br />`
  }
  return allSites
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title,description,installation,usage, license, contributers, websites, test, github, email}=data
  
  return `# ${title.trim()}
  ${renderLicenseBadge(license)}
  ## Description
  ${description}

  ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
 
## Installation
${installation}

## Usage
${usage}

## License 
${renderLicenseSection(license)}<br />
${renderLicenseLink(license)}

## Contributing
${contributers}<br />
Websites used for refernce:<br />
${webAddresses(websites)}

## Tests
${test}

## Questions
Feel free to reach out to me with any questions via github or email!<br />
[Github Profile](https://github.com/${github})

Email: ${email}
`;
}

module.exports = generateMarkdown;

// license website: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
// https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
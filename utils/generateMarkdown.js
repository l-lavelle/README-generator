// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==="Apache 2.0"){
  const licensebadge="[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
  return licensebadge
}else if (license==="MIT License"){
  const licensebadge="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  return licensebadge
}else if (license==="None"){
  const licensebadge=""
  return licensebadge
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license==="Apache 2.0"){
    const licenseLink="[Apache 2.0](https://opensource.org/licenses/ISC)"
    return licenseLink
  }else if (license==="MIT"){
    const licenseLink="[MIT](https://opensource.org/licenses/MIT)"
    return licenseLink
  }else if (license==="None"){
    const licenseLink=""
    return licenseLink
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title,description,installation,usage, license}=data
  
  console.log("success")
  console.log(data.title)
  console.log( `# ${title}
  ${renderLicenseBadge(license)}
  
`);
}

module.exports = generateMarkdown;

// license website: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
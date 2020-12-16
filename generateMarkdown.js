// function to generate markdown for README
function generateMarkdown(data) {
  return `# title
   ${data.title}

   # description 
  ${data.description}

  # table of contents
  ## installation
  ## usage
  ## contributing
  ## tests
  ## license
  ## badge
  ## github link

  # installation
  ${data.installation}

  # Usage
  ${data.usage}

  # Contributing
  ${data.contributing}

  #Tests
  ${data.tests}

  #License
  ${data.license}

  #badge
  ${data.badge}

  #github
  ${data.github}
`
}

module.exports = generateMarkdown
// function to generate markdown for README
function generateMarkdown(data) {
  return `# title
   ${data.title}

   # description 
  ${data.description}

  # installation
  ${data.installation}

  # Usage
  ${data.usage}

  # Contributing
  ${data.contributing}

  #Tests
  ${data.tests}
`;
}

module.exports = generateMarkdown;


// set up link in markdown. set reference of link to #(section name)

//github link last
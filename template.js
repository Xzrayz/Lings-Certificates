// Function to update the displayed certificate with the user's input
function updateCertificate() {
  const name = document.getElementById('nameInput').value;
  const selectedTemplate = document.getElementById('templateSelect').value;
  
  // Hide all templates
  document.querySelectorAll('.certificate-template').forEach(template => {
      template.classList.remove('show');
  });

  // Show the selected template
  const activeTemplate = document.getElementById(selectedTemplate);
  activeTemplate.classList.add('show');

  // Update the name on the certificate
  const nameSpan = activeTemplate.querySelector('span');
  nameSpan.textContent = name || "[Name]";
}

// Function to trigger printing (this is triggered by the button click in the HTML)
function printCertificate() {
  window.print(); // This opens the print dialog
}

// Event listeners for input and dropdown changes
document.getElementById('nameInput').addEventListener('input', updateCertificate);
document.getElementById('templateSelect').addEventListener('change', updateCertificate);

// Initial update
updateCertificate();
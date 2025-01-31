document.getElementById('templateSelector').addEventListener('change', function() {
    const selectedTemplate = this.value;
    
    // Hide all templates first
    document.getElementById('template1').style.display = 'none';
    document.getElementById('template2').style.display = 'none';
    document.getElementById('template3').style.display = 'none';
  
    // Show the selected template
    document.getElementById(selectedTemplate).style.display = 'block';
  });
  
  // Set default template to template1
  document.getElementById('template1').style.display = 'block';
  
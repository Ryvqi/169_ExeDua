function submitForm() {
    var form = document.getElementById('feedbackForm');
    var formData = new FormData(form);
    var output = '';
    for (var pair of formData.entries()) {
      output += pair[0]+ ': ' + pair[1] + '\\n';
    }
    alert(output);
  }
  
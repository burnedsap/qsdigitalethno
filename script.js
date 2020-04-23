window.onload = function() {
  var conversationalForm = window.cf.ConversationalForm.startTheConversation({
    formEl: document.getElementById("form"),
    context: document.getElementById("cf-context"),
    submitCallback: function() {
      var formData = conversationalForm.getFormData();
                    var formDataSerialized = conversationalForm.getFormData(true);
                    console.log("Formdata:", formData);
                    console.log("Formdata, serialized:", formDataSerialized);
					const scriptURL = 'https://script.google.com/macros/s/AKfycbxE_XvKhPwkDPW5J_CNHPa3ZMPmT3CV3LgsNI1AawapSelDjOM/exec'
					const form = document.forms['submit-to-google-sheets']


  						fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  						.then(response => console.log('Success!', response))
  						.catch(error => console.error('Error!', error.message))
  				
     conversationalForm.addRobotChatResponse("Alright, you are done."); 
    }
  });
};





               
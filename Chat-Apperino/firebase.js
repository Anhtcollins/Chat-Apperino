  /*jshint esversion: 6 */
//(function() {

  // Initialize Firebase
    var config = {
        apiKey: "AIzaSyD7XkQW5N-8zaPVLrVQ05wPLQ5zqqErCR0",
        authDomain: "facepage-29aec.firebaseapp.com",
        databaseURL: "https://facepage-29aec.firebaseio.com",
        projectId: "facepage-29aec",
        storageBucket: "facepage-29aec.appspot.com",
        messagingSenderId: "283437457941"
    };
        firebase.initializeApp(config);
 
    const docRef = firestore.collection("Messages").doc("messages");
    const outputHeader = document.querySelector("#Textoutput");
    const inputTextField = document.querySelector("#latestMessage");
    const saveButton = document.querySelector("#saveButton");
  
    saveButton.addEventListner("click", function() {
        const textToSave = inputTextField.value;
        console.log("I am going to save " + textToSave + " to Firestore");
    docRef.set({
         message: textToSave});
        }).then(function() {
            console.log("Message saved!");
        }).then(function (error) {
            console.log("Got an error: ", error);
    }());
//})();
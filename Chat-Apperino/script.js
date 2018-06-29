  /*jshint esversion: 6 */
(function Function() {
    // Get Elements
    const preObject = document.getElementById("object");

    // Create references
    const dbRefObject = firebase.database().ref().child("object");
    
    // Sync object changes
    dbRefObject.on("value", snap => console.log(snap.val())); 
        preObject.innerText = JSON.stringify(snap.val(), null, 3);
  
}());
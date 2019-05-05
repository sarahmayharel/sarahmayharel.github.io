  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBNiZlPfVQDbgFhgR6snJWPGsmOeMz7duc",
    authDomain: "reservation-site-993f5.firebaseapp.com",
    databaseURL: "https://reservation-site-993f5.firebaseio.com",
    projectId: "reservation-site-993f5",
    storageBucket: "reservation-site-993f5.appspot.com",
    messagingSenderId: "1099093752818",
    appId: "1:1099093752818:web:f7ef40253e2a7d1b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  var reservationData = {};

  // set the day when an option is clicked on
$('.reservation-day li').click(function() {
  reservationData.day = $(this).text();
});

$('.reservations').on('submit', function(e) {
  e.preventDefault();

  reservationData.name = $('.reservation-name').val();

  database.ref('reservations').push(reservationData);
});

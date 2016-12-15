import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyDHdeLf_2Gwcun5KAJ-SCrpBpBPNGOK3o0",
        authDomain: "todoappreact-2034a.firebaseapp.com",
        databaseURL: "https://todoappreact-2034a.firebaseio.com",
        storageBucket: "todoappreact-2034a.appspot.com",
        messagingSenderId: "225403996942"
    };

    firebase.initializeApp(config);

} catch (e) {}

export var firebaseRef = firebase.database().ref();
export default firebase;

import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDHdeLf_2Gwcun5KAJ-SCrpBpBPNGOK3o0",
    authDomain: "todoappreact-2034a.firebaseapp.com",
    databaseURL: "https://todoappreact-2034a.firebaseio.com",
    storageBucket: "todoappreact-2034a.appspot.com",
    messagingSenderId: "225403996942"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Andrew',
        age: 25
    }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({text: 'Todo 1'});

todosRef.push({text: 'Todo 2'});

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
        version: '0.1'
    },
    isRunnig: true,
    user: {
        name: 'Damian',
        age: 38
    }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot)=>{
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text:'Todo 1'
});

todosRef.push({
  text:'Todo 2'
});


// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot)=>{
//   console.log('Child added', snapshot.key, snapshot.val());
// });
// notesRef.on('child_changed', (snapshot)=>{
//   console.log('Child changed', snapshot.key, snapshot.val());
// });
// notesRef.on('child_removed', (snapshot)=>{
//   console.log('Child removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the Vaco'
// });
// console.log('Todo id', newNoteRef.key);

// firebaseRef.update({
//   isRunnig:false,
//   'app/name': 'New todo name',
//   'user/name': 'Che'
// });

// firebaseRef.child('app').update({name: 'Otro nombre'}).then(() => {
//     console.log('Update worked');
// }, (e) => {
//     console.log('Update failed');
// });
//
// firebaseRef.child('user').update({name: 'Cañan'}).then(() => {
//     console.log('Update worked');
// }, (e) => {
//     console.log('Update failed');
// });

// firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// firebaseRef.child('app').once('value').then((snapshot)=>{
//   console.log('Got entire database:', snapshot.key, snapshot.val());
// },(e)=>{
//   console.log('Unable to fetch value', e);
// });

// firebaseRef.child('user').on('value', (snapshot)=>{
//   console.log('User ref changed', snapshot.val());
// });
//
// firebaseRef.child('user').update({name:'Vaco'});
// firebaseRef.child('app').update({name:'Vaco App'});

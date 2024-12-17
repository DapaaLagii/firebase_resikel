const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

initializeApp({
  credential: cert('/resikel_servicekey.json'),
});

const db = getFirestore();

console.log('Firestore database connected successfully!');

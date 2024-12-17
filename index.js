const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

// Inisialisasi Firebase dengan Service Account Key
initializeApp({
  credential: cert('/resikel_servicekey.json'), // Path ke file service account
});

const db = getFirestore();

console.log('Firestore database connected successfully!');

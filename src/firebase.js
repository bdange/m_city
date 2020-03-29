import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyA9n7Xm9zmKMq_QVy8DOaaZxmQO5qokSLI',
  authDomain: 'mcity-e2b2c.firebaseapp.com',
  databaseURL: 'https://mcity-e2b2c.firebaseio.com',
  projectId: 'mcity-e2b2c',
  storageBucket: 'mcity-e2b2c.appspot.com',
  messagingSenderId: '544751226761',
  appId: '1:544751226761:web:d945ae8f81e417917f5b58',
  measurementId: 'G-42PKNW6ZXY'
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebasePlayers,
  firebaseDB
};

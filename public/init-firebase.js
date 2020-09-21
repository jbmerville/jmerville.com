const firebaseConfig = {
  apiKey: 'AIzaSyBHMVYQnvnf-f6r0iU-lK2syKjalgCEjkE',
  authDomain: 'jmerville-7def9.firebaseapp.com',
  databaseURL: 'https://jmerville-7def9.firebaseio.com',
  projectId: 'jmerville-7def9',
  storageBucket: 'jmerville-7def9.appspot.com',
  messagingSenderId: '579417357392',
  appId: '1:579417357392:web:e9451cb872e0ac5a4ee555',
  measurementId: 'G-W8FLSD3V4F',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics.isSupported().then((isSupported) => {
  if (isSupported) {
    firebase.analytics();
  }
});

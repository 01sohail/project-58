import firebase from 'firebase';

  var firebaseConfig = {
  apiKey: "AIzaSyDO7gRLzXeNzLSqReDA0tov3dstzkMLgcY",
  authDomain: "project-58-dd2c0.firebaseapp.com",
  projectId: "project-58-dd2c0",
  storageBucket: "project-58-dd2c0.appspot.com",
  messagingSenderId: "1072529920317",
  appId: "1:1072529920317:web:eaddb507f3a56891353554"
};


    

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();
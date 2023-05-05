// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI
const firebaseConfig = {
    apiKey: "AIzaSyBHAwVdu7prCNshFL9FI9Qg-9h-XEtpZu8",
    authDomain: "web-app-vamos-conversar.firebaseapp.com",
    databaseURL: "https://web-app-vamos-conversar-default-rtdb.firebaseio.com",
    projectId: "web-app-vamos-conversar",
    storageBucket: "web-app-vamos-conversar.appspot.com",
    messagingSenderId: "267878500867",
    appId: "1:267878500867:web:27ad4a9d420c9c5becdc36",
    measurementId: "G-TQQBCRLY6J"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    Armazene o nome de usuário em localStorage
    
    Programe window.location para que o usuário possa navegar até a página chat_room.html.
    */
    localStorage.setItem("user_name", user_name); 
    window.location ="chat_room.html";
}




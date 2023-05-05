addRoom()
function getData()
{
firebase.database() .ref("/") .on('value', function(snapshot)
{document.getElementById ("output") .innerHTML =
"";snapshot.forEach(function(childsSnapshot) {childKey =
childsnapshot.key;
room_names = childKey;
//Comece a programar aqui
<div>
    <var> nomeSalas = ["Sala 1", "Sala 2", "Sala 3"]; </var>
    <var> nomeSalasString = nomeSalas.join(", "); </var>
    console.log(nomeSalasString);["Sala 1", "Sala 2", "Sala 3"]

    functionedirectToRoomName (roomName) {
        localStorage.setItem('roomName', roomName);
        window.location.href = 'chat_page.html';}
</div>
//Termine de programar aqui
});
});
}
getData();

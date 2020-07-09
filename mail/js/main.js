document.getElementById('form').addEventListener('submit', checkEmail);

function checkEmail(preventRefresh) {
    var eMail = ['booster@gmail.com', 'kellerone@gmail.com', 'jose@gmail.com', 'mario@gmail.com', 'giorgio@gmail.com', 'luca@gmail.com'];
    var bool = false;
    var user = document.getElementById("mailInput").value;
    var messaggio;

    for (var i = 0; i < eMail.length; i++) {

        if (eMail[i] == user) {
            bool = true;
        }
    }

    if (bool == true) {
        messaggio = 'utente riconosciuto';
    } else {
        messaggio = 'utente non riconosciuto';
    }
    
    document.getElementById('emailmessage').innerHTML = messaggio;
    preventRefresh.preventDefault();
}



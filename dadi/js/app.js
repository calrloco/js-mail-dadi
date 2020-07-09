document.getElementById('dice-1').style.opacity='0'; 
document.getElementById('dice-2').style.opacity='0'; 

document.getElementById('roll').addEventListener('click', function(){
    var dicePlayer = Math.floor(Math.random()*6 + 1);
    var diceCoputer = Math.floor(Math.random()*6 + 1);
    document.getElementById('dice-1').style.opacity='1'; 
     document.getElementById('dice-2').style.opacity='1'; 
    document.getElementById('dice-1').src='img/dice-'+dicePlayer+'.png'; 
    document.getElementById('dice-2').src='img/dice-'+diceCoputer+'.png'; 
    document.getElementById('score-0').innerHTML = dicePlayer;
    document.getElementById('score-1').innerHTML = diceCoputer;
    if (dicePlayer > diceCoputer){
        document.getElementById('risultato').innerHTML='Hai Vinto';
        document.getElementById("roll").disabled = true;
    }else if (dicePlayer < diceCoputer){
        document.getElementById('risultato').innerHTML='Hai Perso';
        document.getElementById("roll").disabled = true;
    }else{
        document.getElementById('risultato').innerHTML='Pareggio';
        document.getElementById("roll").disabled = true;
    }
  
});
document.getElementById('replay').addEventListener('click', function(){
 location.reload();
});

function rollDice(){
    let goldCoins = 0;
    for(i=0; i<10; i++){
        const roll = Math.floor(Math.random()*6 + 1);
        alert('The value of the roll: ' +roll);
        if(roll === 1){
            alert("Game over, no more rolls!");
            break;
        }
        if(roll > 5){
            continue;
        }
        if(roll === 5){
            alert("Congratulations, you win 5 gold coins!");
        }
        if(roll === 6){
            alert("Congratulations, you win 6 gold coins!");
        }
        goldCoins = roll;
    }
    alert("The total gold coins you have earned: " +goldCoins);
}
const answer = parseInt(Math.random() * 1000);

function getHotCold(guess){
    
    const difference = Math.abs(guess - answer);
    const direction = guess > answer ? '(Too High)' : '(Too Low)';

    if(guess === answer){
        return "CORRECT!";
    }

    if(difference < 20){
        return `ON FIRE ${direction}`;
    }

    if(difference < 50){
        return `HOT ${direction}`;
    }

    if(difference < 200){
        return `WARM ${direction}`;
    }

    if(difference < 500){
        return `COLD ${direction}`;
    }

    return `FREEZING ${direction}`;
}

function guess(){
    const guess = parseInt(document.querySelector("#guess").value);

    document.querySelector('#result').innerText = getHotCold(guess);
}
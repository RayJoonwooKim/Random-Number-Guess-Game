class GameApp {
    constructor(numToGuess, numEntered) {
        this._numToGuess = numToGuess;
        this._numEntered = numEntered;
        this._numOfTry = 0;
    }
    get numToGuess() {
        return this._numToGuess;
    }
    get numEntered() {
        return this._numEntered;
    }
    get numOfTry() {
        return this._numOfTry;
    }
    static randomNumber() {
        return Math.floor(Math.random() * 100);
    }
    checkNumber() {
        if (this._numToGuess > this._numEntered) {
            console.log(`The number is greater than ${this._numEntered}!`)
            this._numOfTry++;
        }
        else if (this._numToGuess < this._numEntered) {
            console.log(`The number is smaller than ${this._numEntered}!`)
            this._numOfTry++;
        }
        else {
            console.log("Correct!")
        }
    }
}
const RandomNumberGenerator = {
    static randomNumber() {
        return Math.floor(Math.random() * 100);
    }
}



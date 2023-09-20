  //split word's characters
        var wordSplit = word.split("")
        // Shuffle/Scramble the words Characters
        for(var i = wordSplit.length - 1; i > 0; i--){
            let j = Math.floor(Math.floor(Math.random() * ( i + 1 )));
            [wordSplit[i], wordSplit[j]] = [wordSplit[j], wordSplit[i]]
        }
        // group the scrabled characters
        var scrambled = wordSplit.join("").toUpperCase()
        // Display Scarmbled word
        this.scrambleWord.innerText = scrambled
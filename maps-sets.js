// quick questions #1
//what does the following code return? 

new Set([1,1,2,2,3,4])
// {1,2,3,4}
// quick questions #2
//what does the following code return? 

// [...new Set("referee")].join("") // "ref"

// quick questions #3
//what does the following code return? 

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

//  0: {Array(3) => true}
// 1: {Array(3) => false}

//hasDuplicate 
//Write a function called hasDuplicate which accepts an array and 
//returns true or false if that array contains a duplicate

const hasDuplicate = (arr) => new Set(arr).size !== arr.length

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false



//vowelCount
//Write a function called vowelCount which accepts a string and 
//returns a map where the keys are numbers and the values are 
//the count of the vowels in the string.

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

function isVowel(letter) {
    return "aeiou".includes(letter);
}

const vowelCount = (word) => {
    const vowelMap = new Map();
    for(let letter of word) {
        let lowerCaseLetter = letter.toLowerCase()
        if(isVowel(lowerCaseLetter)) {
            if(vowelMap.set(lowerCaseLetter)) {
                vowelMap.set(lowerCaseLetter, vowelMap.get(lowerCaseLetter) + 1);
            }
        } else {
            vowelMap.set(lowerCaseLetter, 1);
        }
    }
    return vowelMap;
}
/* 
anagram is number of each chracter in both strings should be same
ex: anagram("rail safety", "fairy tales") --> true
*/


// Solution -1 

function anagram(strA, strB) {
    const aString = charBuildMap(strA);
    const bString = charBuildMap(strB);
    if (Object.keys(aString).length !== Object.keys(bString).length) {
        return false
    } 
    for(let char in aString){
        if(aString[char] !== bString[char]){
            return false
        }
    }
    return true
}

function charBuildMap(str) {
    let charMap = {};
    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}
console.log(anagram("RAIL! SAFETY!", "fairy tales"));

/*************************************************************************************/

// Solution - 2
function anagram(str1, str2) {
    const aStr = str1.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
    const bStr = str2.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
    return aStr === bStr;
}
console.log(anagram("RAIL! SAFETY!", "fairy tales"));

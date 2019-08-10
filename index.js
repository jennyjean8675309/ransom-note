// Ransom note 

// Design an algorithm to determine if you can build a ransom note from a magazine.

const magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t",
"h", "a", "t", "y", "o", "u", "s", "h", "o", "u", "l", "d", "b",
"u", "y", "t", "h", "e", "y", "a", "r", "e", "c", "h", "e", "a",
"p", "a", "n", "d", "w", "o", "n", "d", "e", "r", "f", "u", "l",
 "f", "o", "r", "t", "h", "e", "s", "u", "m", "m", "e", "r"]

 let note = "give me the ferbie or else"

 let note2 = "hand me the ferbie or else"

 // One possible solution is to sort the magazine letters, then check the letters in your ransom note one by one against the sorted list of letters, each time a letter is found, remove that letter from the magazine, if the letter is not found then we know that the ransom note could not be made

 function canBuildNote(magazine, note) {
    let noteLetters = note.replace(/ /g, '').split('')
    let sortedMagazine = magazine.sort()
    for (letter of noteLetters) {
        let foundLetter = sortedMagazine.find(magazineLetter => {
            return magazineLetter == letter
        })
        if (!foundLetter) {
            return false
        } else {
            let index = sortedMagazine.indexOf(foundLetter)
            sortedMagazine = sortedMagazine.slice(0, index).concat(sortedMagazine.slice(index + 1))
        }
    }
    return true
 }

 console.log('testing note')
 console.log(canBuildNote(magazine, note))

 console.log('testing note2')
 console.log(canBuildNote(magazine, note2))

 // Another possible solution is to use histograms

 function buildHistogram(arrayOfLetters) {
    let histogram = {}
    for (letter of arrayOfLetters) {
        if (histogram[letter]) {
            histogram[letter] += 1
        } else {
            histogram[letter] = 1
        }
    }
    return histogram
 }

 

 function binaryMatch(magazine, note) {
    let magazineHistogram = buildHistogram(magazine)
    let noteHistogram = buildHistogram(note.replace(/ /g, ''))
    
    for (key in noteHistogram) {
        if (noteHistogram[key] <= magazineHistogram[key]) {
            return true
        } else {
            return false
        }
    }
 }

//  console.log('testing histogram')
//  console.log(buildHistogram(magazine))
//  console.log(buildHistogram(note.replace(/ /g, '')))
//  console.log(buildHistogram(note2.replace(/ /g, '')))

 console.log('testing binaryMatch')
 console.log(binaryMatch(magazine, note))
 console.log(binaryMatch(magazine, note2))


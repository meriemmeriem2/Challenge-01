//let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers[3]);
 //console.log("the length of the array is :" + numbers.length);

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// let a = [7, 10, 15, 8, 0, 23]
// console.log(a);
// a.push(42)
// console.log(a);

// a.pop()
// console.log(a);

// let b=a.slice(1,4)
// console.log(b);
// console.log(a);

// a.unshift(3, 4)
// console.log(a);

// a.shift();
// console.log(a);

// let index = a.indexOf(15);
// console.log(index);


// let a1 = [7, 10, 15, 8, 0, 23];
// let a2 = [20, 22, 24, 26, 28];
// let a3 = a1.concat(a2);
// console.log(a3);

// a= [7, 10, 15, 8, 0, 23]
// b = a.splice(2, 2)
// console.log(b);
// console.log(a);

// let names = ["Alice", "Bob", "Charlie", "David"];
// for( let i in names)
// console.log(names[i]);

// let arraywords = ["hello", "world", "this", "is", "JavaScript"];
// let phrase = "";
// for ( let word of arraywords) {
//   phrase += word + " ";
// }
// console.log(phrase);

// let string = arraywords.join("");
// console.log(string);




// function isPalindrome(mot) {
//     let i = 0;
//     let j = mot.length - 1;
//     while (i < j) {
//         if (mot[i] !== mot[j]) {
//             return false;
//         }
//         i++;
//         j--;
//     }
//     return true;
// }
// if (isPalindrome("radar")) {
//     console.log("Bravo ! C'est un palindrome magique !");
// } else {
//     console.log("Oups ! Ce n'est pas un palindrome...Réessaie");
// }


// const prompt = require('prompt-sync')();
// let mot = prompt('Entrez un mot :');

// function isPalindrome(mot){
//     mot = mot.toLowerCase();
//     first = 0;
//     last = mot.length - 1;
//     palindrom = true;

//     while(first < last){
//         if (mot[first] !== mot[last]){
//             palindrom = false;
//             break;
//         }
//         first++;
//         last--;
//     }
//     return palindrom;
// }
// palindrom = isPalindrome(mot);
// if (palindrom){
//     console.log(mot + ' Bravo ! C\'est un palindrome magique !');
// }else{
//     console.log(mot + ' Oups ! Ce n\'est pas un palindrome...Réessaie');
// }

//let personne = {
 // nom: "Dupont",
  //age: 30,
  //ville: "Paris",
  //isStudent: false,
  //hobbies: ["lecture", "voyage", "cinéma"],
  //adresse: {
    //rue: "123 rue de Paris",
    //codePostal: "75000",
    //ville: "Paris"
  //}
//}
//console.log(personne.nom);
//console.log(personne.hobbies[0]);
///console.log(personne.adresse.rue);

//personne.hobbies.push("sport");
//personne.adresse.ville = "Lyon";
//console.log(personne.hobbies);
//console.log(personne.adresse);


function leftoverArea(r) {
    const totalarea = Math.PI * r * r;
    const removedArea = (3/8) * totalarea;
    const remainingArea = totalarea - removedArea;
    

    console.log(`total area: ${totalarea.toFixed(2)}`);
    console.log(`removed area (3/8): ${removedArea.toFixed(2)}`);
    console.log(`remaining area: ${remainingArea.toFixed(2)}`);

    return remainingArea;
}

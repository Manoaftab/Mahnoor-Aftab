                           // javascript string methods//

// FOR STRING LENGTH//
let word="mahnoor";
let length=word.length;
console.log(" 1 :The length of a word is  = ",length);

// FOR STRING SLICE //
let text= "table,chair,pen";
let slice1=text.slice(3,8);
let slice2=text.slice(0,8);
let slice3=text.slice(-6,-5);

console.log(" 2 : The sliced words are  =  ", slice1);
console.log(" 3 : The sliced words are  =  ", slice2);
console.log(" 4 : The sliced words are  =  ", slice3);

// FOR STRING SUBStr //
let Text= "table,chair,pen";
let SubSlice1=Text.substr(3,8);
let SubSlice2=Text.substr(0,8);
let SubSlice3=Text.substr(-6);

console.log(" 5 : The Subsliced words are  =  ", SubSlice1);
console.log(" 6 : The Subsliced words are  =  ", SubSlice2);
console.log(" 7 : The Subsliced words are  =  ", SubSlice3);



// FOR REPLACE STRING //
let sentence =" I am  girl";
let replace=sentence.replace("girl "," Mahnoor");

console.log (" 8 : Replaced String is  =  ", replace);

// FOR REPLACEALL STRING //
let TEXT= " This is our 5th semester";
let ReplaceAll1=TEXT.replaceAll('our','your');
let ReplaceAll2=TEXT.replaceAll('5th','6th');

console.log(" 9 : Replaceall String is  =  ", ReplaceAll1);
console.log(" 10 : Replaceall String is  =  ", ReplaceAll2);

// FOR UPPERCASE AND LOWER CASE //
let texT="mahnoor";
let uppercase=texT.toUpperCase();

console.log(" 11 : Uppercase String is  =  ", uppercase);

let teXT="mahnoor";
let lowercase=teXT.toLowerCase();

console.log(" 12 : Uppercase String is  =  ", lowercase);

// FOR CONCAT STRING 
let text01= "Mahnoor";
let text02=" Aftab";
let concat=text01.concat(" ",text02);

console.log(" 13 : Concat string is  =  ", concat);

// For TRIM STRING 
let STRING = "         Mahnoor Aftab   " ;
let trim= STRING.trim();

console.log(" 14 : Trim string is  =  ", trim);

// For TRIM STRING 
let STRING2 = "             Mahnoor Aftab " ;
let trimStart= STRING2.trimStart();

console.log(" 15 : Trim start  string  is  =  ", trimStart);

// For TRIM STRING 
let STRING3 = "        Mahnoor Aftab         " ;
let trimEnd= STRING3.trimEnd();

console.log(" 15 : Trim  end string is  =  ", trimEnd);

// For Pad start
let a = "9";
let padstart = a.padStart(6,"0");

console.log(" 16  :  Pad Start String is  = ", padstart);

// For pad End

let b = "9";
let padEnd=a.padEnd(6,"0");

console.log(" 17  :  Pad end  String is  = ", padEnd);

// For charAt string

let TEXT01 = "Mahnoor";
let char1 = text.charAt(3);

console.log(" 18  :  Text char at  String is  = ", char1);

// For chaarcode at string

let TEXT02 = "mahnoor aftab";
let char = text.charCodeAt(0);

console.log(" 19  :  Text char at string is   = ", char);


 // For split string 
 let text1=" aimen, ali";
 let split1 =text1.split(",") ;
 let split2= text1.split(" ") ; 
 let split3= text1.split("|");

 console.log(" 20  :  Text split 1  at string is   = ", split1);
 console.log(" 21 :  Text split 2 at string is   = ", split2);
 console.log(" 22 :  Text split 3 at string is   = ", split3);


// For substring 
let text002= "hello world";
let substring=text002.substring(0,4);
console.log(" 23 :  Text substring  is   = ", substring);



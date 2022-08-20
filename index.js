
// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223 

function reverseNumber(number){
   
    let num = Number(String(number).split('').reverse().join(""));
   
    return num
}
const val = reverseNumber(468554321)
console.log(val)
//--------------------------------------------------------------------------------------------------------------------------

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function isPalindrome(string){
    string= string.replace(/[^\w]\s/g, '').replace(/\s/g, '').toLowerCase();
     let str = string.split('').reverse().join("");
     if(str === string){
         return true
     }
     return false
 }
 console.log(isPalindrome("madam"))
//--------------------------------------------------------------------------------------------------------------------------

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g 
function combinations(str){
    let comb = [];
    let len = str.length;
      for(let i = 0 ;i < len; i++)
    {
        for(let j = i + 1; j< len + 1; j++)
        {
            comb.push(str.slice(i , j));
        }
    }
   return comb;
}
console.log(combinations('Dog'));
//--------------------------------------------------------------------------------------------------------------------------

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function alphabeticalOrder(string){
    let str=string.split('').sort().join("");
    
     return str
 }
 console.log(alphabeticalOrder("webmaster"))
 //--------------------------------------------------------------------------------------------------------------------------
//  5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
//  Example string: 'the quick brown fox' 
//  Expected Output: 'The Quick Brown Fox '
function firstLetterUpperCase(string){
    let arrStr = string.split(" ")
    for(let i in arrStr){
        arrStr[i]= arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1)
    }
   return arrStr.join(" ");
}
console.log(firstLetterUpperCase('the quick brown fox'));
 //--------------------------------------------------------------------------------------------------------------------------
 
//  6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
//  Example string: 'Web Development Tutorial' 
//  Expected Output: 'Development'
function longestWord(string){
    let arrStr = string.split(" ")
    arrStr.sort((a,b) =>a.length < b.length)
   return arrStr[0]
}
console.log(longestWord('Web Development Tutorial'));
  //--------------------------------------------------------------------------------------------------------------------------

//  7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
//  Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
//  Example string: 'The quick brown fox' 
//  Expected Output: 5
function vowelCount(word){
    function isVol(c){
        return(c == 'A' || c == 'a' || c == 'E' || c == 'e' || c == 'O' || c == 'o' || c == 'I' || c== 'i' || c == 'U' || c == 'u')
    }
  
    let sum = 0
   word= word.split("")
   for( let i in word){
       if(isVol(word[i])){
           sum+= 1
       }
   }
    return sum
}
console.log(vowelCount("The quick brown fox"));
 //--------------------------------------------------------------------------------------------------------------------------
 
//  8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
//  Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
function isPrime(num) {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
  console.log(isPrime(7))
  //--------------------------------------------------------------------------------------------------------------------------

//  9. Write a JavaScript function which accepts an argument and returns the type. 
//  Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function typeOf(argument) {
  
    return typeof argument;
  }
  console.log(isPrime(true))
//--------------------------------------------------------------------------------------------------------------------------

//  10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
function matrix(n) {
    for (let i=0; i < n; i++)
    {
      for (let j=0; j < n; j++)
      {
            (i === j)? console.log('1'): console.log('0');
        }
            
         console.log('----------');
    }
}
matrix(5);
 //--------------------------------------------------------------------------------------------------------------------------

//  11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
//  Sample array: [1,2,3,4,5]
//  Expected Output: 2,4 
//i did not understad the quetion
function secondLowestSecondGreatest (n) {
    n.sort((a,b) => a-b)


return (`${n[1]},${n[1+2]}`)
  }
console.log(secondLowestSecondGreatest([5,4,3,2,1]));
//--------------------------------------------------------------------------------------------------------------------------

//  12. Write a JavaScript function which says whether a number is perfect. 
//  According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
//  Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
function isPerfect(number)
{
let temp = 0;
   for(let i=1;i<=number;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
      return(`${number} is a perfect number.`);
        } 
     else
        {
       return(`${number} is not a perfect number.`);
        }   
 } 
 console.log(isPerfect(28)); 
 //--------------------------------------------------------------------------------------------------------------------------
//  13. Write a JavaScript function to compute the factors of a positive integer. 
function fun14(amount, coins) {
    let output = [];
    for (let i = 0; i < coins.length; i ++) {
        // for each of this specific coin that fits inside, push another one in.
        for (let j = 1; j <= Math.floor(amount / coins[i]); j++) {
            output.push(coins[i]);
        }
        amount = amount % coins[i];
    }
    return output;
}
console.log(fun14(46, [25, 10, 5, 2, 1]));
//--------------------------------------------------------------------------------------------------------------------------

//  14. Write a JavaScript function to convert an amount to coins. 
//  Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
//  Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
//  Output: 25, 10, 10, 1
function amountTocoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = amount - coins[0];
        return [coins[0]].concat( amountTocoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return amountTocoins(amount, coins);
        }
    }
} 
console.log(amountTocoins(46, [25, 10, 5, 2,1]));
//--------------------------------------------------------------------------------------------------------------------------

//  15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
function fun(b, n) {
    if (n == 0) {
        return 1;
    }
    let positive = true;
    if (n < 0) {
        n *= -1;
        positive = false;
    }
    let base_number = b;
    for (let i = 1; i <= n; i++) {
        base_number = base_number * b;
    }

    // return proper result, based on positive or negative exponent
    if (positive){
        return base_number;
    } else {
        return (1 / base_number);
    }
}
console.log(fun(4, 6));
 //--------------------------------------------------------------------------------------------------------------------------

//  16. Write a JavaScript function to extract unique characters from a string. 
//  Example string: "thequickbrownfoxjumpsoverthelazydog"
//  Expected Output: "thequickbrownfxjmpsvlazydg"
function uniqueCharacters(input) {
    let unique = [];
    
    for (let i = 0; i < input.length; i++) {
        if (!unique.includes(input[i])) {
            unique.push(input[i]);
        }
    }
    return unique.join("");
}
console.log(uniqueCharacters("thequickbrownfxjmpsvlazydg"));
 //--------------------------------------------------------------------------------------------------------------------------

//  17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 
function occurrencesOfEachLetter(input) {
    // sort characters alphabetically so they're all together and cute
    let res = [];
    let sor = input.split("").sort().join("");
    let counter = 1;
    for (let i = 0; i < sor.length; i++) {
        if (sor[i] == sor[i + 1]) {
            counter++;
        } else {
            
            res.push([sor[i], counter]);
            counter = 1;
        }
    }
    return res;
}
console.log(occurrencesOfEachLetter("The quick brown fox"));
//--------------------------------------------------------------------------------------------------------------------------

//  18. Write a function for searching JavaScript arrays with a binary search. 
//  Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
function arraybinarySearch(narray, delement) {
    let mposition = Math.floor(narray.length / 2);
 
    if (narray[mposition] === delement){
       return mposition;
    }
    else if (narray.length === 1) 
    {
       return null;
    }
    else if (narray[mposition] < delement) {
       var arr = narray.slice(mposition + 1);
       var res = arraybinarySearch(arr, delement);
       if (res === null)
       {
          return null;
       }
       else {
          return mposition + 1 + res;
       }
    }
    else {
       var arr1 = narray.slice(0, mposition);
       return arraybinarySearch(arr1, delement);
    }
 }
 
  var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
  console.log(arraybinarySearch(myArray, 6));
  //--------------------------------------------------------------------------------------------------------------------------

//  19. Write a JavaScript function that returns array elements larger than a number. 
function fun(array, minimum) {
    let qualifiers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > minimum) {
            qualifiers.push(array[i]);
        }
    }
    return qualifiers;
}
console.log(fun([1, 22, 300, 99, 4258, 996326, 11, 9, 38], 10));
//--------------------------------------------------------------------------------------------------------------------------

//  20. Write a JavaScript function that generates a string id (specified length) of random characters. 
//  Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function generatesId(length) {
    let res = "";
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < char.length; i++) {
        res += char.charAt(Math.floor(Math.random() * char.length));
    }
    return res;
}

console.log(generatesId(50));
//--------------------------------------------------------------------------------------------------------------------------

//  21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
//  Sample array: [1, 2, 3] and subset length is 2 
//  Expected output: [[2, 1], [3, 1], [3, 2]]
function subsetFun(arra, arrSize)
{
   let resultSet = [], 
       result;
for(let x = 0; x < Math.pow(2, arra.length); x++)
 {
   result = [];
   i = arra.length - 1; 
    do
     {
     if( (x & (1 << i)) !== 0)
         {
            result.push(arra[i]);
          }
       }  while(i--);

   if( result.length >= arrSize)
      {
         resultSet.push(result);
       }
   }

   return resultSet; 
}

console.log(subsetFun([1, 2, 3], 2));
//--------------------------------------------------------------------------------------------------------------------------

//  22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
//  Sample arguments: 'microsoft.com', 'o' 
//  Expected output: 3 
function fun22(input, letter) {
    return (input.length - input.split(letter).join("").length);
}
console.log(fun22('microsoft.com', 'o'));
//--------------------------------------------------------------------------------------------------------------------------

//  23. Write a JavaScript function to find the first not repeated character. 
//  Sample arguments: 'abacddbec' 
//  Expected output: 'e' 
function fun23(str) {
    var arra1 = str.split('');
    var result = '';
    var ctr = 0;
   
    for (let i = 0; i < arra1.length; i++) {
      ctr = 0;
   
      for (var y = 0; y < arra1.length; y++) 
      {
        if (arra1[i] === arra1[y]) {
          ctr+= 1;
        }
      }
   
      if (ctr < 2) {
        result = arra1[i];
        break;
      }
    }
    return result;
  }
  console.log(fun23('abacddbec'));
 //--------------------------------------------------------------------------------------------------------------------------

//  24. Write a JavaScript function to apply Bubble Sort algorithm. 
//  Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sor, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
//  Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
//  Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(array) {
    // iterate forwards
    for (let i = 0; i < array.length; i++) {
        for(let j = 0; j < (array.length - i - 1); j++) {
            if(array[j] > array[j + 1]) {
                // ...and if it is, swap.
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array.reverse();
}
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
//--------------------------------------------------------------------------------------------------------------------------

//  25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
//  Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
//  Expected output: "United States of America"
function fun25(names) {
    let longest = "";
    for (let i = 0; i < names.length; i++) {
        if (names[i].length > longest.length) {
            longest = names[i];
        }
    }
    return longest;
}
console.log(fun25(["Australia", "Germany", "United States of America"]));
//--------------------------------------------------------------------------------------------------------------------------

//  26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
function longestSubstrWoutRrepChar(input) {
    var chars = input.split('');
    var curr_char;
    var str = "";
    var longest_string = "";
    var hash = {};
    for (var i = 0; i < chars.length; i++) {
        curr_char = chars[i];
        if (!hash[chars[i]]) 
        { 
            str += curr_char; 
            hash[chars[i]] = {index:i};
        }
            else 
        {
        if(longest_string.length <= str.length)
        {
            longest_string = str;
        }
        var prev_dupeIndex = hash[curr_char].index;
        var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
        str = str_FromPrevDupe + curr_char;
        hash = {};
        for (var j = prev_dupeIndex + 1; j <= i; j++) {
            hash[input.charAt(j)] = {index:j};
        }
        }
    }
    return longest_string.length > str.length ? longest_string : str;
}
console.log(longestSubstrWoutRrepChar("google.com")); 
 //--------------------------------------------------------------------------------------------------------------------------

//  27. Write a JavaScript function that returns the longest palindrome in a given string. 
//  Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
//  In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
function is_Palindrome(str1) {
    var rev = str1.split("").reverse().join("");
    return str1 == rev;
    }
    
    function longest_palindrome(str1){
    
        var max_length = 0,
        maxp = '';
        
        for(var i=0; i < str1.length; i++) 
        {
            var subs = str1.substr(i, str1.length);
            
            for(var j=subs.length; j>=0; j--) 
            {
                var sub_subs_str = subs.substr(0, j);
                if (sub_subs_str.length <= 1)
                continue;
                
                if (is_Palindrome(sub_subs_str))
                {
                    if (sub_subs_str.length > max_length) 
                    {
                        max_length = sub_subs_str.length;
                        maxp = sub_subs_str;
                    }
                }
            }
        }
    
    return maxp;
}
console.log(longest_palindrome("abracadabra"));
//--------------------------------------------------------------------------------------------------------------------------
   
//  28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function funAsPar(func) {
    func();
}
function funAsPar_e() {
    console.log("hi");
}
funAsPar(funAsPar_e);
 //--------------------------------------------------------------------------------------------------------------------------

//  29. Write a JavaScript function to get the function name. 
function functionName() {
    console.log(arguments.callee.name);
}
functionName();
 



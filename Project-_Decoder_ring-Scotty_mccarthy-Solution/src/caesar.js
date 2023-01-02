// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

   function caesar(input, shift, encode = true){
//If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false
if (!shift || shift >= alphabet.length || shift <=(alphabet.length)*-1) {return false;}
//if decode, inverts negative number back to positive
if (encode === false){ 
      shift = shift * (-1); 
    };
//Capital letters can be ignored
input = input.toLowerCase();
let newInput = ""; 

  for (let i = 0; i < input.length; i++){
        const letter = input[i]; 
        if (!alphabet.includes(letter)){
           newInput += letter;
          } 
  
  for (let i = 0; i < alphabet.length; i++){
        if (letter == alphabet[i]) {

 //End of alphabet wraps back to beginning         
              if(i + shift >= 26){
   newInput += alphabet[(i+shift) - 26];
              } 
//beginning of alphabet wraps around to the end               
          else if(i + shift < 0) {                
                  newInput += alphabet[26 + (i+shift)]
                } 
          else {
                  newInput += alphabet[i+shift];
            }
          }
        }
      } 
    return newInput;
}

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

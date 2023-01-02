// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

 function substitution(input, alphabet, encode = true){/* 
alphabet parameter must be a string of exactly 26 characters*/
if (!alphabet || alphabet.length !== 26) return false;

//Capital letters can be ignored
    const realAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    
    const inputArray = input.toLowerCase().split("");
    const newAlphabet = alphabet.toLowerCase().split("")
 //All the characters in the alphabet parameter must be unique, else return false
  const uniqueChars = newAlphabet.filter(
      (item, index, self) => self.indexOf(item) === index);
    if (uniqueChars.length !== alphabet.length) return false;
    
      const encodeMessage = () => {
      let result = [];
        
      const encode = (char) => {
        const charIndex = realAlphabet.indexOf(char);
        const encodedChar = newAlphabet[charIndex];
        result.push(encodedChar);
      };
 //Spaces should be maintained throughout  
        inputArray.forEach((char) => {
        char === " " ? result.push(" ") : encode(char);
      });
      return result.join("");
    };
    
     const decodeMessage = () => {
     let result = [];
      
     const decode = (char) => {
        const charIndex = newAlphabet.indexOf(char);
        const decodedChar = realAlphabet[charIndex];
        result.push(decodedChar);
      };
// Spaces should be maintained throughout
      inputArray.forEach((char) => {
        char === " " ? result.push(" ") : decode(char);
      });
      return result.join("");
    };
    return encode ? encodeMessage() : decodeMessage();
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

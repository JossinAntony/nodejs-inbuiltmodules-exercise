//Inbuilt modules- 
//----------------
//Assert
const myAssert = require('assert');
//myAssert(3>5); assertion false leads to error
myAssert.strictEqual(50, 50, "Error message");
//-------------------
//path  	
const myPath = require('path');
console.log(myPath.basename('S:\Flutter\workspace\nodepgms\modules-inbuilt-exercise\index.js'));
console.log(myPath.dirname('S:\Flutter\workspace\nodepgms\modules-inbuilt-exercise\index.js'));
//-------------------
//builtin modules
const myBuiltin = require('builtin-modules');
console.log(myBuiltin);
//------------
//
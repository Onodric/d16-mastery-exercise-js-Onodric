/* Here's what the pine tree should look like when you specify a height of 7, and use the asterisk character.

01        *
03       ***
05      *****
07     *******
09    *********
11   ***********
13  *************

*/

var pineTree = {
  height: 0,
  species: "null"
};

var inputs = document.getElementsByTagName("input");
var treeHeight = inputs[0];
var treeSpecies = inputs[1];

document.getElementsByTagName("input")[0].addEventListener("keydown", function(){
  if(event.keyCode == 13){
    event.preventDefault();
    checkValidRun();
  };
});
document.getElementsByTagName("input")[1].addEventListener("keydown", function(){
  if(event.keyCode == 13){
    event.preventDefault();
    checkValidRun();
  };
});

document.getElementsByTagName("button")[0].addEventListener("click", function(){
  checkValidRun();
});

function checkValidRun(){
  if(!treeHeight.value || !treeSpecies.value){
    alert("You must enter both values!");
  } else if (treeSpecies.value && treeHeight.value) {
    pineTree.height = treeHeight.value;
    pineTree.species = treeSpecies.value;
    growTree(pineTree);
  }
};


// Create a `tree` function that should build a pine tree out of a character in the Chrome dev tools console. 

function growTree(treeObject){
  for(let i = 1; i <= treeObject.height; i++){
    drawOneLine(treeObject.height, i);
  };
};

function drawOneLine(totalHeight, rowWereOn){
  let oneLine = '';
  for(let i = 1; i <= (totalHeight - rowWereOn); i++){
    oneLine += ' ';
  };
  for(let i = 1; i <= (2 * rowWereOn - 1); i++){
    oneLine += pineTree.species;
  };
  console.log(oneLine)
};

// ### It accepts a single object as an argument. The object should have two key/value pairs.

// 1. A key that specifies the height of the pine tree.
//    1.1 The value for the height of the tree should be from user input in a `<input type="text">` field in the DOM.
// 2. A key that specifies which character to use to build the pine tree.
    // 2.1 The character to use should be from user input in a `<input type="text">` field in the DOM.

// Once the user enters in a number, and a character, the user can either then just press the enter key _(as long as the cursor is in one of the input fields)_, or click a button that is labeled "Grow your tree" and the tree should be shown in the console. This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.

// pineTree = {
  // height: 3,
  // species: '$'
// };

// growTree(pineTree);
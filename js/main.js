var treeHeight = document.getElementById("treeHeight");
var treeSpecies = document.getElementById("treeSpecies");

treeHeight.addEventListener("keydown", function(){
  if(event.keyCode == 13){
    event.preventDefault();
    checkValidRun();
  };
});
treeSpecies.addEventListener("keydown", function(){
  if(event.keyCode == 13){
    event.preventDefault();
    checkValidRun();
  };
});

document.getElementById("growBtn").addEventListener("click", function(){
  checkValidRun();
});

function checkValidRun(){
  var pineTree = {
    height: 1,
    species: "null"
  };
  if(!treeHeight.value || !treeSpecies.value){
    alert("You must enter both values!");
  } else if (treeSpecies.value && treeHeight.value) {
    pineTree.height = treeHeight.value;
    pineTree.species = treeSpecies.value;
    growTree(pineTree);
  }
};

function growTree(treeObject){
  for(let i = 1; i <= treeObject.height; i++){
    let oneLine = '';
    for(let j = 1; j <= (treeObject.height - i); j++){
      oneLine += ' ';
    };
    for(let j = 1; j <= (2 * i - 1); j++){
      oneLine += treeObject.species;
    };
    console.log(oneLine);
  };
};

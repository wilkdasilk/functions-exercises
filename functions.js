// TODO: add your solutions here!

//concat
var myConcat = function(first,second) {
    var newString = first + second;
    console.log(newString);
    return newString;
};


//repeat phrase n times
var repeatPhrase = function(phrase,n){
   var repeats = phrase + " ";
    for (var i=0; i<10;i++){
        repeats = repeats + phrase +" ";
        console.log(phrase);
    }
   return repeats;
};

//power

var aPowerB = function(a,b) {
    var result=1;
    for (var i=0; i<b;i++){
        result=result *a;
    }
    console.log(result);
    return result;
};

//area of circle
var areaCircle = function(radius) {
    var area =Math.PI * aPowerB(radius,2);
  console.log(area);
  return area;
};

//pythagorean find C

var cPythag = function(a,b) {
  var cSquared = aPowerB(a,2) + aPowerB(b,2);
  var cSide =Math.sqrt(cSquared);
  console.log(cSide);
  return cSide;
};

//is X divisible by Y
var isXDivisibleY = function(x,y) {
    return (x%y===0);
};

//count vowels
var countVowels = function(str) {
    var vowelCount=0;
    for (var i=0; i<str.length;i++){
        if (str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u" || str[i]=="y"){
            vowelCount++;
        }
    }
     console.log(vowelCount);
     return vowelCount;
};

//heads or tails
var coinGame = function(){
    var flip =function(){
        var result = Math.floor(Math.random()*2);
        if (result==0) {
            console.log("flip is heads");
            return "heads";
        } else {
            console.log("flip is tails");
            return "tails";
        }
    };

    var guess = function(){
        var answer = prompt("Heads or tails?");
        console.log("answer is" + answer);
        return answer;
    };

  var test = function(){
      return (flip()==guess());

  };

    if(test()) {
        console.log("Success!");
        return "Success!";
    } else {
        console.log("Try again punk");
        return "Try again punk";
    }
};

//fancy pyramid
var printPyramidOfN = function(n){
    var builtPyramid ="";
    for (var i=1;i<n+1; i++){
        var newLayer = " ".repeat(n-i)+ "* ".repeat(i) + " ".repeat(n-i);
        if (i==1){
            builtPyramid = newLayer;
        } else {
            builtPyramid = builtPyramid + "\n" + newLayer;
        }
    }
    console.log("Pyramid starts next line" + "\n" + builtPyramid);
};

//longest word
var longestWord = function(sentence) {
    var sentArray = sentence.split(" ");
    var longest = sentArray[0];
    for (var i=0; i<sentArray.length;i++){
        if (sentArray[i].length>longest.length) {
            longest=sentArray[i];
        }
    }
        return longest;

};

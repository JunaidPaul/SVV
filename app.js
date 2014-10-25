var triangle=require("./lib/svv.js");

var side1 = 0;
var side2 = 5;
var side3 = 5;

var shortSide = triangle.smallest(side1,side2,side3);
var middleSide = triangle.middle(side1,side2,side3);
var longSide = triangle.largest(side1,side2,side3);

var triangleType = triangle.findTriangleType(shortSide,middleSide,longSide);
console.log(triangleType);
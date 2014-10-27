// Code coverage through blanket

require('blanket')({
    pattern: function (filename) {
        return !/node_modules/.test(filename);
    }
});

// Test cases
var expect = require("chai").expect;
var svv = require("../lib/svv.js");

describe("Software verification and validation", function(){
    describe("Testing Triangle module", function(){
        it("Negative input", function(){
            var side1 = 1;
            var side2 = 2;
            var side3 = -2;
            var results = svv.triangle(side1,side2,side3);
            var expected= "Invalid";
            expect(results).to.eql(expected);
        });
        it("Decimal Number Input", function(){
            var side1 = 1.1;
            var side2 = 2.1;
            var side3= 3;
            var results = svv.triangle(side1,side2,side3);
            var expected= "Invalid";
            expect(results).to.eql(expected);
        });
        it("Less than three arguments", function(){
            try{
                var side1 = 1;
                var side3 = 2;
                var results = svv.triangle(side1,side2,side3);
            }catch (e){
                var results= "Invalid";

            }
            var expected= "Invalid";
            expect(results).to.eql(expected);

        });
        it("String Input", function(){
            var side1 = 1;
            var side2 = 2;
            var side3 = "A";
            var results = svv.triangle(side1,side2,side3);
            var expected= "Invalid";
            expect(results).to.eql(expected);
        });
        it("Long Number Input", function(){
            var side1 = 234567321;
            var side2 = 234567123;
            var side3 = 234567476;
            var results = svv.triangle(side1,side2,side3);
            var expected= "Invalid";
            expect(results).to.eql(expected);
        });
        it("Not a triangle", function(){
            //side1+side2<=side3
            var side1 = 4;
            var side2 = 3;
            var side3 = 9;
            var results = svv.triangle(side1,side2,side3);
            var expected= "Not a Triangle";
            expect(results).to.eql(expected);
        });
        it("Determine the triangle type", function(){
            var side1 = 5;
            var side2 = 4;
            var side3 = 5;
            var results = svv.triangle(side1,side2,side3);
            var expected= "Isosceles";
            expect(results).to.eql(expected);
        });
        it("Determine the triangle type", function(){
            var side1 = 5;
            var side2 = 5;
            var side3 = 5;
            var results = svv.triangle(side1,side2,side3);
            var expected= "Equilateral";
            expect(results).to.eql(expected);
        });
        it("Determine the triangle type", function(){
            var side1 = 5;
            var side2 = 4;
            var side3 = 3;
            var results = svv.triangle(side1,side2,side3);
            var expected= "Scalene";
            expect(results).to.eql(expected);
        });
        it("Zero value input", function(){
            var side1 = 0;
            var side2 = 4;
            var side3 = 3;
            var results = svv.triangle(side1,side2,side3);
            var expected= "Invalid";
            expect(results).to.eql(expected);
        });

    });
});
/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');

    // create the main context
    var mainContext = Engine.createContext();

    // your app here
    mainContext.setPerspective(1000);

    var logo = new ImageSurface({
        size: [425, 425],
        content: '/content/images/metacupcakeforever.png',
        classes: ['backfaceVisibility'],
    });

    var initialTime = Date.now();
    var centerSpinModifier = new Modifier({
        align: [0.5, 0.5],
        origin: [0.5, 0.5],
        transform: function() {
            return Transform.rotateY(.002 * (Date.now() - initialTime));
        }
    });

    mainContext.add(centerSpinModifier).add(logo);

    // eloqunt javascript sandbox codek
    var day1 = {
        squirrel: false,
        events: ["work", "touched tree", "pizza", "running", 
        "television"]
    };
    // console.log(day1.work);
    var journal = [];
    function addEntry(events, didItTurnIntoASquirrel) {
        journal.push ({
            events: events,
            squirrel: didItTurnIntoASquirrel
        });
    }
    // eloquent javascript practice
    // console.log([0,1,2,3,4,5].slice(0,2));

    // var rabbit = {};
    // rabbit.speak = function(line) {
    //     console.log("The rabbit says ' " + line);
    // };
    // rabbit.speak("I'm alive");

    var makeNoise = function() {
        console.log("PLing!");
    };
    makeNoise();

    // var power = function(base, exponent) {
    //     var result = 1;
    //     for (var count = 0; count < exponent; count ++)
    //         result *= base;
    //         return result;
    // };
    // console.log(power(2, 10));
    // console.log(power(2, 2));

    // var x = "outside";
    // var f1 = function() {
    //     var x = "inside f1";
    // };
    // console.log(x);

    // var f2 = function() {
    //     x = "inside f2";
    // };
    // f2();
    // console.log(x);

    // var landscape = function() {
    //     var result = "";
    //     var flat = function(size) {
    //         for (var x = 0; x < size; x++)
    //             result += "_";
    //     };
    //     var mountain = function(size) {
    //         result += "/";
    //         for (var x = 0; x < size; x++)
    //             result += "'";
    //             result += "\\";
    //     };
    //     flat(2);
    //     mountain(2);
    //     return result;
    //     };
    // console.log(landscape());

    // function greet(who) {
    //     console.log("Hello " + who);
    // }
    // greet("harry");
    // console.log("Bye");

    // function chicken() {
    //     return egg();
    // }
    // function egg() {
    //     return chicken();
    // }
    // console.log(chicken() =  " came first");

    // function power(base, exponent) {
    //     if (exponent == undefined)
    //         exponent = 2;
    //     var result = 1;
    //     for (var count =0; count < exponent; count ++)
    //         result *= base;
    //         return result;
    // }
    // console.log(power(3));

    // function wrapValue(n) {
    //     var localVariable = n;
    //     return function() { return localVariable; };
    // }

    // var wrap1 = wrapValue(1);
    // var wrap2 = wrapValue(2);
    // console.log(wrap2());

    // function power(base, exponent) {
    //     if (exponent == undefined)
    //         exponent = 2;
    //         var result = 1;
    //     for (var count = 0; count < exponent; count++)
    //         result *= base;
    //     return result;
    // }
    // console.log(power(2,3));
    // function multiplier(factor) {
    //     return function(number) {
    //         return number * factor;
    //     };
    // }

    // var twice = multiplier(3);
    // // console.log(twice(5));

    // function power(base, exponent) {
    //     if (exponent == 0)
    //         return 1;
    //     else
    //         return base * power(base, exponent -1);
    // }
    // console.log(power(3, 2));

    /*Puzzle: starting from the number 1 and repeatedly either adding 5
    or multiplying by 3, an infinite amount of new numbers
    can be produced. How would you write a fx that, given a number
    , tries to find a seq od such additions and multiplications that
    produce that number? FOR exmaple, the num 13 could be reached by
    first multiplying by 3 and then adding 5 twice, whereas the num
    15 cannot be reached at all. */

    function findSolution(target) {
        function find(start, history) {
            if (start == target)
                return history;
            else if (start > target)
                return null;
            else
                return find(start + 5, "(" + history + " + 5)") ||
                        find(start * 3, "(" + history + " * 3)")
        }
        return find(1, "1");
    }
    console.log(findSolution(24));


    // function printFarmInventory(cows, chickens) {
    //     var cowString = String(cows);
    //     while (cowString.length < 4)
    //         cowString = "0" + cowString;
    //     console.log(cowString + " Cows");
    //     var chickenString = String(chickens);
    //     while (chickenString.length < 4)
    //         chickenString = "0" + chickenString;
    //     console.log(chickenString + " Chickens");
    // }
    // printFarmInventory(7, 11);


    // function printFarmInventory(cows, chickens) {
    //     var cowString = String(cows);
    //     while(cowString.length < 3)
    //         cowString = "0" + cowString;
    //         console.log(cowString);
    //     var chickenString = String(chickens)
    //     while(chickenString.length < 3)
    //         chickenString = "0" + chickenString;
    //         console.log(chickenString);    
    // }
    // printFarmInventory(7, 11);

    // function printZeroPaddedWithLabel(number, label) {
    //     var numberString = String(number);
    //     while(numberString.length < 3)
    //         numberString = "0" + numberString;
    //         console.log(numberString + " " + label);
    // }
    // function printFarmInventory(cows, chickens, pigs) {
    //     printZeroPaddedWithLabel(cows, "Cows");
    //     printZeroPaddedWithLabel(chickens, "Chickens");
    //     printZeroPaddedWithLabel(pigs, "Pigs");
    // }

    // printFarmInventory(7, 11, 3);

    // function zeroPad(number, width) {
    //     var string = String(number);
    //     while(string.length < width)
    //         string = "0" + string;
    //         return string;
    // }
    // function printFarmInventory(cows, chickens, pigs) {
    //     console.log(zeroPad(cows, 3) + " Cows");
    //     console.log(zeroPad(chickens, 3) + " Chickens");
    //     console.log(zeroPad(pigs, 3) + " Pigs");
    // }
    // printFarmInventory(7, 16, 3);

    // // create a function value f
    // var f = function(a) {
    //     console.log(a +2);
    // };

    // // Declare g to be a function
    // function g(a, b) {
    //     return a * b * 3.5;
    // }

    // EXERCISES Chapter 3
    // 1) write a fx min that takes two arguments and
    // returns the smallest of the two.
    // function min(a, b) {
    //     if (a < b)
    //         console.log(a)
    //     else if (a == b)
    //         console.log("they are the same!");
    //     else
    //         console.log(b);
    // }
    // min(1, 4);

    // 2) Define a recursive fx isEven corresponding to this
    // description. The fx should accept a number
    // parameter and return a boolean

    // var isEven = function(num) {
    //     if (num % 2 == 0)
    //         return true;
    //     else if (num < 0)
    //         console.log("not a positive number!");
    //     else
    //         return false;
    // }
    // console.log(isEven(50));
    // console.log(isEven(75));
    // console.log(isEven(-1));


    // 3) Write a fx countBs that takes a string as it's only arg
    // and returns a number that indicates how many uppercase "B"
    // characters are in the string
    //
    // Next, write a fx called countChar that behaves like countBs
    //except it takes a second arguemnt that indicates the char that
    // is to be counted ( rather that counting only "B" chars)
    // Rewrite countBs to make use of this new fx.

    // var countBs = function(string) {
    //     var outputBs = 0;
    //     var i;
    //     for (i=0; i<string.length-1; i++)
    //         if (string.charAt(i) == "B")
    //             outputBs += 1;
    //             return outputBs; 
    // }
    // // console.log(countBs("BBBC"));


    // var countChar = function(string, letter) {
    //     var outputCount = 0;
    //      for (var i =0; i < string.length; i++) {
    //         if (string.charAt(i) == letter)
    //             outputCount += 1;
    //      };
    //      return outputCount;     
    //  }
    //  console.log(countChar("dinodinoddd", "d"));

    // write a 'range' fx that takes 2 args (start and end), and returns
    // an array containing all of the numbers (including end).

    /*
    var range = function(start, end) {
        var outputRange = [];
        for (var i = start; i <= end; i++) {
            outputRange.push(i);
        }
            return outputRange;
        // console.log(outputRange);
    }
    console.log(range(1, 10));
    */

    // var fizzBuzz = function() {
    //     for (var i = 1; i <=100; i++) {
    //         if (i % 3 == 0 && i % 5 == 0)
    //             console.log("fizzbuzz");
    //         else if (i % 3 == 0)
    //             console.log("fizz");
    //         else if (i % 5 == 0)
    //             console.log("buzz");
    //         else
    //             console.log(i);
    //     }
    // }
    // fizzBuzz();

    var range = function(start, end, step) {
        var outputRange = [];
        if (step === undefined) {
            for (var x=start; x<=end; x++)
                outputRange.push(x);
        } else {        
            for(var i=start; i<=end; i+=step) {
                outputRange.push(i);    
            }
        }
        return outputRange;
    }
    // console.log(range(1, 10));

    var sum = function(range) {
        var sumOfArray = 0;
        for (var i=0; i<range.length; i++) {
            sumOfArray += range[i];
        }
        return sumOfArray;
    }
    // console.log(sum(range(1, 10)));

// arrayValue = ["A", "B", "C", "D", "E", "F", "G"];

    var reverseArray = function(start, end) {
        var outputArray = [];
        for (var i=Array.length-1; i>=0; i--) {
            outputArray.push(i);
        }
        return outputArray;
    }
    // console.log(reverseArray(1, 10));
    var reverseArrayInPlace = function(start, end) {
        var outputArray = [];
        start = end;
        end = start;
        for (var i=start; i<=end; i++){
            outputArray.push(i);
        }
        return outputArray;
    }
    console.log(reverseArray(["A", "B", "C", "D", "E", "F", "G"]));
    console.log(reverseArray(1, 10));
});










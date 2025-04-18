import { checkError, checkExpect, checkWithin, checkSatisfy, checkRange, test } from 'javascript-test-library';

function example1 (){
    throw new Error("This is an error message.");
}

let example2 = (x)=>{
    return ((y)=>{
        return 2*x-y;
    })(x);
}

let example3 = ()=>{
    return 2.001;
}

function even(x){
    return x%2 == 0;
}

function odd(x){
    return x%2 == 1;
}

//executeTest(false); // This will prevent the tests from running
//silenceTest(true); // This will prevent the tests from printing to the console
//executeTest("Not a bool"); // Should throw TypeError
//silenceTest("Not a bool"); // Should throw TypeError
//executeTest(true); // This will allow the tests to run
//silenceTest(false); // This will allow the tests to print to the console

//console.log(silenceTest()); // This should print false
//console.log(executeTest()); // This should print true

// Only need to pass functions as lambdas if they take arguments
checkError(example1, "This is an error message.");          // This should pass
checkError(example1, "This is not an error message.");      // This should fail
checkError(example1);                                       // This should pass
checkError(()=>example2(2));                                // This should fail
checkError(()=>example2(2), "This is an error message.");   // This should fail
checkExpect(()=>example2(2), 2);                            // This should pass
checkExpect(()=>example2(2), 3);                            // This should fail
checkSatisfy(()=>example2(2), even);                        // This should pass
checkSatisfy(()=>example2(2), odd);                         // This should fail
checkWithin(example3, 2, 0.001);                            // This should pass
checkWithin(example3, 2, 0.01);                             // This should pass
checkWithin(example3, 3, 0.001);                            // This should fail
checkWithin(()=>example2(2), "sup", 0.001)                  // This should throw TypeError
checkWithin(example2, 2, 0.001)                             // This should throw TypeError
checkRange(()=>example2(2), 0, 5);                          // This should pass
checkRange(()=>example2(2), 0, 1);                          // This should fail
checkRange(()=>example2(2), 3, 5);                          // This should fail

test();                                                     // This will run the tests
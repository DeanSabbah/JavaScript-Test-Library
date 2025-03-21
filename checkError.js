/**
 * This function checks if the functions throw an error. Also checks if the error message is correct (if provided).
 * @param {function} func - The function to test. Must be passed as a lambda function.
 * @param {string} message - The error message to check for. Optional.
 * @returns {void} - Adds a test to be evaluated.
 */
function checkError(func, message){
    tester_arr.push(()=>{
        try{
            if(typeof(func) !== "function"){
                throw new TypeError("Func is not a function");
            }
            if(typeof(message) !== "string" && typeof(message) !== "undefined"){
                throw new TypeError("message is not a string");
            }
        }
        catch(e){
            return [null, e];
        }
        if(typeof message == "undefined"){
            try{
                let result = func();
                return [3, result];
            }
            catch(e){
                if(e.message == "func is not a function"){
                    return [null, e];
                }
                return true;
            }
        }
        else{
            try{
                let result = func();
                return [5, result, message];
            }
            catch(e){
                if(e.message == message){
                    return true;
                }
                else{
                    if(e.message == "func is not a function"){
                        return [null, e];
                    }
                    return [4, e.message, message];
                }
            }
        }
    });
}

export {checkError}
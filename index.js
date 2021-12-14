const receivesAFunction = function (callback) {
    return callback();
  };

function returnsANamedFunction() {
    const namedFunction = function () {
        console.log("i got a name")
    };
    return namedFunction
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log("please give me a name")
    };
}
function test (then, expected){
    results.total++;
//insert function here!
    var result = location();
    if(result !== expected){
        results.bad++;
        console.log("Expected " + expected + ", but was " + result);
    }
}

var results = {
    total: 0,
    bad: 0
}

test("", "")
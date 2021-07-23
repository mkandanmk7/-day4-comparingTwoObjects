    var obj1 = { name: "Person 1", age:5 };
    var obj2 = { age:5, name: "Person 1" };

    //using json.stringify();
    console.log(JSON.stringify(obj1)===JSON.stringify(obj2));
    
    //expected: false  (order was changed)
    
    //using toString();

    console.log(Object.entries(obj1).toString()===Object.entries(obj2).toString()
    );
    // expected: false (order changed);

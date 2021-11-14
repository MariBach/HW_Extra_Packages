function calc(a, b, operation) {
    let operate = {
        add: "+",
        deduct: "-",
        multipl: "*",
        divis: "/"
    }
    let result;
    try {
        switch (operation) {
            case operate.add:
                if ((typeof a == 'number') && (typeof b == 'number')) {
                    result = a + b;
                }
                else {
                    throw 1;
                }
                    break;
            case operate.deduct:
                if ((typeof a == 'number') && (typeof b == 'number')) {
                    result = a - b;
                }
                else {
                    throw 1;
                }
                break;
            case operate.multipl:
                if ((typeof a == 'number') && (typeof b == 'number')) {
                    result = a * b;
                }
                else {
                    throw 1;
                }
                break;
            case operate.divis:
                if (b !== 0) {
                    if ((typeof a == 'number') && (typeof b == 'number')) {
                        result = a / b;
                    }
                    else {
                        throw 1;
                    }
                }
                else {
                    throw 0;
                }
                break;
            default:
               throw new Error("Error! Operation is not supported");
        }
        console.log(result);
        return (result);
    }
    catch (err) {
        if (err === 0) {
            console.log("Wrong operation - division by zero");
            return "Wrong operation - division by zero";
        }
        else if (err === 1) {
            console.log("Wrong data format. Please, input a number");
            return "Wrong data format. Please, input a number"
        }
        else if ((err != '+') && (err != '-') && (err != '*') && (err != '/')) {
            console.log('Math operation is not supported');
            return 'Math operation is not supported';
        }
        else {
           console.log('operation completed');
        }
    }    
}
export { calc }

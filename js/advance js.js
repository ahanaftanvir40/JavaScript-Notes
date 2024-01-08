let sleep = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(420)
        }, 3000);
    })
}


//IIFE - Immediately Invoke Function Expression 

(async function main() {
    let a = await sleep() //waits till it is finished
    console.log(a);
    //-----------------------
    let [x, y] = [1, 2, 3]
    console.log(x, y);

    //-------------------------
    //destructuring
    let [c, d, ...rest] = [1, 2, 3, 4, 5, 6, 7]
    console.log(c, d, rest); //rest will be an array

    //--------------------

    obj = {
        'e': 1,
        'f': 2,
        'g': 3
    }

    let { e, f, ...rem } = obj

    console.log(e, f, rem); //rem will be a sep dict

    //-----------------------------


    //spread opp

    function sum(l, m, n) {
        return l + m + n
    }

    let arr = [1, 2, 3]

    console.log(sum(arr[0], arr[1], arr[2])); //noob

    console.log(sum(...arr)); // we opened the array with '...' 

})()



//simulate getting data from a server


async function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(420)
        }, 3500);
    })
}

async function getD() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data);
}


async function main() {
    console.log('loading other things');

    let a = await getD()
    console.log(a);

    console.log('finished');
}

main()


// await fetch

//async means it will run in the background

// if i want to wait i add await before calling the async func
// we await in async func


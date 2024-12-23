// Задание 1  -----------------------------------------------------

setTimeout( ()=> {console.log('Привет, Мир!  / Задание 1')}, 2000 )



// Задание 2  -----------------------------------------------------

let date

let time = setInterval(()=>{
    date = new Date()
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
},1000)



// Задание 3  -----------------------------------------------------

setTimeout(()=>{
    clearInterval(time)
},5100)



// Задание 4  -----------------------------------------------------

const fetchData = new Promise((resolve, reject) => {
    let success
    setTimeout(()=>{
        success = true;
        if (success) {
            resolve("Данные получены!");
        } else {
            reject('Произошла ошибка.');
        }
    },3000)   
});

fetchData
.then( message=>console.log(message + "  / Задание 4"))



// Задание 5  -----------------------------------------------------

const fetchDataWithError = new Promise((resolve, reject) => {
    let success
    setTimeout(()=>{
        success = false;
        if (success) {
            resolve("Данные получены!");
        } else {
            reject('Ошибка загрузки!');
        }
    },2000)   
});

fetchDataWithError
.then( message=>console.log(message))
.catch(err=>console.log(err + "  / Задание 5"))



// Задание 6  -----------------------------------------------------

async function fetchDataAsync() {
    try {
      const response = await fetchData;
      console.log(response + "  / Задание 6");
    } catch (error) {
      console.log(error);
    }
}

fetchDataAsync(); 



// Задание 7  -----------------------------------------------------

async function fetchDataWithErrorAsync() {
    try {
      const response = await fetchDataWithError;
      console.log(response);
    } catch (error) {
      console.log(error + " / Задание 7");
    }
}

fetchDataWithErrorAsync(); 



// Задание 8  -----------------------------------------------------

async function taskSequence() {
    
    try {

        const task1Response = await new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve("task1 выполнен  / Задание 8");
            },1000) 
        });
        console.log(task1Response);
        console.time()      // Засикаем время между двумя промисами

        const task2Response = await new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve("task2 тоже выполнен  / Задание 8");
            },2000)
        })
        console.log(task2Response);
        console.timeEnd()   // Получаем 2 секунды, это говорит о том что
                            // промисы выполнялись последовательно
      
    } catch (error) {
        console.log("Ошибка: ", error);
    }
}

taskSequence(); 



// Задание 9  -----------------------------------------------------

let taskA = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("taskA выполнен");
    },2000) 
})

let taskB = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("taskB тоже выполнен");
    },3000)
})

Promise.all([taskA, taskB]).then(([task1Response, task2Response]) => {
    console.log(task1Response + ", " + task2Response + "  / Задание 9");
});



// Задание 10  -----------------------------------------------------

async function delayedMessage(message, delay) {
    let msg = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
    
    console.log(msg);
}

delayedMessage("Прошло 6 секунд  / Задание 10",6000);
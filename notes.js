// JS прототипно ориентированный


//..................................................................................................................
//СОРТИРОВКА МАССИВА С ЦИФРАМИ  
const arr = [2, 12, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
compareNum()


//..................................................................................................................
//ПЕРЕБОР МАССИВА 
const arr = [1, 2, 3, 6, 8];
arr.forEach(function(item, namber, arr){
    console.log(`${namber}: ${item} внутри массива ${arr}`);    
})


//..................................................................................................................
//СКОЛЬКО СВОЙСТВ В ОБЪЕКТЕ
const options = {
    name: "test",
    width: 1024,
    heigth: 1024,
    color: {
        border: "black",
        bg: 'red'
    },
};

console.log(Object.keys(options).length);

//..................................................................................................................
//ФИБОНАЧИ
function fib(number) {
    if (number < 0)
    return console.log("Ошибка, проверьте данные");

    if(typeof (number) !== 'number')
    return console.log('')

    let result = 0; // 2 
    let ferst = -1; // 1
    let second = 1; // 2
    let fibo = [];

    for (let i = 1; i <= number; i++) {
        result = ferst + second // 2
        ferst = second // 2
        second = result // 2
        fibo.push(result)
        }
        return console.log(fibo.join(' '))              
}
//................................................................
function fibonacci(n) {
    const sequence = [1, 2];
  
    for (let i = 2; i < n; i++) {
      const num = sequence[i - 1] + sequence[i - 2];
      sequence.push(num);
    }
  
    return sequence;
  }
  
  const n = 10;
  const fibSequence = fibonacci(n);
  console.log(fibSequence);



//..................................................................................................................
// ФАКТОРИАЛ В РЕКУРСИИ

function factorial(data) {
    if (typeof(data) !== 'number' || !Number.isInteger(data)) {
        console.log('Ошибочка');
    }

    if (data >= 1) {
        return data * factorial (data -1);
    } else {
        return 1
    }
}
console.log(factorial(5))



//..................................................................................................................
//КАКОЕ ВАШЕ КУПЕ
function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number'|| length < 0 || !Number.isInteger(length)) {
        return console.log("Ошибка. Проверьте правильность введенного номера места");
    }
    if (length === 0 || length > 36) {
        return console.log("Таких мест не существует");
    }

return console.log("Ваше купе: " + (Math.ceil(length / 4)));             
}

calculateVolumeAndArea(7);  


//..................................................................................................................
// РАБОТА С ОБЪЕКТАМИ
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }

    return str;
}

showProgrammingLangs(personalPlanPeter);

//..................................................................................................................
// Рекурсия 

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        },{
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],
        some: {

        }
    }
};

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length]
    } else {
        let total = [0 ,0];
        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

const result = getTotalProgressByRecursion(students)
console.log(result[0] / result[1]);


//...................................................................................
// Cколько вложенных
const firstDiv = document.querySelector('div')


function countNestedDivs(element) {
    if(element.children.length === 0) {
        return 0
    }

    let count = 0;

    for(let i = 0; i < element.children.length; i++){
        count++
        count += countNestedDivs(element.children[i])
    }
    return count
}
  

  const count = countNestedDivs(firstDiv);
  console.log(count);

// ФУНКЦИИ КОНСТРУКТОРЫ 

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`helo ${this.name}`)
    };
};
User.prototype.exit = function(name) {
    console.log(`Пользователь ${this.name} ушел`)
}

const Daniil = new User('Daniil', 29);
const Dinara = new User('Dinara', 30);
Daniil.hello();
Dinara.hello();
Daniil.exit();
console.log(Dinara);
console.log(Daniil);


// Контекст вызова This
// 1) Обычная функция: this = window, но если use strict - undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind
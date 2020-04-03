'use strict'

let money = +prompt("Ваш бюджет на месяц?", ""), 
	time = prompt("Введите дату в формате YYYY-MM-DD", "");


let	appData = {
		budget: money,
		timeData: time,
		expenses: {},
		optionalExpenses: {},
		income: [],
		savings: false
	};


for (let i = 0; i < 2; i++) {
	let q = prompt("Введите обязательную статью расходов в этом месяце", ""),
		u = prompt("Во сколько обойдется?", "");
		if ( (typeof(q)) === 'string' && (typeof(q)) != null && (typeof(u)) != null
			&& q != '' && u != '' && q.length < 50 ) {
			console.log('done');
			appData.expenses[q] = u;
		} else {
			console.log("ошибка");
			i--;
		}
	
};

// let i = 0;
// do {
// 	let q = prompt("Введите обязательную статью расходов в этом месяце", ""),
// 		u = prompt("Во сколько обойдется?", "");
// 		if ( (typeof(q)) === 'string' && (typeof(q)) != null && (typeof(u)) != null
// 			&& q != '' && u != '' && q.length < 50 ) {
// 			console.log('done');
// 			appData.expenses[q] = u;
// 		} else {
// 			console.log("ошибка");
// 			i--;
// 		}

// 	i++;

// }
// while (i < 2) {

// }

// while (i < 2){
// 	let q = prompt("Введите обязательную статью расходов в этом месяце", ""),
// 		u = prompt("Во сколько обойдется?", "");
// 		if ( (typeof(q)) === 'string' && (typeof(q)) != null && (typeof(u)) != null
// 			&& q != '' && u != '' && q.length < 50 ) {
// 			console.log('done');
// 			appData.expenses[q] = u;
// 		} else {
// 			console.log("ошибка");
// 			i--;
// 		}
// 	i++;
// }


appData["moneyPerDay"] = appData["budget"] / 30;

alert("Ежедневный бюджет: " + appData["moneyPerDay"]);

if (appData["moneyPerDay"] < 500) {
	console.log("Минимальный уровень достатка");
} else if (appData["moneyPerDay"] > 500 && appData["moneyPerDay"] < 3500) {
	console.log("Средний уровень достатка");
} else if (appData["moneyPerDay"] > 3500) {
	console.log("Высокий уровень достатка");
} else {
	console.log("Произошла ошибка");
}

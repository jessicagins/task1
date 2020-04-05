'use strict'

let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", "");
	time = prompt("Введите дату в формате YYYY-MM-DD", "");

	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", "");
	} 

}
start();


let	appData = {
		budget: money,
		timeData: time,
		expenses: {},
		optionalExpenses: {},
		income: [],
		savings: true
	};

function chooseExpenses() {
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
	
	}

}

chooseExpenses();


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




function checkSavings() {
	if (appData["savings"] == true) {
		let save = +prompt("Какова сумма накоплений?", ""),
			percent = +prompt("Под какой процент", "");

		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
	}
}
checkSavings();

function detectDayBudget() {
	appData["moneyPerDay"] = (appData["budget"] / 30).toFixed();
	alert("Ежедневный бюджет: " + appData["moneyPerDay"]);
}
// detectDayBudget();

function detectLevel() {
		if (appData["moneyPerDay"] < 500) {
		console.log("Минимальный уровень достатка");
	} else if (appData["moneyPerDay"] > 500 && appData["moneyPerDay"] < 3500) {
		console.log("Средний уровень достатка");
	} else if (appData["moneyPerDay"] > 3500) {
		console.log("Высокий уровень достатка");
	} else {
		console.log("Произошла ошибка");
	}
}
// detectLevel();

function chooseOptExpenses() {
	for (let i = 1; i < 4; i++) {
		let a = prompt("Статья необязательных расходов?", "");
		appData.optionalExpenses[i] = a;

	}	
}







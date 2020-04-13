'use strict'

let money, time;

function start() {
	money = +prompt("Your budget for a month", "");
	time = prompt("Write the date in the format of YYYY-MM-DD", "");

	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Your budget for a month?", "");
	} 

}
start();


let	appData = {
		budget: money,
		timeData: time,
		expenses: {},
		optionalExpenses: {},
		income: [],
		savings: true,
		chooseExpenses: function() {
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
		},
		detectDayBudget: function() {
			appData["moneyPerDay"] = (appData["budget"] / 30).toFixed();
			alert("Ежедневный бюджет: " + appData["moneyPerDay"]);
		},
		detectLevel: function() {
			if (appData["moneyPerDay"] < 500) {
				console.log("Минимальный уровень достатка");
			} else if (appData["moneyPerDay"] > 500 && appData["moneyPerDay"] < 3500) {
				console.log("Средний уровень достатка");
			} else if (appData["moneyPerDay"] > 3500) {
				console.log("Высокий уровень достатка");
			} else {
				console.log("Произошла ошибка");
			}
		},
		checkSavings: function() {
			if (appData["savings"] == true) {
				let save = +prompt("Какова сумма накоплений?", ""),
					percent = +prompt("Под какой процент", "");

				appData.monthIncome = save/100/12*percent;
				alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
			}
		},
		chooseOptExpenses: function() {
			for (let i = 1; i < 4; i++) {
				let a = prompt("Статья необязательных расходов?", "");
				appData.optionalExpenses[i] = a;

			}	
		},
		chooseIncome: function() {
			let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
				
			if ((typeof(items)) != 'string' || (typeof(items)) == "" || (typeof(items)) == null) {
				console.log("something's wrong");
			} else {
				appData.income = items.split(', ');
				appData.income.push(prompt("Может что-то ещё?", ""));
				appData.income.sort();
			}
			appData.income.forEach(function(item, i){
				alert("Способы доп. заработка: " + (i+1) + " - " + item)
			});
				
		}
	};

	for (let key in appData) {
		console.log("Наша программа включает в себя данные: " + key + ": " + appData[key]);
	};











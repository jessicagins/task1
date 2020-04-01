'use strict'

let money = prompt("Ваш бюджет на месяц?", ""), 
	time = prompt("Введите дату в формате YYYY-MM-DD", "");


let	appData = {
		budget: money,
		timeData: time,
		expenses: {},
		optionalExpenses: {},
		income: [],
		savings: false
	};

let qu1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
	qu2 = prompt("Во сколько обойдется?", ""); 

appData["expenses"].qu1 = qu2;

console.log(alert(appData["budget"]/30));

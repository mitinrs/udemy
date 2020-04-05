let money = prompt('Ваш бюджет на месяц'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget:money,
    timeData :time,
    expenses: {},
    optionalExpenses:{},
    income:[],
    savings:false
};
let first1=prompt('Введите обязательную статью расходов в этом месяце'),
    second1=prompt('Во сколько обойдётся'),
    first2=prompt('Введите обязательную статью расходов в этом месяце'),
    second2=prompt('Во сколько обойдётся');

// appData.expenses={ first:second};
appData.expenses[first1]=second1;
appData.expenses[first2]=second2;

alert(appData.budget/30);
console.log(appData);


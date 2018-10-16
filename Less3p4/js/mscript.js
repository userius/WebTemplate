let money, apples, apple1, breads, bread1;
money  = parseFloat(prompt('сколько у вас с собой есть денег?'));
apples = parseFloat(prompt('сколько вы купили яблок?'));
breads = parseFloat(prompt('сколько вы купили батонов?'));
apple1 = parseFloat(prompt('сколько стоит одно яблоко?'));
bread1 = parseFloat(prompt('сколько стоит один батон хлеба?'));
document.body.innerHTML = Boolean(money >= (apples*apple1 + breads*bread1));
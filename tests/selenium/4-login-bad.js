const {Builder, By, Key, until} = require('selenium-webdriver');
require("chromedriver")



var email = ""
var password=""


;(async function example() {
let driver = await new Builder().forBrowser('chrome').build();
try {
//Pagina que abre selenium web driver
await driver.get('http://localhost:5000/users/login');
//Obtenemos el nombre de los inputs y les asignamos un valor
await driver.findElement(By.name('email')).sendKeys(email, Key.RETURN);
await driver.findElement(By.name('password')).sendKeys(password, Key.RETURN);

//Definimos que hacer cuando termina las pruebas
} finally {
console.log("prueba 4 realizada")

}
})();
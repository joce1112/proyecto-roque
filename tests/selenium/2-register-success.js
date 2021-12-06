const {Builder, By, Key, until} = require('selenium-webdriver');
require("chromedriver")


var nombre = "Jocelyn"
var email = "joce@gmail.com"
var password="123456Jo"
var password2="123456Jo"

;(async function example() {
let driver = await new Builder().forBrowser('chrome').build();
try {
//Pagina que abre selenium web driver
await driver.get('http://localhost:5000/users/register');
//Obtenemos el nombre de los inputs y les asignamos un valor
await driver.findElement(By.name('name')).sendKeys(nombre, Key.RETURN);
await driver.findElement(By.name('email')).sendKeys(email, Key.RETURN);
await driver.findElement(By.name('password')).sendKeys(password, Key.RETURN);
await driver.findElement(By.name('password2')).sendKeys(password2, Key.RETURN);

//Definimos que hacer cuando termina las pruebas
} finally {
console.log("prueba 2 realizada")

}
})();
const {Builder, By, Key, until} = require('selenium-webdriver');
require("chromedriver")



//var email = "yajahirajocelynguevarasanchez@gmail.com"
//var password="joselynsanchez"


;(async function example() {
let driver = await new Builder().forBrowser('chrome').build();
try {
//Pagina que abre selenium web driver
 driver.get('http://localhost:5000/users/login');
//Obtenemos el nombre de los inputs y les asignamos un valor
let email = driver.findElement(By.name('email'))
let password = driver.findElement(By.name('password'))
await email.sendKeys('joce@gmail.com')
await password.sendKeys('123456Jo')

await driver.findElement(By.name('ingresar')).click();


//Verify the page title and print it

var title=await driver.getTitle();

console.log('Title is:',title);


//Definimos que hacer cuando termina las pruebas
} finally {
console.log("prueba 5 realizada")

}
})();
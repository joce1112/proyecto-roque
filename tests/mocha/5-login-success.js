var assert = require("assert");
//var expect = require("expec")
const {By, Key, Builder, WebElement} = require("selenium-webdriver");
require("chromedriver")

//definimos el tipo de prueba que realizaremos
describe('Login de usuario success con mocha', function (){

    //Definimos con que navegador va abrir chrome
    let driver= new Builder().forBrowser("chrome").build();

    //hacemos el proceso de la prueba
    before(async function(){

       //Pagina que abre selenium web driver
 driver.get('http://localhost:5000/users/login');
 //Obtenemos el nombre de los inputs y les asignamos un valor
 let email = driver.findElement(By.name('email'))
 let password = driver.findElement(By.name('password'))
 await email.sendKeys('joce@gmail.com')
 await password.sendKeys('123456Jo')
 
 await driver.findElement(By.name('ingresar')).click();
 

    });
//despues del proceso finalizamos con un mensaje de termino
    after(function(){
          console.log('termino')
        //return driver.quit();

    });
//Resultaos de la prueba
    it('resolves', (done) => {
        //this.timeout(20000);

        driver.findElement(By.id("ingresar")).click().then((res) => {
            console.log(res);
            driver.findElement(By.name("res")).getAttribute("value").then((res)=>{
                console.log(res)
                assert.equal(res,200,"Registrado")

            })
      console.log("funciono de manera correcta")

            //expect(res.statusCode).equal(200);
            done();
        }).catch(done);
     });
    })

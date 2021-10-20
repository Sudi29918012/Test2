const BasePage = require('./base.page')

class LoginPage extends BasePage {
    get userNameTextBox () { return $('#username')}
    get passwordTextBox () { return $('#password')}
    get loginButton() { return $('button[type="subnmit"]')}

    get loginPageElement () { return $('div[class="example"] h2') }
    get messageElement () { return $('#flash')}

    open() {
        super.open ('http://automationpractice.com/login')
    }
}

module.exports = new LoginPage();
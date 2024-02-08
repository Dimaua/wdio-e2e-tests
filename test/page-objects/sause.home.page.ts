
import Page from "./page"

class HomePage extends Page {
    constructor() {
        super()
    }

    get usernameInput() { return $(`#user-name`) }
    get passwordInput() { return $(`#password`) }
    get loginBtn() { return $(`#login-button`) }

    async enterUsername(username: string) {
        if (!username) throw Error(`Given name is not valid`)
        username = username.trim();
        await this.typeInto(await this.usernameInput, username)
    }

    async enterPassword(password: string) {
        if (!password) throw Error(`Given password is not valid`)
        password = password.trim();
        await this.typeInto(await this.passwordInput, password)
    }
    async clickLoginBtn() {
        await this.click(await this.loginBtn)
    }

    async loginToSauseApp(username: string, password: string) {
        await this.enterUsername(username)
        await this.enterPassword(password)
        await this.clickLoginBtn()
    }

}

export default new HomePage();
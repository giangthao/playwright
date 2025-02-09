import { Locator, Page } from "@playwright/test";

export class LoginPage {
  page: Page;
  usernameTextbox: Locator;
  passwordTextbox: Locator;
  loginButton: Locator;

  constructor(page) {
    this.page = page;
    this.usernameTextbox = this.page.getByRole("textbox", { name: "Username" });
    this.passwordTextbox = this.page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: " Login" });
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameTextbox.fill(username);
    await this.passwordTextbox.fill(password);
    await this.loginButton.click();
  }

  async goToLoginPage(): Promise<void> {
    await this.page.goto("https://the-internet.herokuapp.com/login");
  }
}

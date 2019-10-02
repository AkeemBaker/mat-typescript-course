import { Given, setDefaultTimeout, Then, When } from "cucumber";

setDefaultTimeout(60 * 1000);

import { AddProductPage } from "../page_objects/add-product.page";
import { HomePage } from "../page_objects/home.page";
import { ViewProductPage } from "../page_objects/view-product.page";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const homePage: HomePage = new HomePage();
const addProductPage: AddProductPage = new AddProductPage();
const viewProductPage: ViewProductPage = new ViewProductPage();

Given("a Product doesn't exist", async function(dataTable) {
    const arrayOfProducts = dataTable.hashes();
    this.product = arrayOfProducts[0];

    while (await homePage.findProductsInTable(this.product).count() > 0)
    {
        homePage.findProductsInTable(this.product).first().click();
        viewProductPage.deleteButton.click();
    }

    return expect(homePage.findProductInTable(this.product).isPresent()).to.eventually.be.false;
    });

When("I add the Product", function() {
    homePage.addProductButton.click();

    addProductPage.productNameField.sendKeys(this.product.name);
    addProductPage.productDescriptionField.sendKeys(this.product.description);
    addProductPage.productPriceField.sendKeys(this.product.price);

    return addProductPage.submitButtonField.click();
  });

Then("The Product is created", function() {
    return expect(viewProductPage.productName(this.product).isPresent()).to.eventually.be.true;
  });

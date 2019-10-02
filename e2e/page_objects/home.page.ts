import { $, by, element } from "protractor";
export class HomePage
{
    public addProductButton = $(".mat-flat-button.mat-primary");

    public findProductInTable = (product: myLib.Product) => 
    {
        return element(by.cssContainingText(".mat-cell", product.name));
    }

    public findProductsInTable = (product: myLib.Product) => 
    {
        return element.all(by.cssContainingText(".mat-cell", product.name));
    }
}

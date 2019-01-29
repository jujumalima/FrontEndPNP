import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

import { CustomerModule } from './customer/customer.module'
import { AisleModModule } from './aisle-mod/aisle-mod.module';
import { ProductModModule } from './product-mod/product-mod.module';
import { ItemsModModule } from './items-mod/items-mod.module';

import { from } from 'rxjs';
import { PaymentModModule } from './payment-mod/payment-mod.module';
import { CartModModule } from './cart-mod/cart-mod.module';
import { DeliveryModModule } from './delivery-mod/delivery-mod.module';

@Injectable({
  providedIn: 'root'
})
export class PicknpayService {

  private _url: string = "http://localhost:8080/customers/";
  private _aisle: string = "http://localhost:8080/aisle/";
  private _product: string = "http://localhost:8080/product/";
  private _item: string = "http://localhost:8080/item/";
  private _payment: string = "http://localhost:8080/payment/";
  private _cart: string = "http://localhost:8080/cart/";
  private _region: string = "http://localhost:8080/region/";
  private _store: string = "http://localhost:8080/store/";
  private _delivery: string = "http://localhost:8080/delivery/";

  constructor(private _http: Http) { }

  setUser(customer: CustomerModule) {
    sessionStorage.setItem("user", JSON.stringify(customer));
  }

  getUser() {
    return JSON.parse(sessionStorage.getItem("user"));
  }

  endUser() {
    this.removeRef();
    this.removegetItemAdded();
    this.removeAisle();
    this.removeProduct();
    this.removeCartI();
    this.removeTotalCost();
    this.removeTotItems();
    this.remove1Item();
    this.removeTempCart();
    this.removeDelivery();
    sessionStorage.removeItem("user");
  }

  /*Customer service*/
  getCustomers() {
    return this._http.get(this._url);
  }

  getCustomerLogin(email: string, password: string) {
    return this._http.get(this._url + "/login/" + email + "/" + password).pipe(map(this.exractData));
  }

  private exractData(res: Response) {
    let body = res.json();
    return body;
  }

  postCustomer(customers: CustomerModule) {
    return this._http.post(this._url, customers);
  }

  /*Aisle Service*/
  getAisle() {
    return this._http.get(this._aisle);
  }

  setAaisle(aisleMod: AisleModModule) {
    localStorage.setItem("aisle", JSON.stringify(aisleMod));
  }

  getAaisle() {
    return JSON.parse(localStorage.getItem("aisle"));
  }

  removeAisle() {
    localStorage.removeItem("aisle");
  }

  /*Product Service*/
  getProductByFk(fk: number) {
    return this._http.get(this._product + "/fk/" + fk);
  }

  getProductData() {
    return this._http.get(this._product);
  }

  setProduct(prodMod: ProductModModule) {
    localStorage.setItem("prod", JSON.stringify(prodMod));
  }
  getProduct() {
    return JSON.parse(localStorage.getItem("prod"));
  }
  removeProduct() {
    localStorage.removeItem("prod");
  }

  /*items service*/
  getItemByFk(fk: number) {
    return this._http.get(this._item + "/fk/" + fk);
  }

  getItem(id: number) {
    return this._http.get(this._item + id);
  }

  getItems() {
    return this._http.get(this._item);
  }

  postItem(item: ItemsModModule) {
    return this._http.post(this._item, item);
  }

  set1Item(item: ItemsModModule) {
    localStorage.setItem("1Item", JSON.stringify(item));
  }

  get1Item() {
    return localStorage.getItem("1Item");
  }

  remove1Item() {
    localStorage.removeItem("1Item");
  }

  deletItem(id: number){
    return this._http.delete(this._item + "/" + id);
  }

  addToTempCart(item: ItemsModModule) {
    return this._http.post(this._item + "/temp", item).pipe(map(this.exractData));
  }

  getTempCart() {
    return this._http.get(this._item + "/temp");
  }

  setCartI(numI: number) {
    localStorage.setItem("numI", JSON.stringify(numI));
  }

  getCartI() {
    return JSON.parse(localStorage.getItem("numI"));
  }

  removeCartI() {
    localStorage.removeItem("numI");
  }

  updateCart(item: ItemsModModule) {
    return this._http.post(this._item + "/temp/update", item).pipe(map(this.exractData));
  }
  /*cart service*/
  removeItemfromCart(indx: number) {
    return this._http.delete(this._item + "/temp/" + indx);
  }

  removeTempCart() {
    return this._http.delete(this._item);

  }

  /*Item add*/
  setItemAdded(str: string) {
    localStorage.setItem("addItem", "Item " + str + " has been added");
  }

  getItemAdded() {
    return localStorage.getItem("addItem");
  }

  removegetItemAdded() {
    localStorage.removeItem("addItem");
  }

  /*order*/
  setTotalCost(totCost: Number) {
    localStorage.setItem("totalCost", JSON.stringify(totCost));
  }

  getTotalCost() {
    return localStorage.getItem("totalCost");
  }

  removeTotalCost() {
    localStorage.removeItem("totalCost");
  }

  /*Payment*/
  getPayments() {
    return this._http.get(this._payment);
  }

  setPayment(payment: PaymentModModule) {
    return this._http.post(this._payment, payment);
  }

  deletePayment(id) {
    return this._http.delete(this._payment + "/" + id);
  }

  /*cart*/
  saveCart(cart: CartModModule) {
    return this._http.post(this._cart, cart);
  }

  getCart() {
    return this._http.get(this._cart);
  }

  /*reference number*/
  setRef(num: number) {
    sessionStorage.setItem("refNum", JSON.stringify(num));
  }

  getRef() {
    return sessionStorage.getItem("refNum");
  }

  removeRef() {
    sessionStorage.removeItem("refNum");
  }

  setTotItems(num: number) {
    sessionStorage.setItem("totItems", JSON.stringify(num));
  }

  getTotItems(){
    return sessionStorage.getItem("totItems");
  }

  removeTotItems() {
    sessionStorage.removeItem("totItems");
  }

  /*Region*/
  getRegion() {
    return this._http.get(this._region);
  }

  /*store*/
  getStore() {
    return this._http.get(this._store);
  }

  getStoreByFk(fk: number) {
    return this._http.get(this._store + "fk/" + fk);
  }

  /*forget password*/
  rstPassword(email: string) {
    return this._http.get(this._url + "resetPassword/" + email);
  }

  /*delivery*/
  setDelivery(delivery: DeliveryModModule){
    localStorage.setItem("del1", JSON.stringify(delivery));
  }

  getDelivery() {
    return JSON.parse(localStorage.getItem("del1"));
  }

  removeDelivery() {
    localStorage.removeItem("del1");
  }

  getAllDeliveries() {
    return this._http.get(this._delivery)
  }

  postDelivery(delivery: DeliveryModModule) {
    return this._http.post(this._delivery, delivery)
  }

  /*payment*/
  proofOfPayment(email: string, message: string) {
    return this._http.get(this._payment + "proof/" + email + "/" + message);
  }

  /*items*/
  putItem(id: number, item: ItemsModModule) {
    return this._http.put(this._item + id, item);
  }
}
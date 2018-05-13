import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage {

  product: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  ngOnInit() {
    this.product = this.navParams.get('product');
  }

  onGoToRoot() {
    this.navCtrl.popToRoot();
  }

}

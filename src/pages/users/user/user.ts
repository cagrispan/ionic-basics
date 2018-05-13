import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage implements OnInit {
  name: string;

  constructor(
    private navParams: NavParams
  ) { }

  ngOnInit(): void {
    this.name = this.navParams.get('name');
  }

  ionViewCanEnter(): boolean | Promise<void> {
    console.log('ionViewCanEnter');
    const random = Math.random();
    return random > 0.5;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewCanLeave(): boolean | Promise<any> {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
        console.log('ionViewCanLeave');
      }, 1000);
    });
    return promise;
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }
}

import { MainService } from './../../service/main.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Anotacao } from '../../model/anotacao.model';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private mainService: MainService) {
     }

  ionViewDidLoad() {
    this.mainService.findAll().subscribe(
      res => {
        console.table(res);
      },
      error => {
        console.log('Error: ', error);
      })
  }

}

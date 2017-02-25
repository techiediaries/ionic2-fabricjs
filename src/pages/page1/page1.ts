import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

declare var fabric: any;

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 implements OnInit {
  canvas : any ;

  constructor(public navCtrl: NavController) {
     console.log("Fabric is working : " + fabric.version);
    
  }
  ngOnInit() {

     this.canvas = new fabric.Canvas("c");
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage implements OnInit {

  favorito = false;

  onClick(){
    this.favorito = !this.favorito;
  }

  ngOnInit() {
  }

  constructor() { }
}

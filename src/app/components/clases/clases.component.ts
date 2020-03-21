import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'})
export class ClasesComponent implements OnInit {

  alerta = 'alert-danger';

  propiedades = new Propiedades();

  loading = false;

  constructor() { }

  ngOnInit(): void {
  }

  ejecutar() {
    this.loading = true;

    setTimeout( () => {
      this.loading = false;
    }, 3000);
  }

}

export class Propiedades {
  danger: boolean;

  constructor() {}
}

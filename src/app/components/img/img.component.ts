import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent  implements OnInit, OnChanges, AfterViewInit, OnDestroy{

  img: string = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img => ', this.img);

  }
  @Input() alt: string = '';

  @Output() loaded = new EventEmitter<string>();
  imageDefault = 'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg';
  counter = 0;
  counterFn: number | undefined;

  // antes del render
  // no correr cosas de forma asincrona
  // solo se crea una vez
  constructor() {

    console.log('constructor', 'imgValue => ', this.img);

  }

  ngOnChanges(changes: SimpleChanges) {

    // before - during render
    // evaluando cambios en los inputs, las veces que se actualice el valor
    console.log('cngOnChanges', 'imgValue => ', this.img);
    console.log('changes', changes);



  }
  ngOnInit(): void {
    // before render
    // correr cosas asincronas async - fetch
    // corre solo una vez
    console.log('cngOnInit', 'imgValue => ', this.img);
    this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.log('run counter');

    }, 1000);

  }

  ngAfterViewInit(): void {
    // after render
    // trabajar con componentes hijos
    console.log('ngAfterViewInit');

  }

  ngOnDestroy(): void {
    // delete
    console.log('ngOnDestroy');
    window.clearInterval(this.counterFn);

  }
  imgError() {
    this.img = this.imageDefault;
  }
  imgLoaded() {
    console.log("Image Cargada");
    this.loaded.emit(this.img);

  }

}

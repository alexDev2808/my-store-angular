import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent  implements OnInit{

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = 'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg';

  constructor() {}

  ngOnInit(): void {

  }

  imgError() {
    this.img = this.imageDefault;
  }
  imgLoaded() {
    console.log("Image Cargada");
    this.loaded.emit(this.img);

  }

}

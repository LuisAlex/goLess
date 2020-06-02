import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  ajustes: Ajustes = {
  temaUrl : 'assets/css/colors/default-dark.css',
  tema : 'default'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.getAdjust();
  }

  saveAdjust(){
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  getAdjust(){
    if (localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.applyAdjust(this.ajustes.tema);
    } else {
      this.applyAdjust(this.ajustes.tema);
    }
  }

  applyAdjust(tema){
    const url = `assets/css/colors/${ tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url );
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.saveAdjust();
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}

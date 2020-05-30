import {Component, Inject, OnInit} from '@angular/core';
import { DOCUMENT} from '@angular/common';
import {SettingsService} from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document,
              public _ajustes: SettingsService) { }

  ngOnInit(): void {
  }

  cambiarColor(tema: string, link: any) {
    this.checking(link);
    this._ajustes.applyAdjust(tema);
  }

  checking(link: any){
    const selector: any = document.getElementsByClassName('selector');
    for ( const ref of selector){
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }
}

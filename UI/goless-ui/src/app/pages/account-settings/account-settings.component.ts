import {Component, Inject, OnInit} from '@angular/core';
import { DOCUMENT} from '@angular/common';
import {SettingsService} from '../../services/settings/settings.service';

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
    this.setWorkingStyle();
  }

  changeTheme(tema: string, link: any) {
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

  setWorkingStyle(){
    const selector: any = document.getElementsByClassName('selector');
    const tema = this._ajustes.ajustes.tema;
    for ( const ref of selector){
      if (ref.getAttribute('data-theme') === tema){
        ref.classList.add('working');
        break;
      }
    }
  }
}

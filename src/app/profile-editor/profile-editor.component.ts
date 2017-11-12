import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: 'profile-editor.component.html',
  styleUrls: ['profile-editor.component.styl']
})
export class ProfileEditorComponent implements OnInit {
  public title: string = 'Настройки профиля';

  public myForm: FormGroup = new FormGroup({

    'userName': new FormControl('', Validators.required),
    'userEmail': new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')] ),
    'userSubmit': new FormControl('сохранить изменения')
  });

  submit(readyToSubmit){
    if(readyToSubmit){
      console.log('Форма валидна');
    } else {
      console.log('Форма невалидна');
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

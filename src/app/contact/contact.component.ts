import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  Name: string='';
  Email: string='';
  Message: string='';
  response: string='';


  ngOnInit() {

  }
  
  submitForm() {
    const form = document.getElementById('google') as HTMLFormElement;
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxRwaFPohbowy_G8l_wCYkA1OeoD7Frl8SOz_p4bx6F2ZkpC2fR55zvaYT6oF4b8HG2/exec'

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => this.response="Message sent!")
      .catch(error => this.response="Message failed.")
  }

}

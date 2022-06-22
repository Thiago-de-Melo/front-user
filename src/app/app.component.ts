import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppService } from './app-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private service: AppService) { }

  idHtml: string = "";
  id: string = "";
  username: string = "";
  password: string = "";
  is_enabled: string = "";
  register_date: string = "";
  name: string = "";
  surname: string = "";
  email: string = "";
  phone: string = "";
  caminhoUrl: string = "";
  validaCampo: boolean = false;
  
  ngOnInit(): void {  }

  pegaListaUsuario() {
    if(this.name) {
      this.caminhoUrl = "/user/nome/" + this.name;
      this.validaCampo = true;
    }
    if(this.username) {
      this.caminhoUrl = "/user/username/" + this.username;      
      this.validaCampo = true;
    }
    if(this.email) {
      this.caminhoUrl = "/user/email/" + this.email;      
      this.validaCampo = true;
    }    
    debugger
    this.email = "";
    this.username ="";
    this.name = "";
    this.service.getUser(this.caminhoUrl).subscribe(res => { 
      this.id = res.id;
      this.username = res.username;
      this.password = res.password;
      this.is_enabled = res.is_enabled;
      this.register_date = res.register_data;
      this.name = res.name;
      this.surname = res.surname;
      this.email = res.email;
      this.phone = res.phon;
    })
  }

}
function moment() {
  throw new Error('Function not implemented.');
}


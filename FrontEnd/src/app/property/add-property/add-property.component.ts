import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form')addPropertyForm:NgForm;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onBAck(){
    this.router.navigate(['/']);
  }

  onSubmit(){
console.log(this.addPropertyForm);
  }
}

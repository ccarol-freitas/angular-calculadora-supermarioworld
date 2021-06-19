import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  btns = ['C', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', "", 0, "", '='] as any;
  display = '';

  constructor() { }

  calc($event: any) {
    let btn = $event.srcElement.innerText;
    console.log(btn)
    if (btn === '=') {
      this.display = eval(this.display);
    } else if (btn === 'C') {
      this.display = ''
    } else {
      this.display += btn;
    }
  }
  

  ngOnInit(): void {
    
  }
}




import { StorkService } from './../stork.service';
import { Component, OnInit } from '@angular/core';
import { Stork } from './../storks';

@Component({
  selector: 'app-add-stork',
  templateUrl: './add-stork.component.html',
  styleUrls: ['./add-stork.component.css']
})
export class AddStorkComponent implements OnInit {

  data: any[] = [];

  constructor(
    private storkService: StorkService
  ) { }

  ngOnInit(): void {
  }

  add(code: string, name: string, size: any, price: any): void {
    code = code.trim() ,name = name.trim(), size = size, price = price;

    if (!code   && !name && !size && !price ) { 
      return; 
    }
    this.storkService.addStork({code, name, size, price } as Stork)
      .subscribe(stork => {
        this.data.push(stork);
      });
  }

  


}

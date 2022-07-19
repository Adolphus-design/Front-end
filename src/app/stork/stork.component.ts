import { Stork } from './../storks';
import { StorkService } from './../stork.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-stork',
  templateUrl: './stork.component.html',
  styleUrls: ['./stork.component.css']
})
export class StorkComponent implements OnInit {


  //stork: Stork[] = []
  data: any[] = [];
  constructor(
    private storkService: StorkService
  ) { }

  ngOnInit(): void {
    this.getStork()
  }


  getStork(){
   return this.storkService.getStork()
         .subscribe(stork => {this.data = stork;
            console.log(this.data);
        });
}




}

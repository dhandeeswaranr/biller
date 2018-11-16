import { Component, OnInit } from '@angular/core';
import { CpanelConnectionsService} from '../service/cpanel-connections.service';
import { ItemModel} from '../models/cpanel.model';
import {PageEvent} from '@angular/material';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  displayedColumns: string[] = ['itemName', 'action'];
  

  constructor(private cPanelService:CpanelConnectionsService) { }

  getData:ItemModel[]=[];

  ngOnInit() {
    this.loadService();
  }
  obs:any;
  loadService(){
     this.obs = this.cPanelService.getItemData();
    this.obs.subscribe((res) => {
      console.log(res);
      this.getData = res.json(); 
    })
  }
  del(event){
    console.log("del")
    this.cPanelService.delData(event).subscribe(() =>
   
    {
      setTimeout(()=>{  
        
        this.loadService();
   
         },2000);
     })
    
  }
iname;
  add(){
   /* this.getData.push({
      itemName:'dd', itemQuan:4 , pricePerItem:5
    })*/

    let custom = new ItemModel();
    custom.itemName = this.iname;
    custom.itemQuan = 3;
    custom.pricePerItem = 2;

  }
}

export interface billItems {
  index:number;
  itemName:string;
  itemPrice:number;
  itemQuan:number;
  Gst:number;
  action:any;
}
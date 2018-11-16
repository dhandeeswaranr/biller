import { Component, OnInit } from '@angular/core';
import { CpanelConnectionsService} from '../service/cpanel-connections.service'
import { first } from 'rxjs/operators';
import { ItemModel} from '../models/cpanel.model';
import { from, Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'cPanel',
  templateUrl: './c-panel.component.html',
  styleUrls: ['./c-panel.component.scss']
})
export class CPanelComponent implements OnInit {

  getData:ItemModel[]=[];
  itemName:string;
   datapost:ItemModel[];
  itemData = new ItemModel();
getValues:any;
  itemform:FormGroup;
  errMsg:any;
  errMsgQuan:any;
//getData:any;
  constructor(private cPanelService:CpanelConnectionsService,  private formBuilder: FormBuilder,) {   }

  ngOnInit() {
    this.itemform = this.formBuilder.group({
      iname:['', Validators.required],
      iQuan:['', Validators.required],
      iprice:['', Validators.required]
    })
   this.loadService();

  
  }
//obs[]:Observable<any>
obs:any;
  loadService(){
     this.obs = this.cPanelService.getItemData();
    this.obs.subscribe((res) => {
      //console.log("res" +res);

      
      this.getData = res.json(); 
    
      
    })
     
  
    console.log("obs")
   
  }

  tota(data){
    let tot = 0;
    data.forEach((d) => {
      tot += parseInt(this.getValues.iQuan, 10)
    });
  //console.log("tot" +JSON.stringify(this.getValues.itemQuan))
    return tot;
  }
  
  
 // name:string;
  //iQuan:number;
  //iprice:number;

data:any;
valida(event){
  console.log(this.getValues.iname.length);
}

tot(event){
  console.log(this.getValues.iQuan);
}

addItem(){
  this.getValues = this.itemform.value;
  console.log(this.getValues);
 console.log(this.getValues.iname.length);
 if(this.getValues.iname.length <= 0 || this.getValues.iQuan.length <= 0 || this.getValues.iprice.length <= 0 ){
  this.errMsg ="*Please fill the field";
 }
  else{
  let body = JSON.stringify({
    'itemName':this.getValues.iname,
    'itemQuan':this.getValues.iQuan,
    'pricePerItem':this.getValues.iprice
  });

  this.cPanelService.postItemData(body).subscribe(data => {
    this.data = data
    setTimeout(()=>{  
        
     this.loadService();

      },2000);
  })
 }
 this.tot(event);
}
}

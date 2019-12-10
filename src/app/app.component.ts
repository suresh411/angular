import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cart';
  status=true;
  
name="";
price:number=0;
  fruits=[{name:"apple", price:100},
  {name:"orange", price:60},
]

showhidebutton(){
     this.status=!this.status;
//(or)
    // if(this.status===true){
    //   this.status=false
    // }else{
    //   this.status=true
    // }
    
    this.fruits.push({
name:this.name,
price:this.price,

});
   

}



 

}

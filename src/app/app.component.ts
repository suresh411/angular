import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cart';
  status=true;
  username="";
  names=['suresh', 'sekhar']

  

  showhidebutton(){
     this.status=!this.status;
//(or)
    // if(this.status===true){
    //   this.status=false
    // }else{
    //   this.status=true
    // }
    
    this.names.push(this.username);
  }



 

}

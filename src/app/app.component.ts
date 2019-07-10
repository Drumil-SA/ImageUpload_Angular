import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public imagePath;
  imgURL: any;
  public message: string;
  url = '';
 
  // preview(files) {
  //   if (files.length === 0)
  //     return;
    
  //   var mimeType = files[0].type;
  //   if (mimeType.match(/image\/*/) == null) {
  //     this.message = "Only images are supported.";
  //     return;
  //   }
 
  //   var reader = new FileReader();
  //   this.imagePath = files;
  //   reader.readAsDataURL(files[0]); 
  //   reader.onload = (_event) => { 
  //     this.imgURL = reader.result; 
  //   }
  // }

    onSelectFile(event) {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
  
        reader.readAsDataURL(event.target.files[0]);
  
        reader.onload = (event:any) => {
          this.url = event.target.result;
        }
      }
    }

    // constructor(){
    //   //  setInterval(() => { console.log(this.image1)},3000);
    // }
    // getImage(event){
    //     console.log(event);
    //     console.log(event.target.files);
    //     console.log(event.target.result);
    // }

    
}

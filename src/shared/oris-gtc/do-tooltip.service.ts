import { Injectable,  ElementRef, Renderer2   } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DoTooltipService {

  public spanHTML: any;

  constructor(public el: ElementRef, public renderer: Renderer2) { }

  public mouseEnterMouseLeave(mcCible:any,result:any,sMnemonic:string)   {
      let sLabel=result.label;
      sLabel+=" ["+sMnemonic+"]";
      sLabel+=" [valeur="+`${result.asNumber()}`+"]";
      mcCible.addEventListener("mouseover", this.fl_MouseOverHandler.bind(this,mcCible,sLabel));  
      mcCible.addEventListener("mouseout", this.fl_mouseOutHandler.bind(this)); 
    }

    public fl_MouseOverHandler(mcCible:any,sLabel:string)
    {
      this.hide();  
      this.show(mcCible,sLabel); 

    }
    public fl_mouseOutHandler()
    {
      this.hide();    
    }


    public show(mcCible:any,sLabel:string) {  
      this.create(mcCible,sLabel);
    }


    public create(mcCible:any,sLabel:string){  
      this.spanHTML=this.renderer.createElement('span');
      const textHTML=this.renderer.createText(sLabel);

      this.renderer.appendChild(this.spanHTML,textHTML);
      this.renderer.appendChild(this.el.nativeElement, this.spanHTML);
      this.renderer.addClass(this.spanHTML, 'ng-tooltip');
      this.renderer.addClass(this.spanHTML, `ng-tooltip-bottom`);


      // POSITION
      let top, left;   
      top=mcCible.y+20;
      left=mcCible.x-80;
      this.renderer.setStyle(this.spanHTML, 'top', top+`px`);
      this.renderer.setStyle(this.spanHTML, 'left', left+`px`);

      // STYLE ng-tooltip
 
    }

    public hide() {
      if(this.spanHTML){
          this.renderer.removeChild(this.el.nativeElement, this.spanHTML);    
          this.spanHTML=null;
      } 
    }
}

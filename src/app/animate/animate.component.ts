import { 
	Component
	 } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css']
})
export class AnimateComponent{
	list=[];
	tempStore=[];
	i=1;
	limit=1;
	completedAnim=false;
	clearButton=false;
	clearset=false;
	pageNo=0;
  constructor(private af:AngularFire) { 
	this.af.database.object("education/",{preserveSnapshot : true}).subscribe(snapshots=>{
		if(snapshots.exists()) {
			this.limit=snapshots.numChildren();
			var i=0;
			snapshots.forEach(snapshot=>{
				this.tempStore[i]=snapshot.val().value;
				i++;
			});
		  	this.recurAdd();
		  	setTimeout(()=>{
				this.clearButton=true;
			},1010);
		}
	});
  }
	recurAdd(){
		if(this.list.length<5 && this.i<=this.limit) {
			setTimeout(()=>{
				this.list.push({"val":""+this.tempStore[this.i-1],"state":"in"});
				this.i++;
				this.recurAdd();
			},1000);	
		}else{
			this.pageNo++;
		}
		if(this.i==this.limit) {
			setTimeout(()=>{
			this.completedAnim=true;
			},1000);	
		}
	}
	recurDel(len){
		if(len!=0) {
			this.list[len-1].state="out";
			setTimeout(()=>{
				this.list.pop();
				len--;
				this.recurDel(len);
			},700);
		}else{
  			setTimeout(()=>{
				this.clearButton=true;
			},1010);
			this.recurAdd();
		}
	}
	cls="false";
  clearAnim(){
  	this.clearButton=false;
  	this.recurDel(this.list.length);
  }
  gotoButton=true;
  gotoConcent(){
  	this.clearAnim();
  	this.clearButton=false;
  	this.gotoButton=false;
  }
}

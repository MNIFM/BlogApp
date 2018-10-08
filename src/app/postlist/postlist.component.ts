import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

    @Input() postTitle:  string ;
    @Input() postContent:  string;
     postStatus:string = 'neutral';
     like:number = 0;
     lastUpdate = new Date();
  constructor() { }

  ngOnInit() {
  }
 onLike() {
    this.like ++ ;
    if (this.like === 0) {
      this.postStatus = 'neutral'; }
    if (this.like > 0) {
       this.postStatus = 'ok';
    }
  }

 onDislike() {
    this.like -- ;
     if (this.like === 0) {
      this.postStatus = 'neutral'; }
     if (this.like < 0) {
      this.postStatus = 'ko';
  }
}

}
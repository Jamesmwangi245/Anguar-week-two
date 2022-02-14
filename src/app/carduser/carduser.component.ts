import { Component, OnInit } from '@angular/core';
import {SGithubService} from '../s-github.service'
@Component({
  selector: 'app-carduser',
  templateUrl: './carduser.component.html',
  styleUrls: ['./carduser.component.css']
})
export class CarduserComponent implements OnInit {

  posts : any;

  constructor(private SGithubService: SGithubService) { }


  ngOnInit():void {
  
    this.SGithubService.getPosts().subscribe(
    (response) => { this.posts = response; },
    (error) => { console.log(error); });
  }
  

}

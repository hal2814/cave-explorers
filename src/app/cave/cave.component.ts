import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Cave } from '../cave.model';
import { CaveService } from '../cave.service';

@Component({
  selector: 'app-cave',
  templateUrl: './cave.component.html',
  styleUrls: ['./cave.component.css'],
  providers: [ CaveService ]
})

export class CaveComponent implements OnInit {
  caves: FirebaseListObservable<any[]>;
  caveToDisplay;
  caveIndex;
  objectObservable;
  // show = false;

  constructor(private router: Router, private caveService: CaveService) { }


  ngOnInit(){
    // this.caves = this.caveService.getCaves();
    this.caveIndex = 0;
    this.caveToDisplay =
    this.caveService.getCaveById(this.caveIndex);

    //IMPORTANT - in order to display as a raw object, .subscribe() must be called separately
    //from the object to display. async unwraps the firebase object ONLY.
    this.objectObservable =
    this.caveService.getCaveById(this.caveIndex).subscribe(dataLastEmittedFromObserver=>{
      this.objectObservable = dataLastEmittedFromObserver;
      console.log(this.objectObservable);
    });

    // this.left = caveToDisplay.left;
  };

  // chooseDirection(number){
  //   this.caveToDisplay = this.caveService.getCaveById(number);
  // }

  chooseLeft(){
    this.caveIndex = this.objectObservable.left;
    this.caveToDisplay = this.caveService.getCaveById(this.caveIndex);

    this.objectObservable =
    this.caveService.getCaveById(this.caveIndex).subscribe(dataLastEmittedFromObserver=>{
      this.objectObservable = dataLastEmittedFromObserver;
    });
    console.log(this.objectObservable);
  }

  chooseRight(){
    this.caveIndex = this.objectObservable.right;
    this.caveToDisplay = this.caveService.getCaveById(this.caveIndex);

    this.objectObservable =
    this.caveService.getCaveById(this.caveIndex).subscribe(dataLastEmittedFromObserver=>{
      this.objectObservable = dataLastEmittedFromObserver;
    });
    console.log(this.objectObservable);
  }

  // showCave(){
  //
  // }


  // goToDetailPage(clickedCave: Cave) {
  //   this.router.navigate(['caves', clickedCave.$key]);
  // };

 // goToDetailPage(clickedCave: Cave) {
 //   this.router.navigate(['caves', clickedCave.id]);
 // };
 //
 // goToUserPage(clickedUser: User) {
 //   this.router.navigate(['users', clickedUser.username]);
 // };

}

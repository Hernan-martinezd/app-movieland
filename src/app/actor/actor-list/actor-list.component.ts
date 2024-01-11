import { Component, OnInit } from '@angular/core';
import { Actor } from '../actor';
import { ActorService } from '../actor.service';


@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  actors: Array<Actor> = [];
  selectedActor!: Actor;
  selected: boolean = false;

  constructor(private actorService: ActorService) { }

  getActors(): void{
    this.actorService.getActors().subscribe({next: actors => 
      this.actors = actors, error: e => console.error(e)})
  }

  ngOnInit() {
    this.getActors();
  }

  onSelected(actor: Actor): void {
    console.log("OnSelected")
    this.selected = true;
    this.selectedActor = actor;
  }

}

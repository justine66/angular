import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Equipe } from 'src/app/model/equipe';
import { Vote } from 'src/app/model/vote';

@Component({
  selector: '[app-equipe]',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss'],
})
export class EquipeComponent {
  @Input()
  equipe!: Equipe;
  @Output()
  voteEvent: EventEmitter<Vote> = new EventEmitter();

  vote = 0;

  voter() {
    this.vote++;
    this.voteEvent.emit(new Vote(this.equipe.nom!, this.vote));
  }
}

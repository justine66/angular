import { Component, EventEmitter, Output } from '@angular/core';
import { Equipe } from 'src/app/model/equipe';

@Component({
  selector: 'app-create-equipe',
  templateUrl: './create-equipe.component.html',
  styleUrls: ['./create-equipe.component.scss'],
})
export class CreateEquipeComponent {
  equipe: Equipe = new Equipe();
  @Output()
  equipeReadyEvent: EventEmitter<Equipe> = new EventEmitter();

  ajouterEquipe() {
    if (this.equipe.nom) {
      this.equipeReadyEvent.emit(this.equipe);
      this.equipe = new Equipe();
    }
  }
}

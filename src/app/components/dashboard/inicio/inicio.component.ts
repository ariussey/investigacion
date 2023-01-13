import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  categorias: string[] = ['Administración y Finanzas', 'Ingeniería de Sistemas', 'Ingeniería Industrial', 'Derecho', 'Contabilidad', 'Enfermería', 'Psicología', 'Obstetricia'];

  selectedOptions = ['Administración y Finanzas'];
  step = 0;
  

  setStep(index: number) {
    this.step;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

  
  
  ngOnInit(): void {

    
    
  }


  
}

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}
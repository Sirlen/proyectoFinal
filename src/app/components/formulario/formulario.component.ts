import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  public descripcion: string;  //Mantiene la descripcion de la tarea
  public usuario: string;  
  public estado: string;
  public fechaFinalizar: Date; 
  
  constructor(private tareaSvc: PrincipalService) {}

  ngOnInit(): void {
  }

    //Este metodo se ejecuta cada vez que el usuario hace click en el boton
    procesar(): void { 

      // Obtener la fecha de la maquina
      //var today = new Date();
            

      if (this.descripcion && this.descripcion !== '') { 
        console.log(this.descripcion);
        console.log(this.usuario);
        const tarea = new Tarea();
        tarea.usuario = this.usuario;
        tarea.descripcion = this.descripcion;
        //console.log(today)
        tarea.fecha = new Date();
        tarea.estado = this.estado;
        tarea.fechaFinalizar = this.fechaFinalizar;
        console.log(tarea);
        this.tareaSvc.addTarea(tarea).subscribe((resp) => console.log('RESPONSE', resp));
      } 
      
  }
   
}
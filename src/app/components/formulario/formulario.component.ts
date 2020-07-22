import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  public descripcion: string;  //Mantiene la descripcion de la tarea
  public usuario: string;  //Avance 4
  public fecha: Date; //Avance 4
  
  constructor(private tareaSvc: PrincipalService) { }

  ngOnInit(): void {}

    //Este metodo se ejecuta cada vez que el usuario hace clicl en el boton
    procesar(): void { 

      // Obtener la fecha de la maquina
      var today = new Date();
      // Obtener la fecha con formato
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      // Obtener la hora actual 
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      

      if (this.descripcion && this.descripcion !== '') { 
        console.log(this.descripcion);
        console.log(this.usuario);
        const tarea = new Tarea();
        tarea.usuario = this.usuario;
        tarea.descripcion = this.descripcion;
        // Concatenar y mostrar en consola
        var dateTime = date+' '+time;
        console.log(dateTime)
        tarea.fecha = this.dateTime;
        this.tareaSvc.tareas.push(tarea);
        console.log(tarea);
      } 
      
  }
   
}
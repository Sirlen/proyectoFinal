import { Injectable } from '@angular/core';
import { Tarea } from '../models/Tarea';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  public tareas: Tarea[];
  constructor() { }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private students: Student[] = [
    {
      nombre: 'Aprendiz I',
      titulo: 'TGO ADSI',
      img: 'assets/img/aprendiz1.jpg',
      habilidad: 'Desarrollo front end',
    },
    {
      nombre: 'Aprendiz II',
      titulo: 'TGO ADSI',
      img: 'assets/img/aprendiz2.jpg',
      habilidad: 'Desarrollo front end',
    },
    {
      nombre: 'Aprendiz III',
      titulo: 'Inegniero de Sistemas',
      img: 'assets/img/aprendiz3.jpg',
      habilidad: 'Desarrollo back end',
    },
    {
      nombre: 'Aprendiz IV',
      titulo: 'TGO ADSI',
      img: 'assets/img/aprendiz4.jpg',
      habilidad: 'Fullstack',
    },
    {
      nombre: 'Aprendiz v',
      titulo: 'TGO ADSI',
      img: 'assets/img/aprendiz5.jpg',
      habilidad: 'Desarrollo front end',
    },
    {
      nombre: 'Aprendiz VI',
      titulo: 'TGO ADSI',
      img: 'assets/img/aprendiz6.jpg',
      habilidad: 'Desarrollo front end',
    },
    {
      nombre: 'Aprendiz VII',
      titulo: 'Ingeniero de Sistemas',
      img: 'assets/img/aprendiz7.jpg',
      habilidad: 'Desarrollo back end',
    },
    {
      nombre: 'Aprendiz VIII',
      titulo: 'TGO ADSI',
      img: 'assets/img/aprendiz8.jpg',
      habilidad: 'Fullstack',
    }
  ];

  public getStudents(){

    return this.students;
  }

  public getStudent(index: number){
       return this.students[index];
      }

  constructor() {}
}

export interface Student {
  nombre: string;
  titulo: string;
  img: string;
  habilidad: string;
}

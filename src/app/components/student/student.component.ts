import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: [
  ]
})
export class StudentComponent implements OnInit {

  student: any = {};
  constructor(private activatedRoute: ActivatedRoute,
    private _studentsService: StudentsService) {

    this.activatedRoute.params.subscribe(params => {
      /* console.log(params);
      console.log(params.id);
      console.log(params['id']); */
      this.student = this._studentsService.getStudent(params['id']);
      console.log(this.student);
    });
  }

  /* Ciclo de vida de angular
  se ejecuta Después de hacer comprobaciones de enlaces*/
  ngOnInit(): void {
    console.log("prueba ejecución");
  }

}

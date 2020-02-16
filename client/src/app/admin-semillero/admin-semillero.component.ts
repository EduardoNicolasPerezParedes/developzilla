import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-semillero',
  templateUrl: './admin-semillero.component.html',
  styleUrls: ['./admin-semillero.component.css']
})
export class AdminSemilleroComponent implements OnInit {
  /**
   * Opciones disponibles para el usuario.
   */
  public OPTIONS = {
    EVENTS: 0,
    COURSES: 1,
    NEWS: 2,
    MSG: 3
  };

  /**
   * Opción elegida por el usuario.
   */
  public selectedOption;

  constructor(private router: Router) {  }

  ngOnInit() {
    let url = this.router.url;
    
    switch(url) {
      case '/admin/courses':
        this.selectedOption = this.OPTIONS.COURSES;
        break;
      case '/admin/messages':
        this.selectedOption = this.OPTIONS.MSG;
        break;
    }
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { HttpService } from './http.service';
import { Course } from '../_models/course.model';
import { parse } from 'querystring';
 
@Injectable()
export class CourseService extends HttpService {

    constructor(protected http: HttpClient) {
        super(http);
        this.apiUrl += 'course';
    }

    /**
     * Registra un nuevo curso.
     * 
     * @param course curso a ser registrado.
     */
    create(course: Course) {
        return this.http.post(
            this.apiUrl, 
            course.parseToJSON(),
            { headers: this.headers }
        );
    }

    /**
     * Obtiene los cursos.
     */
    list() {
        return this.http.get(
            this.apiUrl,
            { headers: this.headers }
        );
    }

    /**
     * Obtiene un curso.
     * 
     * @param id identificador del curso.
     */
    get(id: string) {
        let params = new HttpParams();
        params.set('id', id);

        return this.http.get(
            this.apiUrl,
            { 
                headers: this.headers,
                params: params
            },
        );
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ImageInfo {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData(): Observable<ImageInfo[]> {
    return this.http.get<ImageInfo[]>('https://api.nasa.gov/planetary/apod?api_key=kGezatJCtObPmwUDatGmpP6ijgHzBoCoPuFpuFha&count=4');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ImageInfo {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<ImageInfo[]>('https://picsum.photos/v2/list?page=1&limit=12')
  }
}

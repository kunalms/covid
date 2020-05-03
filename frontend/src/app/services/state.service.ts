import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private readonly stateBaseUrl = '/api/state';
  public ALL = {
    name: 'All',
    code: ''
  };

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<any>(this.stateBaseUrl + '/all').pipe(map((response) => {
      response.unshift(this.ALL);
      return response;
    }));
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private readonly patientDataBaseurl = '/api/patient';

  constructor(private http: HttpClient) {
  }

  getTotal(state: string = '') {
    let url = this.patientDataBaseurl + '/getcountsbydate';
    if (state !== '') {
      url += '?state=' + state;
    }
    return this.http.get<any>(url);
  }

  getRange(state: string = '') {
    let url = this.patientDataBaseurl + '/getcountsbyrange';
    if (state !== '') {
      url += '?state=' + state;
    }
    return this.http.get<any>(url);
  }
}

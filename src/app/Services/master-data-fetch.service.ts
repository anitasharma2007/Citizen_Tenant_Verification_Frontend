import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MasterDataFetchService {

  constructor(private httpClient : HttpClient) { }

  private nationalityURL = "http://localhost:8080/api/masterData/nationality/99";
  private stateURL = "http://localhost:8080/api/masterData/state/99";
  private districtURL = "http://localhost:8080/api/masterData/district";
  private policeStationURL = "http://localhost:8080/api/masterData/policeStation";
  private occupationURL = "http://localhost:8080/api/masterData/occupation/99";
  private genderURL = "http://localhost:8080/api/masterData/gender/99";
  private relationTypeURL = "http://localhost:8080/api/masterData/relationType/99";
  private nationalIdDocTypeURL = "http://localhost:8080/api/masterData/nationalDocType/99";

  //call to fetch nationality
  fetchNationality() : Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.nationalityURL}`);
  }

  //call to fetch state
  fetchState() : Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.stateURL}`);
  }

  //call to fetch district according to selected state
  fetchDistrict(langCd : number ,stateCd: number) : Observable<any[]>{
    let params = new HttpParams();
    params = params.append('langCd', langCd);
    params = params.append('stateCd', stateCd);
    return this.httpClient.get<any[]>(`${this.districtURL}`, { params });
  }

  //call to fetch police station according to district
  fetchPoliceStation(langCd : number ,stateCd: number, districtCd : number) : Observable<any[]>{
    let params = new HttpParams();
    params = params.append('langCd', langCd);
    params = params.append('stateCd', stateCd);
    params = params.append('districtCd', districtCd);
    return this.httpClient.get<any[]>(`${this.policeStationURL}`, { params });
  }

  //call to fetch occupation
  fetchOccupation() : Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.occupationURL}`);
  }

  //call to fetch gender
  fetchGender() : Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.genderURL}`);
  }

  //call to fetch relation type
  fetchRelationType() : Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.relationTypeURL}`);
  }

  //call to fetch national id doc type
  fetchNationalIdDocType() : Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.nationalIdDocTypeURL}`);
  }

}

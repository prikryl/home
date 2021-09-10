import {Injectable} from '@angular/core';
import {ignoreElements, map} from "rxjs/operators";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

export interface ShutterConfig {
  code: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ShutterService {

  private readonly BASE_URL = 'http://192.168.1.20:1080/';

  constructor(private httpClient: HttpClient,
  ) {
  }

  public getShutterConfigs(): Observable<ShutterConfig[]> {
    return this.httpClient.get(this.BASE_URL + 'cmd/getConfig').pipe(
      map((resp: any) => {
        return Object.entries(resp.Shutters).map(entry => ({code: entry[0] as string, name: entry[1] as string}))
      }),);
  }

  public execute(code: string, command: 'up' | 'down' | 'stop'): Observable<never> {
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});

    return this.httpClient.post(this.BASE_URL + 'cmd/' + command, 'shutter=' + code, {headers}).pipe(
      ignoreElements(),
    );
  }
}

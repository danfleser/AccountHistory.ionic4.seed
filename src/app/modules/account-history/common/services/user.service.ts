import { Injectable } from '@angular/core';
import { ApiBaseService } from 'src/app/common/services/api-base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiBaseService {
  
  baseUrl: string = environment.endpoints.USERS;

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  getAccounts(userId: number): Observable<any>  {
    return this.httpClient.get(`${this.baseUrl}/${userId}/${environment.endpoints.ACCOUNTS}`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { ApiBaseService } from 'src/app/common/services/api-base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends ApiBaseService {

  baseUrl: string = environment.endpoints.ACCOUNTS;

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  getTransactionMonths(accountId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${accountId}/${environment.endpoints.TRANSACTIONS_MONTHS}`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  getGroupedTransactions(accountId: number, year, month): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${accountId}/${environment.endpoints.GROUPED_TRANSACTIONS}/${year}/${month}`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }
}

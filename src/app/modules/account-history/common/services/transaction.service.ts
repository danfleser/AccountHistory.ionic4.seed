import { Injectable } from '@angular/core';
import { ApiBaseService } from 'src/app/common/services/api-base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService extends ApiBaseService {

  baseUrl: string = environment.endpoints.TRANSACTIONS;

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { AccountHistoryPage } from './account-history.page';
import { MonthDisplayPipe } from './common/pipes/month-display.pipe';
import { UserService } from './common/services/user.service';
import { AccountService } from './common/services/account.service';
import { TransactionService } from './common/services/transaction.service';

const routes: Routes = [
  {
    path: '',
    component: AccountHistoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AccountHistoryPage, 
    MonthDisplayPipe
  ],
  providers: [
    HttpClient,
    UserService,
    AccountService,
    TransactionService
  ]
})
export class AccountHistoryPageModule {}

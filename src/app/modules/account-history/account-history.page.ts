import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { UserService } from './common/services/user.service';
import { AccountService } from './common/services/account.service';
import { TransactionService } from './common/services/transaction.service';
import { User } from 'src/app/common/models/user.model';
import { Account } from 'src/app/common/models/account.model';
import { Subscription } from 'rxjs';
import { Transaction } from 'src/app/common/models/transaction.mdoel';
import { FormattedDate } from 'src/app/common/models/FormattedDate.model';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-account-history',
  templateUrl: './account-history.page.html',
  styleUrls: ['./account-history.page.scss'],
})
export class AccountHistoryPage implements OnInit, OnDestroy {

  @ViewChild('monthsSlider') monthsSlider: IonSlides;

  private userSubscription: Subscription;
  private accountSubscription: Subscription;
  private transactionSubscription: Subscription;
  private slideOpts: any = {
    centeredSlides: true,
    slidesPerView: 5,
    spaceBetween: 20,
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 20
      },
    }
  };

  private selectedDate: FormattedDate;

  private users: User[] = [];
  private selectedUser: User;
  private accounts: Account[] = [];
  private selectedAccount: Account;
  private transactions: Transaction[] = [];
  private transactionsMonths: FormattedDate[];
  private startMonthBalance: number;
  private loader: boolean;

  private accountBalance: number;

  constructor(private UserService: UserService,
    private AccountService: AccountService,
    private TransactionService: TransactionService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userSubscription = this.UserService.getAll().subscribe((users: User[]) => {
      this.users = users;
    })
  }

  selectMonth(index) {
    this.selectedDate = this.transactionsMonths[index];
    this.getTransactionsForMonth(this.selectedAccount.id);
  }

  selectUser() {
    this.loader = true;
    // clear used vars
    this.accounts = [];
    this.selectedAccount = null;
    this.resetTransactions();

    this.accountSubscription = this.UserService.getAccounts(this.selectedUser.id).subscribe((accounts: Account[]) => {
      this.accounts = accounts;
      this.loader = false;
    });
  }

  selectAccount() {
    this.loader = true;
    // clear used vars
    this.resetTransactions();

    this.transactionSubscription = this.AccountService.getTransactionMonths(this.selectedAccount.id).subscribe((transactionsMonths: []) => {
      this.transactionsMonths = transactionsMonths;
      this.slideOpts.initialSlide = this.transactionsMonths.length - 1
      this.monthsSlider.slideTo(this.transactionsMonths.length - 1);
      this.monthsSlider.update();
      this.selectMonth(this.transactionsMonths.length - 1);
      this.loader = false;
    })
  }

  getTransactionsForMonth(id) {
    this.loader = true;

    this.transactionSubscription = this.AccountService
      .getGroupedTransactions(id, this.selectedDate.year, this.selectedDate.month).subscribe((transactions: Transaction[]) => {
        this.transactions = transactions;
        this.loader = false;
      })
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.accountSubscription.unsubscribe();
    this.transactionSubscription.unsubscribe();
  }

  resetTransactions() {
    this.transactionsMonths = [];
    this.transactions = [];
  }

}
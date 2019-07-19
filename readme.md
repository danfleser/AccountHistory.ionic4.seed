Build a one screen mobile app and its corresponding backend solution - for an Account History feature.
(Mimicking a bank account if you wish - having current balance, credits and debits transactions and balance after each of them)

Mobile app to be built in Ionic 3/4 with Angular(5+) and TypesScript. 
Backend ASP.NET as a RESTful API, with EF on top of MS SQL DB (no user management or authentication is needed)


A. Front End
----------------------------------------------------

Account history screen should have: 
The current balance at the top of the page
List of credits and debits in the account history - list should be built and displayed as a grouped list structure - grouped by date, in descending order: 
- with date as a header/separator for each group 
- and in each group a row for each transaction - row should be containing : an icon describing an action/reason for transaction, transaction name/reason as text (text for acct movement action), the value of the transaction, balance before (images,texts and values can be random things)
- inside each date group - transactions should be ordered desc by time
bottom of the list/page has starting balance - example starting of the month (adding the possibility to change the month is a bonus)

A bit of styling would be nice :) - like the top(current)/bottom(starting) acct balances, difference in style between credits and debits, etc


B. BackEnd
-------------------------------------------------

1. Create the supporting data model for Account History 
- for the User table just create a minimal one :  ID, Username and whatever else you consider is needed 
2. Create API endpoints to:
add account movements credits and debits (and update balance) 
add validation for debits to not be allowed if balance would not permit it
retrieve them for display and filter - at least the part for last month (but as i said bonus for ability to filter by month in general, considering the Month selected in the UI)


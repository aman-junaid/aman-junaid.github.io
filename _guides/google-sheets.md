---
title: Take your data to Google Sheets
description: Export your transactions, explore your own analysis, and prepare carefully before importing updates.
category: Integrations
reading_time: 3
order: 2
---
## Connect your Google account

Open **Settings → Account** to sign in to the Google account you want to use. Then open **Settings → Google Sheet** for the import and export options. An internet connection and the requested Google permissions are needed for these operations.

## Export your transactions

Use **Data export** in the Google Sheet settings. MET creates or finds a spreadsheet named **ExpensesData** and writes transaction data into it. Wait for the operation to finish, then open the linked spreadsheet and check that the expected records are present.

Use the sheet for your own charts, filters, and analysis. Keep an untouched copy of the exported data before experimenting with the format.

## Before importing changes

1. [Create a backup]({{ '/guides/backup-and-restore/' | relative_url }}) of your current MET data.
2. Keep a copy of the original spreadsheet.
3. Preserve MET’s exported column structure and identifiers. Avoid renaming columns or changing formats casually.
4. Check dates, amounts, accounts, transaction types, and status values.

> Import brings data into the app. Treat it as a deliberate operation; Google Sheets export is separate from a full app backup.

## Import and verify

Use **Data import** from the Google Sheet settings. After completion, open the transaction list and check the affected entries. Compare amounts and account assignments, and review the selected month’s totals.

## If something goes wrong

Check connectivity, confirm you are signed into the intended Google account, and verify access to the spreadsheet. If an import reports an error, inspect the app’s current records before retrying. Contact support with the error message and app version, keeping financial details out of your message.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';

import { MaterialModule } from 'app/core-ui/material/material.module';
import { HeaderComponent } from 'app/wallet/shared/header/header.component';
import { DeleteConfirmationModalComponent } from 'app/wallet/shared/delete-confirmation-modal/delete-confirmation-modal.component';
import { ProgressBarComponent } from 'app/wallet/shared/progress-bar/progress-bar.component';
import { OverviewBalanceComponent } from 'app/wallet/shared/overview-balance/overview-balance.component';
import { TransactionsTreeComponent } from 'app/wallet/shared/transactions-tree/transactions-tree.component';
import { SpotLightCardComponent } from 'app/wallet/shared/spot-light-card/spot-light-card.component';
import { ArticleCardComponent } from 'app/wallet/shared/article-card/article-card.component';
import { NoticePanelItemComponent } from 'app/wallet/shared/notice-panel-item/notice-panel-item.component';
import { NoticePanelComponent } from 'app/wallet/shared/notice-panel/notice-panel.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
  imports: [CommonModule, MaterialModule, HttpClientModule],
  declarations: [
    HeaderComponent,
    DeleteConfirmationModalComponent,
    ProgressBarComponent,
    OverviewBalanceComponent,
    TransactionsTreeComponent,
    ArticleCardComponent,
    SpotLightCardComponent,
    NoticePanelComponent,
    NoticePanelItemComponent,
    DatePickerComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ClipboardModule,
    HeaderComponent,
    ProgressBarComponent,
    OverviewBalanceComponent,
    TransactionsTreeComponent,
    ArticleCardComponent,
    SpotLightCardComponent,
    NoticePanelComponent,
    NoticePanelItemComponent,
    DatePickerComponent,
  ],
  entryComponents: [DeleteConfirmationModalComponent],
})
export class SharedModule {}

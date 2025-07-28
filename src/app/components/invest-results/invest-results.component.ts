import { Component, Input } from '@angular/core';
import { IInvestInput } from '../../interfaces/invest-model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-invest-results',
  imports: [CurrencyPipe],
  templateUrl: './invest-results.component.html',
  styleUrl: './invest-results.component.scss'
})
export class InvestResultsComponent  {

@Input() resultData!:IInvestInput[] | undefined;

}

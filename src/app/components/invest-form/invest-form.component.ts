import { Component, EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICalcInvest } from '../../interfaces/invest-model';

@Component({
  selector: 'app-invest-form',
  imports: [FormsModule],
  templateUrl: './invest-form.component.html',
  styleUrl: './invest-form.component.scss'
})
export class InvestFormComponent {
@Output() sendData = new EventEmitter<ICalcInvest>();
enterInitialInvestment="10";
enterAnnualInvestment="10";
enterExpectedReturn="10";
enterDuration="10";

onSubmit()
{
  this.sendData.emit({
    initialInvestment:+this.enterInitialInvestment,
    AnnualInvestment:+this.enterAnnualInvestment,
    ExpectedReturn:+this.enterExpectedReturn,
    duration:+this.enterDuration
  })
  
}
}

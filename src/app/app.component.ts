import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { InvestFormComponent } from './components/invest-form/invest-form.component';
import { ICalcInvest, IInvestInput } from './interfaces/invest-model';
import { InvestResultsComponent } from './components/invest-results/invest-results.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InvestResultsComponent,InvestFormComponent ,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'investment';
  resultsData?:IInvestInput[];
 onCalculateInvestmentResults(data: ICalcInvest) {
    const { initialInvestment, AnnualInvestment, ExpectedReturn, duration } =
      data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (ExpectedReturn / 100);
      investmentValue += interestEarnedInYear + AnnualInvestment;
      const totalInterest =
        investmentValue - AnnualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: AnnualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + AnnualInvestment * year,
      });
    }

    this.resultsData = annualData;
  }
}

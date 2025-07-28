export interface ICalcInvest
{
    initialInvestment:number,
    AnnualInvestment:number,
    ExpectedReturn:number,
    duration:number
} 
export interface IInvestInput
{
    year:number;
    interest:number;
    valueEndOfYear:number;
    annualInvestment:number;
    totalInterest:number;
    totalAmountInvested:number
}
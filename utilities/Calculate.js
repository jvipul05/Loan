const frequencyMonth = {
    'monthly': 12,
    'quarterly': 4,
    'semi-annually': 2,
    'annually': 1
  };
exports.interestCalculate = (principal, rate, time, frequency)=>{
  let n = frequencyMonth[frequency];
  rate = rate / 100;
  const amount = principal * Math.pow((1 + rate / n), n * time);
  return amount-principal;
};
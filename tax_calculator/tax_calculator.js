function taxCalculator(income, saving) {
  if (income < 250000) {
    return "no tax";
  }

  let actualSavings = 0;
  let taxableIncome = 0;
  if (income < 500000 && income >= 250000) {
    actualSavings = Math.floor((saving * 50) / 100);
    taxableIncome = income - actualSavings;
    let tax =
      taxableIncome > 250000 ? ((taxableIncome - 250000) * 10) / 100 : "no tax";
    return tax;
  }

  if (income < 1000000 && income >= 500000) {
    actualSavings = Math.floor((saving * 30) / 100);
    taxableIncome = income - actualSavings;
    let tax =
      taxableIncome > 500000
        ? ((taxableIncome - 500000) * 20) / 100
        : ((taxableIncome - 250000) * 10) / 100;
    return tax;
  }

  if (income >= 1000000) {
    actualSavings = Math.floor((saving * 10) / 100);
    taxableIncome = income - actualSavings;
    let tax =
      taxableIncome > 1000000
        ? ((taxableIncome - 1000000) * 30) / 100
        : ((taxableIncome - 500000) * 20) / 100;
    return tax;
  }
}

module.exports = taxCalculator;

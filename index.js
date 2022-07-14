function sum(...args) {
  if (args.length === 0) return "sum invoked without arguments";
  if (args.length === 1) return "sum function needs atleast 2 arguments";
  const sumVlaue = [...args].reduce((a, b) => a + Number(b), 0);
  return Number(sumVlaue.toFixed(1));
}

module.exports = sum;

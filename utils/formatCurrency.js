export function formatCurrency(amount) {
  const formatter = new Intl.NumberFormat();
  // const formatter = new Intl.NumberFormat("id-ID", {
  //   style: "currency",
  //   currency: "IDR",
  // });

  return formatter.format(amount);
}
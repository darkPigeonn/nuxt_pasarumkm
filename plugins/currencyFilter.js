import Vue from "vue";

Vue.filter("currency", function (value) {
  const formatter = new Intl.NumberFormat();
  // const formatter = new Intl.NumberFormat("id-ID", {
  //   style: "currency",
  //   currency: "IDR",
  // });

  return formatter.format(value);
});

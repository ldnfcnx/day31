var regionDiv=document.getElementById("region-radio-wrapper");
productDiv=document.getElementById("product-radio-wrapper");
tableWrap=document.getElementById("table-wrapper");

window.onload=function(){
  makeCheckBox(regionDiv,["华东","华北","华南"]);
  makeCheckBox(productDiv,["手机","笔记本","智能音箱"]);
}
var nm=document.getElementById('item-name-input');
var prc=document.getElementById('item-name-price');
let sum=document.getElementById('add');
let price=document.getElementById('price');
let item=document.getElementById('item-names');

var ttl=0;
sum.addEventListener('click',mySum);
function mySum()
{
    var r=Number.parseInt(prc.value);
     ttl=ttl+r;
     let total1=document.getElementById('total');
     total1.textContent=ttl;
     let td1=document.createElement("p");
     td1.innerText=prc.value;
     price.append(td1);
     let td2=document.createElement("p");
     td2.innerText=nm.value;
     item.append(td2);

}

sum.addEventListener('click',my);
function my(){
    nm.value="";
    prc.value="";
}

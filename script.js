const but_name = document.querySelectorAll('.but_name');
const section = document.querySelectorAll('.section');
var erro =  document.querySelector('.erro');

function validacao(p,n, sB, sL, t, g){
  var nu = t;
  toString(nu);
  console.log(nu);
  parseInt(sB, sL);
if (p === ''){
  erro.classList.add('erroAtivo');
  return erro.innerHTML = 'Campo Obrigatorio';
} 
if (n === ''){
  displayAtivo(0);
  erro.classList.toggle('erroAtivo');
  return erro.innerHTML = 'Campo Obrigatorio';
}
console.log(sB);
if (sB === '' || isNaN(sB)){
  displayAtivo(1);
  console.log('salario vazio');
  return false;
}
if (sL === '' || isNaN(sL)){
  displayAtivo(2);
  console.log('salarioLiq vazio');
  return false;
}
if (t === '' || isNaN(sL)){
  displayAtivo(3);
  console.log('telefone vazio');
  return false;
}
if (g === ''){
  displayAtivo(4);
  console.log('gmail vazio');
  return false;
}

displayAtivo(5);
calculoPj(sB, sL);
}

function displayAtivo(i){
section.forEach((e)=>{
    e.classList.remove('section-ativo');
    section[i+1].classList.add('section-ativo');
  });
}

function calculoPj(sB, sL){
  var prolabore = sB * 0.28;
  //Taxas
  var aliquota = sB * 0.06;
  var inss = prolabore * 0.11;
  //
  var irrf = prolabore * 0.075;
  var parcelaDeduzir = 142.80;
  var darf = irrf - parcelaDeduzir;
  
  var taxaTotal =  aliquota + inss + darf;
  var resultado = sB - taxaTotal;

  var descontoClt = sB - sL;
  var descontoPj = taxaTotal;
  
  var salarioFinalClt = sB - descontoClt;
  var salarioFinalPj = resultado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); 


  document.querySelector('.salarioClt').innerHTML = `Salário = ${sB}`;
  document.querySelector('.salarioPj').innerHTML = `Salário = ${sB}`;
  document.querySelector('.descontoClt').innerHTML = `Total de imposto CLT = ${descontoClt}`;
  document.querySelector('.descontoPj').innerHTML = `Total de imposto PJ = ${descontoPj.toFixed(2)}`;
  document.querySelector('.liquidoClt').innerHTML = `Salário liquido CLT = ${salarioFinalClt}`;
  document.querySelector('.liquidoPj').innerHTML = `Salário liquido PJ= ${salarioFinalPj}`;
}

function dados(i){
var profissao = document.querySelector(".profissao").value;
var name = document.querySelector(".name").value;
var salarioBruto = document.querySelector(".salarioBruto").value;
var salarioLiquido = document.querySelector(".salarioLiquido").value;
var telefone = document.querySelector(".telefone").value;
var gmail = document.querySelector(".gmail").value;
validacao(profissao, name, salarioBruto, salarioLiquido, telefone, gmail);
};


but_name.forEach((e,i)=>{
  e.addEventListener('click', () => {
    dados(i)
  });
});




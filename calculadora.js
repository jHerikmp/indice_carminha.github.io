
const operadores = ["+", "-", "*", "/"];
var total = Number(0)

function operacao_conta(){
  var input = document.getElementById("operacao").value
  /*/**/ 
  const soma = input.split("+");
  const subtracao = input.split("-");
  const divisao = input.split("/");
  const multiplicacao = input.split("*"); 
 
if(soma.length >= 2){
  valor = Number(soma[0].replace(/,/g, '.')) + Number(soma[1].replace(/,/g, '.'))
  total += Number(valor)
  document.getElementById("historico").innerHTML += `
  <h4>`+soma[0]+` + `+soma[1]+` = `+valor+`</h4><br>
  `
}else if(subtracao.length >= 2){
  valor = Number(subtracao[0].replace(/,/g, '.')) - Number(subtracao[1].replace(/,/g, '.'))
  total += Number(valor)
  document.getElementById("historico").innerHTML += `
  <h4>`+subtracao[0]+` - `+subtracao[1]+` = `+valor+`</h4><br>
  `
}else if(divisao.length >= 2){
  valor = Number(divisao[0].replace(/,/g, '.')) / Number(divisao[1].replace(/,/g, '.'))
  total += Number(valor)
  document.getElementById("historico").innerHTML += `
  <h4>`+divisao[0]+` / `+divisao[1]+` = `+valor+`</h4><br>
  `
}else if(multiplicacao.length >= 2){
  valor = Number(multiplicacao[0].replace(/,/g, '.')) * Number(multiplicacao[1].replace(/,/g, '.'))
  total += Number(valor)
  document.getElementById("historico").innerHTML += `
  <h4>`+multiplicacao[0]+` * `+multiplicacao[1]+` = `+valor+`</h4><br>
  `
}else{
  valor = Number(input.replace(/,/g, '.'))
  total += Number(valor)
  document.getElementById("historico").innerHTML += `
  <h4> +`+valor+`</h4><br>
  `
}
  /**/
  document.getElementById("total").innerHTML = `
  <h3>Total da Operação: R$ `+total.toFixed(2)+`</h3><br><hr>  `

  document.getElementById("operacao").value = ''
  
  }

  function limpa(){
    total = Number(0)
    document.getElementById("operacao").value = ''
    document.getElementById("historico").innerHTML = ''
    document.getElementById("total").innerHTML = ''
  }


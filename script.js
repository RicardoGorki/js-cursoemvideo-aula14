function gerarTabuada() {
  var numero = document.getElementById("inputNumero");
  var lista = document.getElementById("seltab");
  var num = Number(numero.value)

  if (numero.value.length == 0) {
    alert("Coloque um numero")
  } else {
   lista.innerHTML = ``
   for(i = 1; i <= 10; i++){
     var item = document.createElement('option')
     item.text = `${num} x ${i} = ${num*i}`
     item.value = `lista${i}`
     lista.appendChild(item)
    
   } 
  }
}

function chama_cliente(){
    document.getElementById("demo").innerHTML = ''
    nome_cliente = document.getElementById('nome_cliente').value
    pesquisa_por_nome(nome_cliente) 
    nome_cliente = document.getElementById('nome_cliente').value = ''   
  }
  
  async function consulta_dados_cliente(){
    const dados = await fetch('./dados_cliente.json')    
    let data = await dados.json();     
    return data
  }

  async function pesquisa_por_nome(nome_cliente){    
    let data = await consulta_dados_cliente(); 
    const array_dados_clientes = JSON.parse(JSON.stringify(data));
    let encontrou_cliente = []
    array_dados_clientes.forEach(element => {
        if(element.nome_cliente.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(nome_cliente.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))){
            encontrou_cliente.push(element)
        }
    });    
    if(encontrou_cliente.length > 0){
        monta_tabela(encontrou_cliente)
    }else{
      Swal.fire({
        title: "",
        text: "Nenhum dado encontrado!",
        icon: "error"
      });
    }
  }

  function monta_tabela(clientes){
    var table
    table = `
    <table class="table table-striped" style="color: black" id="example">
  <thead >
    <tr style="text-align:center;">
      <th scope="col">Nome</th>
      <th scope="col">Página</th>
      <th scope="col">Caderno</th>
    </tr>
  </thead>
  <tbody>
    `    
    clientes.forEach(element => {
        table +=` 
                <tr style="text-align:center;">
                <td>`+element.nome_cliente+`</td>
                <td>`+element.pagina_cliente+`</td>
                <td>`+element.caderno_cliente+`</td>
                </tr>
                `
        
    });
      
    table +=` 
    </tbody>
</table>
    `

    document.getElementById("demo").innerHTML = table
    new DataTable('#example', {      
    columnDefs: [
      // Center align both header and body content of columns 1, 2 & 3
      { className: "dt-center", targets: [0,1,2] }
   ]
  });
  }
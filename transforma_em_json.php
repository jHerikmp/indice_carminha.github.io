<?php

$string = trim(file_get_contents("texto_caderno_fino.txt"));
$string .= trim(file_get_contents("texto_caderno_grosso.txt"));

$array_string = explode('|', $string);
//echo "<pre>"; print_r($array_string);
$contador = 0;
$array_organizada = [];
foreach($array_string as $key => $string){
    $contador++;
    if($contador == 3){
        array_push($array_organizada, array(
            "nome_cliente" => trim($array_string[$key - 2]),
            "pagina_cliente" => trim($array_string[$key - 1]),
            "caderno_cliente" => trim($array_string[$key]),
        ));
        $contador = 0;
    }
}

// Função de comparação para ordenar pelo índice "nome"
function compararPorNome($a, $b) {
    return strcmp(ucwords($a['nome_cliente']), ucwords($b['nome_cliente']));
}

// Usar usort para ordenar o array com base na função de comparação
usort($array_organizada, 'compararPorNome');

// Imprimir o array ordenado
//echo "<pre>"; print_r($array_organizada); die();

echo "["."<br>";
foreach ($array_organizada as $organizado){    
    echo '{"nome_cliente": "'.ucwords($organizado["nome_cliente"]).'", "pagina_cliente": '.$organizado["pagina_cliente"].', "caderno_cliente": "'.$organizado["caderno_cliente"].'"},'."<br>";
}
echo "]";




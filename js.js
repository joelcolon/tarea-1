let consumo = 0;

 let kw = prompt("INGRESE LA CANTIDAD DE KILOWATTS CONSUMIDOS EN SU HOGAR ");


if(kw <= -1){
    alert("el valor tiene que ser positivo");
}
else if (kw <= 200) {
    consumo = kw * 5.55;
    alert(`El presio de su consumo es ${consumo} pesos`);
} 
else if (kw <= 300) {
    consumo = kw * 7.88;
    alert(`El presio de su consumo es ${consumo} pesos`);

}else if (kw <= 700) {
    consumo = kw * 11.46;
    alert(`El presio de su consumo es ${consumo} pesos`);

}else if (kw >= 300) {
    consumo = kw * 11.68;
    alert(`El presio de su consumo es ${consumo} pesos`);

}else{
    alert("valor invalido");
}
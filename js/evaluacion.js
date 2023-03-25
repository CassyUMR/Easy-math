//Creamos la función capaz de evaluar las respuestas de verdadero o falso
function evaluarFV(){
    //Las variables, que evaluan preguntas y la nota
    var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10;
    var nota

    /*La nota debe tener un valor inicial de 0, para que luego podamos ir sumando
    5 o 0 para generar la nota final, si la nota no tuviera valor, seria siempre 0*/
    nota = 0

    //Codigo de la pregunta 1
    p1 = document.getElementById("Pregunta1").value;

    //Evaluamos la respuesta:

    /*Si la respuesta es igual a f:*/
    if (p1 == 'V' || p1 == 'v'){
        //Entonces la nota tendra un valor de 5
        nota += 5
    }
    else{
        //Si es incorrecto:
        nota = 0
    } 

    //Codigo de la respuesta 2
    p2 = document.getElementById("Pregunta2").value;

    //Si la respuesta es igual a v:
    if (p2 == 'F' || p2 == 'f'){
        nota += 5
    }
    else{
        //si es incorrecto:
        nota += 0
    }

    //codigo de la respuesta 3
    p3 = document.getElementById("Pregunta3").value;

    //si La respuesta es igual a v:
    if (p3 == "V" || p3 == "v"){
        nota += 5
    }
    else{
        //Si es incorrecto: 
        nota += 0
    }

    //Codigo de la respuesta 4:
    p4 = document.getElementById("Pregunta4").value;

    //Si es f:
    if (p4 == "V" || p4 == "v"){
        nota += 5
    }
    else{
        //Si es incorrecto:
        nota += 0
    }

    //codigo de la respuesta 5:
    p5 = document.getElementById("Pregunta5").value;

    //Si es f:
    if (p5 == "f" || p5 == "F"){
        nota += 5
    }
    else{
        nota += 0
    }

    //codigo de la respuesta 6:
    p6 = document.getElementById("Pregunta6").value;

    //Si es f:
    if (p6 == "f" || p6 == "F"){
        nota += 5
    }
    else{
        nota += 0
    }
    
    //codigo de la respuesta 7:
    p7 = document.getElementById("Pregunta7").value;

    //Si es f:
    if (p7 == "v" || p7 == "V"){
        nota += 5
    }
    else{
        nota += 0
    }
    
    //codigo de la respuesta 8:
    p8 = document.getElementById("Pregunta8").value;

    //Si es f:
    if (p8 == "f" || p8 == "F"){
        nota += 5
    }
    else{
        nota += 0
    }

    //codigo de la respuesta 9:
    p9 = document.getElementById("Pregunta9").value;

    //Si es f:
    if (p9 == "F" || p9 == "f"){
        nota += 5
    }
    else{
        nota += 0
    }

    //codigo de la respuesta 10:
    p10 = document.getElementById("Pregunta10").value;

    //Si es f:
    if (p10 == "F" || p10 == "f"){
        nota += 5
    }
    else{
        nota += 0
    }

    //Ya que cada acierto vale 5 puntos, multiplicamos la nota por 2 
    nota = nota * 2
    
    //Escribimos El mensaje de la evaluación
    if (nota > 90 || nota == 90){
    window.alert('Felicidades, Lo hiciste exelente!! Sacaste: ' + nota + '%')
    }

    if(nota == 80){    
        window.alert('Felicidades, Lo hiciste muy bien, Sacaste: ' + nota + '%')

    }

    if (nota == 60 || nota == 70){
        window.alert('Lo hiciste muy bien, sacaste: ' + nota +  '%')

    }
    if (nota < 60){
        alert('Deberías repasar un poco más, sacaste: ' + nota +  '%')

    }

}



function evaluarChecbox(){
    var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, nota;

    // 1a pregunta
    if (document.getElementById('t0').checked==true) {
        p1=10
    }
    else {p1=0}

    // 2a pregunta
    if (document.getElementById('t1').checked==true) {
        p2=10
    }
    else {p2=0}

    // 3a pregunta
    if (document.getElementById('t2').checked==true) {
        p3=10
    }

    else {p3=0}
    // 4a pregunta
    if (document.getElementById('t3').checked==true) {
        p4=10
    }
    else {p4=0}

    // 5a pregunta
    if (document.getElementById('t4').checked==true) {
        p5=10
    }
    else {p5=0}

    // 6a pregunta
    if (document.getElementById('t5').checked==true) {
        p6=10
    }
    else {p6=0}

    // 7a pregunta
    if (document.getElementById('t6').checked==true) {
        p7=10
    }
    else {p7=0}
    
    // 8a pregunta
    if (document.getElementById('t7').checked==true) {
        p8=10
    }
    else {p8=0}
    
    // 9a pregunta
    if (document.getElementById('t8').checked==true) {
        p9=10
    }
    else {p9=0}
    
    // 10a pregunta
    if (document.getElementById('t9').checked==true) {
        p10=10
    }
    else {p10=0}

    nota= p1 + p2 + p3 + p4 + p5 + p6 + p7 +p8 + p9 + p10;

    alert("sacaste un"+" " + nota + "%" + " " + "hiciste un buen trabajo");
}
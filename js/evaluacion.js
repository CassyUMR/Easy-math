function evaluar(){
    var pregunta1 = document.getElementById("p1").value;

    if (pregunta1 == 'gatos'){
        location.href ='../index.html';
    }
    else{
        document.body('Incorrecto')
    }
}
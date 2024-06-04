let numeros=[];
let nums=[];
let con=0;
let centesimas = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;

  function inicio(){
    con=0;
    document.getElementById("mov").innerHTML =con;
    centesimas = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;

     numeros[0] =Math.floor(Math.random()*(8-1+1)+1);
     let a1=numeros[0];
    document.getElementById("n1").innerHTML= numeros[0];
  
    
    numeros[1] =Math.floor(Math.random()*(8-1+1)+1);
    var a2=numeros[1];
  
   numeros[2]=Math.floor(Math.random()*(8-1+1)+1);
   var a3=numeros[2];
  
    numeros[3]=Math.floor(Math.random()*(8-1+1)+1);
    var a4=numeros[3];
  
    numeros[4] =Math.floor(Math.random()*(8-1+1)+1);
    var a5=numeros[4];
  
    numeros[5] =Math.floor(Math.random()*(8-1+1)+1);
    var a6=numeros[5];

    numeros[6]= Math.floor(Math.random()*(8-1+1)+1);
    var a7=numeros[6];
  
    numeros[7]=Math.floor(Math.random()*(8-1+1)+1);
    var a8=numeros[7];
    
    numeros[8]="";
    var a9=numeros[9];
    document.getElementById("n9").innerHTML =numeros[8];

/*comparacion del 1
    if(a1 !== a2 || a1 !== a3 || a1 !== a4 || a1 !== a5 || a1 !== a6 || a1 !== a7 || a1 !== a8 || a1 !== a9){
        document.getElementById("n1").innerHTML=a1;   
    }
     while (a1 == a2 || a1 == a3 || a1 == a4 || a1 == a5 || a1 == a6 || a1 == a7 || a1 == a8 || a1 == a9) {
        var a1 = Math.floor(Math.random()*(8-1+1)) + 1;
        if(a1 !== a2 || a1 !== a3 || a1 !== a4 || a1 !== a5 || a1 !== a6 || a1 !== a7 || a1 !== a8 || a1 !== a9){
            document.getElementById("n1").innerHTML=a1;
        }
      }

      /*comparacion del 2*/

      if( a2 !== a1|| a2 !== a3 || a2 !== a4 || a2 !== a5 || a2!== a6 || a2 !== a7 || a2 !== a8 || a2 !== a9){
        document.getElementById("n2").innerHTML=a2;
      }
      while( a2 == a1 || a2 == a3 || a2 == a4 || a2 == a5 || a2 == a6 || a2 == a7 || a2 == a8 || a2 == a9){
        var a2=Math.floor(Math.random()*(8-1+1)+1);
        numeros[1]=a2;
        if(a2 !==a3 || a2 !==a4 || a2 !==a5 || a2 !==6 || a2 !==a7 || a2 !==a8){
            document.getElementById("n2").innerHTML=a2;
        }
      }

      /*comparacion del numero 3*/

      if(a3 !== a2 || a3 !== a1 || a3 !== a4 || a3 !== a5 || a3 !== a6 || a3 !== a7 || a3 !== a8 || a3 !== a9){
        document.getElementById("n3").innerHTML=a3;
      }
      while(a3 == a2 || a3 == a1 || a3 == a4 || a3 == a5 || a3 == a6 || a3 == a7 || a3 == a8 || a3 == a9){
        var a3 =Math.floor(Math.random()*(8-1+1)+1);
        numeros[2]=a3;
        if(a3!==a4 || a3!==a5 || a3!==a6 || a3!==a7|| a3!==a8 ){
            document.getElementById("n3").innerHTML=a3;
          }
      }

      /*comparacion del numero 4*/

      if(a4 !== a2 || a4 !== a3 || a4!== a1 || a4 !== a5 || a4 !== a6 || a4 !== a7 || a4 !== a8 || a4!== a9 ){
        document.getElementById("n4").innerHTML=a4;
      }
      while(a4 == a2 || a4 == a3 || a4 == a1 || a4 == a5 || a4 == a6 || a4 == a7 || a4 == a8 || a4 == a9){
        var a4 =Math.floor(Math.random()*(8-1+1)+1);
        numeros[3]=a4;
        if(a4!==a5 || a4!==a6 || a4!==a7|| a4!==a8 ){
            document.getElementById("n4").innerHTML=a4;
          }
      }

      /*comparacion del 5*/
      
      if( a5 !== a2 || a5 !== a3 || a5 !== a4 || a5 !== a1 || a5 !== a6 || a5 !== a7 || a5 !== a8 || a5 !== a9){
        document.getElementById("n5").innerHTML=a5;
      }

      while(a5 == a2 || a5 == a3 || a5 == a4 || a5 == a1 || a5 == a6 || a5 == a7 || a5 == a8 || a5 == a9){
        var a5 =Math.floor(Math.random()*(8-1+1)+1);
        numeros[4]=a5;
        if( a5!==a6 || a5!==a7|| a5!==a8 ){
            document.getElementById("n5").innerHTML=a5;
          }
      }

      /*comparacion de 6*/

      if( a6 !== a2 || a6 !== a3 || a6 !== a4 || a6 !== a1 || a6 !== a5 || a6 !== a7 || a6 !== a8 || a6 !== a9){
        document.getElementById("n6").innerHTML=a6;
      }
      while (a6 == a2 || a6 == a3 || a6 == a4 || a6 == a5 || a6 == a1 || a6 == a7 || a6 == a8 || a6 == a9) {
        var a6 = Math.floor(Math.random()*(8-1+1)) + 1;
        numeros[5]=a6;
        if( a6!== a2 || a6 !== a3 || a6 !== a4 || a6 !== a5 || a6 !== a1 || a6 !== a7 || a6 !== a8 || a6 !== a9){
            document.getElementById("n6").innerHTML=a6;
        }
      }

      /*comparacion de 7 */

      if(a7 !== a2 || a7 !== a3 || a7 !== a4 || a7 !== a5 || a7 !== a6 || a7 !== a1 || a7 !== a8 || a7 !== a9){
        document.getElementById("n7").innerHTML=a7;   
    }
    while (a7 == a2 || a7 == a3 || a7 == a4 || a7 == a5 || a7 == a6 || a7 == a1 || a7 == a8 || a7 == a9) {
        var a7 = Math.floor(Math.random()*(8-1+1)) + 1;
        numeros[6]=a7;
        if(a7 !== a2 || a7 !== a3 || a7 !== a4 || a7 !== a5 || a7 !== a6 || a7 !== a7 || a7 !== a8 || a7 !== a9){
            document.getElementById("n7").innerHTML=a7;
        }
      }

      /*comparacion del numero 8*/

      if(a8 !== a2 || a8 !== a3 || a8 !== a4 || a8 !== a5 || a8 !== a6 || a8 !== a7 || a8 !== a1 || a8 !== a9){
        document.getElementById("n8").innerHTML=a8;   
    }

    while (a8 == a2 || a8 == a3 || a8 == a4 || a8 == a5 || a8 == a6 || a8 == a7 || a8 == a1 || a8 == a9) {
        var a8 = Math.floor(Math.random()*(8-1+1)) + 1;
        numeros[7]=a8;
        if(a8 !== a2 || a8 !== a3 || a8 !== a4 || a8 !== a5 || a8 !== a6 || a8 !== a7 || a8 !== a1 || a8 !== a9){
            document.getElementById("n8").innerHTML=a8;
        }
      }
    control = setInterval(cronometro,10);
      
}

function cronometro () {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
		Centesimas.innerHTML = ":"+centesimas;
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
		Segundos.innerHTML = ":"+segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
		Minutos.innerHTML = ":"+minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10) { horas = "0"+horas }
		Horas.innerHTML = horas;
	}
}


function b9(){
  if(numeros[7]=="" && numeros[8]!==""){
    let aux1=numeros[7];
    let aux2=numeros[8];
    numeros[7]=aux2;
    numeros[8]=aux1;
    document.getElementById("n9").innerHTML= numeros[8];
    document.getElementById("n8").innerHTML= numeros[7];
    con=con+1;
    document.getElementById("mov").innerHTML =con;
    if(numeros[0]==1 && numeros[1]==2 && numeros[2]==3 && numeros[3]==4 && numeros[4]==5 && numeros[5]==6 && numeros[6]==7 && numeros[7]==8 && numeros[8]==""){
      swal ( "¡Ganaste! " , " ¡Buen Trabajo! " , "success" ),succes;
    }
  }
  if(numeros[5]=="" && numeros[8]!==""){
    let aux1=numeros[5];
    let aux2=numeros[8];
    numeros[8]=aux1;
    numeros[5]=aux2;
    document.getElementById("n9").innerHTML = numeros[8];
    document.getElementById("n6").innerHTML = numeros[5];
    con=con+1;
    document.getElementById("mov").innerHTML =con;
    if(numeros[0]==1 && numeros[1]==2 && numeros[2]==3 && numeros[3]==4 && numeros[4]==5 && numeros[5]==6 && numeros[6]==7 && numeros[7]==8 && numeros[8]==""){
      swal ( "¡Ganaste! " , " ¡Buen Trabajo! " ,"success" ),succes;
    }
  }
}
function b8(){
  if(numeros[4]=="" && numeros[7]!==""){
    let aux1=numeros[4];
    let aux2= numeros[7];
    numeros[4]=aux2;
    numeros[7]=aux1;
    document.getElementById("n5").innerHTML =numeros[4];
    document.getElementById("n8").innerHTML =numeros[7];
    con=con+1;
    document.getElementById("mov").innerHTML =con;
    if(numeros[0]==1 && numeros[1]==2 && numeros[2]==3 && numeros[3]==4 && numeros[4]==5 && numeros[5]==6 && numeros[6]==7 && numeros[7]==8 && numeros[8]==""){
      swal ( "¡Ganaste! " , " ¡Buen Trabajo! " , "success"),succes ;
    }
  }
  if(numeros[6]=="" && numeros[7]!==""){
    let aux1=numeros[6];
    let aux2=numeros[7];
    numeros[6]=aux2;
    numeros[7]=aux1;
    document.getElementById("n7").innerHTML =numeros[6];
    document.getElementById("n8").innerHTML =numeros[7];
    con=con+1;
    document.getElementById("mov").innerHTML =con;
    if(numeros[0]==1 && numeros[1]==2 && numeros[2]==3 && numeros[3]==4 && numeros[4]==5 && numeros[5]==6 && numeros[6]==7 && numeros[7]==8 && numeros[8]==""){
      swal ( "¡Ganaste! " , " ¡Buen Trabajo! " , "success" ),succes;
    }
  }
  if(numeros[8]=="" && numeros[7]!==""){
    let aux1=numeros[7];
    let aux2=numeros[8];
    numeros[8]=aux1;
    numeros[7]=aux2;
    document.getElementById("n9").innerHTML =numeros[8];
    document.getElementById("n8").innerHTML =numeros[7];
    con=con+1;
    document.getElementById("mov").innerHTML =con;
    if(numeros[0]==1 && numeros[1]==2 && numeros[2]==3 && numeros[3]==4 && numeros[4]==5 && numeros[5]==6 && numeros[6]==7 && numeros[7]==8 && numeros[8]==""){
      swal ( "¡Ganaste! " , " ¡Buen Trabajo! " , "success" )   ;
    }
  }

}
function b7(){
  if(numeros[3]=="" && numeros[6]!==""){
    let aux1=numeros[3];
    let aux2=numeros[6];
    numeros[3]=aux2;
    numeros[6]=aux1;
    document.getElementById("n4").innerHTML = numeros[3];
    document.getElementById("n7").innerHTML = numeros[6];
    con=con+1;
    document.getElementById("mov").innerHTML =con;
    if(numeros[0]==1 && numeros[1]==2 && numeros[2]==3 && numeros[3]==4 && numeros[4]==5 && numeros[5]==6 && numeros[6]==7 && numeros[7]==8 && numeros[8]==""){
      swal ( "¡Ganaste! " , " ¡Buen Trabajo! " , "success" )   ;
    }
  }
  if(numeros[7]=="" && numeros[6]!==""){
    let aux1=numeros[7];
    let aux2= numeros[6];
    numeros[7]=aux2;
    numeros[6]=aux1;
    document.getElementById("n8").innerHTML =numeros[7];
    document.getElementById("n7").innerHTML =numeros[6];
    con=con+1;
    document.getElementById("mov").innerHTML =con;
    if(numeros[0]==1 && numeros[1]==2 && numeros[2]==3 && numeros[3]==4 && numeros[4]==5 && numeros[5]==6 && numeros[6]==7 && numeros[7]==8 && numeros[8]==""){
      swal ( "¡Ganaste! " , " ¡Buen Trabajo! " ,"success" )   ;
    }
  }
}
function b6(){
  if(numeros[2]=="" && numeros[5]!==""){
    let aux1=numeros[2];
    let aux2=numeros[5];
    numeros[2]=aux2;
    numeros[5]=aux1;
    document.getElementById("n3").innerHTML =numeros[2];
    document.getElementById("n6").innerHTML =numeros[5];
    con=con+1;
    document.getElementById("mov").innerHTML =con;
    if(numeros[0]==1 && numeros[1]==2 && numeros[2]==3 && numeros[3]==4 && numeros[4]==5 && numeros[5]==6 && numeros[6]==7 && numeros[7]==8 && numeros[8]==""){
      swal ( "¡Ganaste! " , " ¡Buen Trabajo! " , "success" )   ;
    }
  }
  if(numeros[4]=="" && numeros[5]!==""){
    let aux1=numeros[4];
    let aux2=numeros[5];
    numeros[4]=aux2;
    numeros[5]=aux1;
    document.getElementById("n5").innerHTML =numeros[4];
    document.getElementById("n6").innerHTML =numeros[5]
    inerHTML =numeros[5];
    con=con+1;
    document.getElementById("mov").innerHTML =con;
    if(numeros[0]==1 && numeros[1]==2 && numeros[2]==3 && numeros[3]==4 && numeros[4]==5 && numeros[5]==6 && numeros[6]==7 && numeros[7]==8 && numeros[8]==""){
      swal ( "¡Ganaste! " , " ¡Buen Trabajo! " , "success" )   ;
    }
  }
  if(numeros[8]=="" && numeros[5]!==""){
    let aux1=numeros[8];
    let aux2= numeros[5];
    numeros[8]=aux2;
    numeros[5]=aux1;
    document.getElementById("n6").innerHTML =numeros[5];
    document.getElementById("n9").innerHTML =numeros[8];
    con=con+1;
    document.getElementById("mov").innerHTML =con;
    if(numeros[0]==1 && numeros[1]==2 && numeros[2]==3 && numeros[3]==4 && numeros[4]==5 && numeros[5]==6 && numeros[6]==7 && numeros[7]==8 && numeros[8]==""){
      swal ( "¡Ganaste! " , " ¡Buen Trabajo! " ,"success")   ;
    }
  }
}
function b5(){
  if(numeros[3]=="" && numeros[4]!==""){
    let aux1=numeros[3];
    let aux2=numeros[4];
    numeros[3]=aux2;
    numeros[4]=aux1;
    document.getElementById("n4").innerHTML =numeros[3];
    document.getElementById("n5").innerHTML =numeros[4];
    con=con+1;
    document.getElementById("mov").innerHTML =con;
    if(numeros[0]==1 && numeros[1]==2 && numeros[2]==3 && numeros[3]==4 && numeros[4]==5 && numeros[5]==6 && numeros[6]==7 && numeros[7]==8 && numeros[8]==""){
      swal ( "¡Ganaste! " , " ¡Buen Trabajo! " , "success" )   ;
    }
  }
  if(numeros[1]=="" && numeros[4]!==""){
    let aux1=numeros[1];
    let aux2=numeros[4];
    numeros[1]=aux2;
    numeros[4]=aux1;
    document.getElementById("n2").innerHTML =numeros[1];
    document.getElementById("n5").innerHTML =numeros[4];
    con=con+1;
    document.getElementById("mov").innerHTML =con;
    if(numeros[0]==1 && numeros[1]==2 && numeros[2]==3 && numeros[3]==4 && numeros[4]==5 && numeros[5]==6 && numeros[6]==7 && numeros[7]==8 && numeros[8]==""){
      swal ( "¡Ganaste! " , " ¡Buen Trabajo! " ,"success" )   ;
    }
  }
  if(numeros[5]=="" && numeros[4]!==""){
    let aux1=numeros[5];
    let aux2=numeros[4];
    numeros[5]=aux2;
    numeros[4]=aux1;
    document.getElementById("n5").innerHTML =numeros[4];
    document.getElementById("n6").innerHTML =numeros[5];
    con=con+1;
    document.getElementById("mov").innerHTML =con;
    if(numeros[0]==1 && numeros[1]==2 && numeros[2]==3 && numeros[3]==4 && numeros[4]==5 && numeros[5]==6 && numeros[6]==7 && numeros[7]==8 && numeros[8]==""){
      swal ( "¡Ganaste! " , " ¡Buen Trabajo! " ,"success" )   ;
    }
  }
  if(numeros[7]=="" && numeros[4]!==""){
    let aux1=numeros[7];
    let aux2= numeros[4];
    numeros[7]=aux2;
    numeros[4]=aux1;
    document.getElementById("n5").innerHTML =numeros[4];
    document.getElementById("n8").innerHTML =numeros[7];
    con=con+1;
    document.getElementById("mov").innerHTML =con;
    if(numeros[0]==1 && numeros[1]==2 && numeros[2]==3 && numeros[3]==4 && numeros[4]==5 && numeros[5]==6 && numeros[6]==7 && numeros[7]==8 && numeros[8]==""){
      swal ( "¡Ganaste! " , " ¡Buen Trabajo! " , "success" )   ;
    }
  }
}
function b4(){
  if(numeros[0]=="" && numeros[3]!==""){
    let aux1=numeros[0];
    let aux2=numeros[3];
    numeros[0]=aux2;
    numeros[3]=aux1;
    document.getElementById("n1").innerHTML =numeros[0];
    document.getElementById("n4").innerHTML =numeros[3];
    con=con+1;
    document.getElementById("mov").innerHTML =con;
    if(numeros[0]==1 && numeros[1]==2 && numeros[2]==3 && numeros[3]==4 && numeros[4]==5 && numeros[5]==6 && numeros[6]==7 && numeros[7]==8 && numeros[8]==""){
      swal ( "¡Ganaste! " , " ¡Buen Trabajo! " ,"success" )   ;
    }
  }
  if(numeros[4]=="" && numeros[3]!==""){
    let aux1=numeros[4];
    let aux2=numeros[3];
    numeros[4]=aux2;
    numeros[3]=aux1;
    document.getElementById("n5").innerHTML =numeros[4];
    document.getElementById("n4").innerHTML =numeros[3];
    con=con+1;
    document.getElementById("mov").innerHTML =con;
    if(numeros[0]==1 && numeros[1]==2 && numeros[2]==3 && numeros[3]==4 && numeros[4]==5 && numeros[5]==6 && numeros[6]==7 && numeros[7]==8 && numeros[8]==""){
      swal ( "¡Ganaste! " , " ¡Buen Trabajo! " ,"success" )   ;
    }
  }
  if(numeros[6]=="" && numeros[3]!==""){
    let aux1=numeros[6];
    let aux2=numeros[3];
    numeros[6]=aux2;
    numeros[3]=aux1;
    document.getElementById("n7").innerHTML =numeros[6];
    document.getElementById("n4").innerHTML =numeros[3];
    con=con+1;
    document.getElementById("mov").innerHTML =con;
    if(numeros[0]==1 && numeros[1]==2 && numeros[2]==3 && numeros[3]==4 && numeros[4]==5 && numeros[5]==6 && numeros[6]==7 && numeros[7]==8 && numeros[8]==""){
      swal ( "¡Ganaste! " , " ¡Buen Trabajo! " , "success" )   ;
    }
  }
}
function b3(){
  if(numeros[1]=="" && numeros[2]!==""){
    let aux1=numeros[1];
    let aux2=numeros[2];
    numeros[1]=aux2;
    numeros[2]=aux1;
    document.getElementById("n2").innerHTML =numeros[1];
    document.getElementById("n3").innerHTML =numeros[2];
    con=con+1;
    document.getElementById("mov").innerHTML =con;
    if(numeros[0]==1 && numeros[1]==2 && numeros[2]==3 && numeros[3]==4 && numeros[4]==5 && numeros[5]==6 && numeros[6]==7 && numeros[7]==8 && numeros[8]==""){
      swal ( "¡Ganaste! " , " ¡Buen Trabajo! " ,"success")   ;
    }
  }
  if(numeros[5]=="" && numeros[2]!==""){
    let aux1=numeros[5];
    let aux2=numeros[2];
    numeros[5]=aux2;
    numeros[2]=aux1;
    document.getElementById("n6").innerHTML =numeros[5];
    document.getElementById("n3").innerHTML =numeros[2];
    con=con+1;
    document.getElementById("mov").innerHTML =con;
    if(numeros[0]==1 && numeros[1]==2 && numeros[2]==3 && numeros[3]==4 && numeros[4]==5 && numeros[5]==6 && numeros[6]==7 && numeros[7]==8 && numeros[8]==""){
      swal ( "¡Ganaste! " , " ¡Buen Trabajo! " ,"success" )   ;
    }
  }
}
function b2(){
  if(numeros[0]=="" && numeros[1]!==""){
    let aux1=numeros[1];
    let aux2=numeros[0];
    numeros[1]=aux2;
    numeros[0]=aux1;
    document.getElementById("n2").innerHTML =numeros[1];
    document.getElementById("n1").innerHTML =numeros[0];
    con=con+1;
    document.getElementById("mov").innerHTML =con;
    if(numeros[0]==1 && numeros[1]==2 && numeros[2]==3 && numeros[3]==4 && numeros[4]==5 && numeros[5]==6 && numeros[6]==7 && numeros[7]==8 && numeros[8]==""){
      swal ( "¡Ganaste! " , " ¡Buen Trabajo! " , "success")   ;
    }
  }
  if(numeros[4]=="" && numeros[1]!==""){
    let aux1=numeros[1];
    let aux2=numeros[4];
    numeros[1]=aux2;
    numeros[4]=aux1;
    document.getElementById("n2").innerHTML =numeros[1];
    document.getElementById("n5").innerHTML =numeros[4];
    con=con+1;
    document.getElementById("mov").innerHTML =con;
    if(numeros[0]==1 && numeros[1]==2 && numeros[2]==3 && numeros[3]==4 && numeros[4]==5 && numeros[5]==6 && numeros[6]==7 && numeros[7]==8 && numeros[8]==""){
      swal ( "¡Ganaste! " , " ¡Buen Trabajo! " ,"success" )   ;
    }
  }
  if(numeros[2]=="" && numeros[1]!==""){
    let aux1=numeros[1];
    let aux2=numeros[2];
    numeros[1]=aux2;
    numeros[2]=aux1;
    document.getElementById("n2").innerHTML =numeros[1];
    document.getElementById("n3").innerHTML =numeros[2];
    con=con+1;
    document.getElementById("mov").innerHTML =con;
    if(numeros[0]==1 && numeros[1]==2 && numeros[2]==3 && numeros[3]==4 && numeros[4]==5 && numeros[5]==6 && numeros[6]==7 && numeros[7]==8 && numeros[8]==""){
      swal ( "¡Ganaste! " , " ¡Buen Trabajo! " , "success" )   ;
    }
  }
}
function b1(){
  if(numeros[1]=="" && numeros[0]!==""){
    let aux1=numeros[1];
    let aux2=numeros[0];
    numeros[1]=aux2;
    numeros[0]=aux1;
    document.getElementById("n2").innerHTML =numeros[1];
    document.getElementById("n1").innerHTML =numeros[0];
    con=con+1;
    document.getElementById("mov").innerHTML =con;
    if(numeros[0]==1 && numeros[1]==2 && numeros[2]==3 && numeros[3]==4 && numeros[4]==5 && numeros[5]==6 && numeros[6]==7 && numeros[7]==8 && numeros[8]==""){
      swal ( "¡Ganaste! " , " ¡Buen Trabajo! " , "success" )   ;
    }
  }
  if(numeros[3]=="" && numeros[0]!==""){
    let aux1=numeros[3];
    let aux2=numeros[0];
    numeros[3]=aux2;
    numeros[0]=aux1;
    document.getElementById("n1").innerHTML =numeros[0];
    document.getElementById("n4").innerHTML =numeros[3];
    con=con+1;
    document.getElementById("mov").innerHTML =con;
    if(numeros[0]==1 && numeros[1]==2 && numeros[2]==3 && numeros[3]==4 && numeros[4]==5 && numeros[5]==6 && numeros[6]==7 && numeros[7]==8 && numeros[8]==""){
      swal ( "¡Ganaste! " , " ¡Buen Trabajo! " ,"success" )   ;
    }
  }
}
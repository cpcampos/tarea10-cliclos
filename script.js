const output=document.getElementById('output1');
let result=' ';
/*for*/

for (let i=1; i<11;i++){
    result= result +' - '+ i;
    
  /*alert(result);*/
}
/*output.value=result;*/

/*do while*/

let i = 0; 
do { i += 1; console.log(i); } while (i < 5);


/* while*/
let n=0;
let x=0;
while (n < 3) {
    n++;
    x += n;
    console.log(x);
  }
  /* etiquetas*/
  x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log('Bucles externos: ' + x);
  x += 1;
  z = 1;
  while (true) {
	console.log('Bucles internos: ' + z);
	z += 1;
	if (z === 10 && x === 10) {
  	break labelCancelLoops;
	} else if (z === 10) {
  	break;
	}
  }
}

let m=prompt("Mahsulot turini kiriting (telefon, laptop, quloqchin)");
let s=Number(prompt("Mahsulot sonini kiriting"));
let c=prompt("Chegirma kartangiz bormi? (ha/yo'q)");
let n=0;
if(m==="telefon"){n=200;}
else if(m==="laptop") {n=800;} 
else if (m==="quloqchin") {n=50;} 
else {console.log(`Noto'g'ri m turi kiritildi.`);}
let j=n*s;if (c.toLowerCase()==="ha" && j>300) {j=j*0.9;}
alert(`Yakuniy to'lov summasi: $`+j.toFixed(2));
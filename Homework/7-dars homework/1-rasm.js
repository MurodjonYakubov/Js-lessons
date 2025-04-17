function ortacha(str) {
  const sonlar=str.split(',').map(Number);
  let i=0,sum=0;
  do{
    sum+=sonlar[i];
    i++;
  } while(i<sonlar.length);
  return sum/sonlar.length;
}
console.log(ortacha("5,10,15"));
  
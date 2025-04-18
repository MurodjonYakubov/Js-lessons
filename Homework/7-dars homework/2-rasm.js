const arr=[2, 8, 32];
let i=0,p=1,v=arr.length && Array.isArray(arr);
do{
  if(!v || typeof arr[i]!=='number' || arr[i]<=0){v=false;break;}
  p*=arr[i++];
} while(i<arr.length);
console.log("Geometrik o'rtacha:",v ? Math.pow(p,1/arr.length):NaN);

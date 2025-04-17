let s=0,c=0,n;
do{
    n=+prompt("Son:");
    s+=n;
    c++;
    if(s>100) break;
}while(c<10 && n<=100)
alert(`${c} ta urinishda ${c} ta son kiritdingiz. Yig'indi: ${s}`);
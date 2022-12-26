let n=parseInt(prompt("enter the value"));
let r;
let b=n;

for(i=1;i<=n.toString().length;i++){
    r=b%10;
    b=Math.floor(b/10);
    document.write(r+"<br>");
} 

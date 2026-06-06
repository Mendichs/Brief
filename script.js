
for(let i=0;i<150;i++){let s=document.createElement('div');s.className='star';s.innerHTML='✦';s.style.left=Math.random()*100+'%';s.style.top=Math.random()*100+'%';document.body.appendChild(s);}
for(let i=0;i<30;i++){let p=document.createElement('div');p.className='petal';p.innerHTML='🌹';p.style.left=Math.random()*100+'%';p.style.animationDuration=(8+Math.random()*8)+'s';document.body.appendChild(p);}
const msg=`ähhhm ja… hier meine Date Einladung mit Brieftaube und kleinem Hut.

Lass uns doch mal nett nach der Arbeit was unternehmen.

In Liebe oder so

Nils ❤️`;
document.getElementById('start').onclick=()=>{
document.getElementById('intro').style.display='none';
document.getElementById('pigeon').classList.add('fly');
setTimeout(()=>{
document.getElementById('envelope').classList.add('show');
const b=document.createElement('button');
b.textContent='Brief öffnen';
b.style.position='absolute';b.style.left='50%';b.style.bottom='8%';b.style.transform='translateX(-50%)';
b.onclick=()=>{
document.getElementById('letter').classList.add('open');
b.remove();
let i=0,t=document.getElementById('typed');
let h=setInterval(()=>{t.textContent+=msg[i]||'';i++;if(i>msg.length)clearInterval(h);},30);
};
document.body.appendChild(b);
},10000);
};

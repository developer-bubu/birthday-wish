document.addEventListener("DOMContentLoaded",()=>{
  const box=document.querySelector(".sparkles");
  function floatHeart(){
    const s=document.createElement("div");
    s.className="spark";
    s.textContent=["♡","♥","✦","✧"][Math.floor(Math.random()*4)];
    s.style.left=Math.random()*100+"vw";
    s.style.fontSize=(12+Math.random()*18)+"px";
    s.style.animationDuration=(5+Math.random()*5)+"s";
    box.appendChild(s);
    setTimeout(()=>s.remove(),10000);
  }
  setInterval(floatHeart,650);
});

function yesClicked(){
  const answer=document.getElementById("answer");
  answer.innerHTML="You just made my heart so happy. ♡<br><small style='font-family:DM Sans;font-size:12px;font-weight:400'>Here's to our forever, Sai.</small>";
  for(let i=0;i<70;i++){
    setTimeout(()=>{
      const c=document.createElement("div");
      c.className="confetti";
      c.textContent=["♥","♡","✦","✨","🌸"][Math.floor(Math.random()*5)];
      c.style.left=Math.random()*100+"vw";
      c.style.top="-20px";
      c.style.fontSize=(14+Math.random()*20)+"px";
      c.style.color=["#e77498","#d9a0b2","#e6b56d","#a987c7"][Math.floor(Math.random()*4)];
      document.body.appendChild(c);
      setTimeout(()=>c.remove(),3000);
    },i*22);
  }
}

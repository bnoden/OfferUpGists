const ExtendUI=((e,i)=>{e=(()=>{function r(){}isi=u=>{for(let v in u=document.querySelectorAll('.item-info-price'),u)'SOLD'===u[v].innerHTML&&(u[v].parentNode.parentNode.parentNode.style.opacity=0.25)},isi();let s=0,t=0;window.addEventListener('scroll',()=>{s=window.scrollY,t||(window.requestAnimationFrame(()=>{r(s),t=0}),t=1,isi())})})(),i=(()=>{function r(){}const s=document.createElement('div'),t=document.createElement('div'),u=document.createElement('iframe'),v=document.createElement('p');v.style.margin='0px',v.style.padding='0px',v.style.fontSize='20px',v.style.fontWeight='600',s.style.width='95%',s.style.height='800px',s.style.top='40px',s.style.left='2.5%',s.style.position='fixed',s.style.backgroundColor='#ececec',t.style.width='100%',t.style.height='1200px',t.style.position='fixed',t.style.top='0',t.style.left='0',t.style.backgroundColor='#0f94a8',u.style.width='100%',u.style.height='800px';let w=0;al=()=>{w||(document.body.appendChild(t),document.body.appendChild(s),s.appendChild(v),s.appendChild(u)),w=1},oiw=()=>{t.style.opacity=0.5,s.style.opacity=1,s.style.zIndex=100,t.style.zIndex=50},ciw=()=>{s.style.opacity=0,t.style.opacity=0,s.style.zIndex=-100,t.style.zIndex=-50,u.setAttribute('src','')},sp=z=>{for(let A in z=document.querySelectorAll('.vertical-middle'),z){let B=0;z[A].onmouseleave=()=>B=0,z[A].onmouseenter=()=>{B=1,setTimeout(()=>{if(B){u.src=z[A].parentNode.href,v.innerHTML=`<a href=${u.src} target='_blank'>${u.src}</a>`,al();const C=v.querySelector('a'),D='#0f94a8';C.style.color=D,C.style.textDecoration='none',C.onmouseover=()=>C.style.color='#01505C',C.onmouseleave=()=>C.style.color=D,oiw()}},1250)}}},sp();let x=0,y=0;window.addEventListener('scroll',()=>{x=window.scrollY,y||(window.requestAnimationFrame(()=>{r(x),y=0}),y=1,sp())}),t.onclick=()=>ciw()})()})();

(()=>{"use strict";const e=()=>{let e=document.createElement("div");e.id="menuContainer";let t=document.createElement("h1");t.innerText="Menú";let n=document.createElement("h2"),d=document.createElement("h2"),a=document.createElement("h2");n.innerText="Entradas",d.innerText="Plato Principal",a.innerText="Postres";let c=document.createElement("h3"),l=document.createElement("h3"),i=document.createElement("h3"),m=document.createElement("h3"),r=document.createElement("h3");c.innerText="Ensalada Marina",l.innerText="Sopa del Día",i.innerText="Pastel de Jaiba",m.innerText="Suspiro Limeño",r.innerText="Ensalada de Frutas",e.appendChild(t),e.appendChild(n),e.appendChild(c),e.appendChild(l),e.appendChild(d),e.appendChild(i),e.appendChild(a),e.appendChild(m),e.appendChild(r),document.getElementById("content").appendChild(e)};let t=(...e)=>{let t=e[e.length-1];for(let n=0;n<e.length-1;n++)t.appendChild(e[n])},n=(e,n)=>{let d=document.createElement("div"),a=document.createElement("a"),c=document.createElement("span");c.id=e,c.innerHTML="";let l=document.createElement("span");return l.innerHTML=n,l.classList.add("contact"),t(c,l,a),t(a,d),d},d=()=>{let e=n("facebook"," Facebook");e.firstChild.href="www.facebook.com";let d=n("twitter"," Twitter");d.firstChild.href="www.twitter.com";let a=n("instagram"," Instagram");a.firstChild.href="www.instagram.com";let c=document.createElement("div");t(e,a,d,c);let l=document.createElement("div");l.id="contactImage";let i=document.createElement("div");i.id="contactContainer",t(c,l,i),document.getElementById("content").appendChild(i)};const a=()=>{let e=document.createElement("h1");e.innerText="Cafe del Mar";let t=document.createElement("h2");t.innerText="El mejor café de la sona, ubicado en privilegiado muelle. Gastronomía autoctona, y atención de lujo";let n=document.createElement("div");n.id="container",n.appendChild(e),n.appendChild(t),document.getElementById("content").appendChild(n)},c=()=>{let e=document.createElement("span"),t=document.createElement("span"),n=document.createElement("span");e.innerText="Home",e.id="nav1",t.innerText="Menu",t.id="nav2",n.innerText="Contact",n.id="nav3";let d=document.createElement("div");d.id="navbar",d.appendChild(e),d.appendChild(t),d.appendChild(n),document.getElementById("content").appendChild(d)},l=()=>{document.getElementById("content").innerHTML="",c(),document.getElementById("nav2").addEventListener("click",l),document.getElementById("nav2").addEventListener("click",e),document.getElementById("nav1").addEventListener("click",l),document.getElementById("nav1").addEventListener("click",a),document.getElementById("nav3").addEventListener("click",l),document.getElementById("nav3").addEventListener("click",d)};c(),a(),document.getElementById("nav2").addEventListener("click",l),document.getElementById("nav2").addEventListener("click",e),document.getElementById("nav1").addEventListener("click",l),document.getElementById("nav1").addEventListener("click",a),document.getElementById("nav3").addEventListener("click",l),document.getElementById("nav3").addEventListener("click",d)})();
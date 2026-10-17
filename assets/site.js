(function(){
var d=document,h=d.documentElement;
var tg=d.getElementById('tg');
function sync(){var l=h.getAttribute('data-theme')==='light';tg.textContent=l?'☾':'☀';tg.setAttribute('aria-label',l?'Switch to dark theme':'Switch to light theme')}
sync();
tg.addEventListener('click',function(){var t=h.getAttribute('data-theme')==='light'?'dark':'light';h.setAttribute('data-theme',t);try{localStorage.setItem('portfolio-theme',t)}catch(e){}sync()});
var nt=d.querySelector('.nav-toggle'),nl=d.getElementById('primary-nav');
nt.addEventListener('click',function(){var o=nl.classList.toggle('open');nt.setAttribute('aria-expanded',o?'true':'false')});
var els=d.querySelectorAll('.rv');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});els.forEach(function(x){io.observe(x)})}else els.forEach(function(x){x.classList.add('in')});
var fb=d.querySelectorAll('.filter');
fb.forEach(function(b){b.addEventListener('click',function(){
  fb.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});
  var c=b.getAttribute('data-f');
  d.querySelectorAll('.project-card').forEach(function(card){card.style.display=(c==='all'||card.getAttribute('data-category')===c)?'':'none'});
})});
var f=d.getElementById('cf');
if(f){f.addEventListener('submit',function(ev){
  ev.preventDefault();
  var hint=d.getElementById('fh'),btn=f.querySelector('button'),txt=btn.textContent;
  btn.disabled=true;btn.textContent='Sending…';hint.textContent='Sending your message…';
  var fd=new FormData(f);fd.append('_subject','New message from abrarimtiyaz.in');fd.append('_template','table');fd.append('_captcha','false');
  fetch('https://formsubmit.co/ajax/abrarimtiyaz01@gmail.com',{method:'POST',headers:{'Accept':'application/json'},body:fd})
   .then(function(r){return r.ok?r.json():Promise.reject(r)})
   .then(function(){hint.textContent='✓ Message sent. Thanks for reaching out!';btn.textContent='Sent ✓';f.reset()})
   .catch(function(){hint.textContent='Something went wrong. Please email me directly instead.';btn.disabled=false;btn.textContent=txt});
})}
})();

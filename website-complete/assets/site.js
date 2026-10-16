(function(){
var P=window.PROJECTS||[],b=document.body,h=document.documentElement;
function e(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
var th=null;try{th=localStorage.getItem('portfolio-theme')}catch(x){}
h.setAttribute('data-theme',th||'dark');
var page=b.getAttribute('data-page'),slug=b.getAttribute('data-slug');
var nav='<nav aria-label="Primary"><div class="w"><a class="id" href="/">AI // portfolio.v1</a><div class="nr"><a href="/">Home</a><a href="/projects/"'+(page==='list'||page==='project'?' class="on"':'')+'>Projects</a><a href="https://github.com/abrarimtiyaz01" target="_blank" rel="noopener">GitHub</a><a href="/#contact">Contact</a><button id="tt" type="button" aria-label="Toggle light and dark theme"></button></div></div></nav>';
var main='';
if(page==='list'){
  main='<main class="w"><a class="back" href="/">← Home</a><p class="kick">// 04 Projects</p><h1>Things I have built</h1><p class="lead">Software, machine learning and electronics projects. Open any project for the full story.</p><div class="cards">'+
  P.map(function(p){return'<a class="card" href="/'+p.slug+'/"><h2>'+e(p.title)+'</h2><p>'+e(p.short)+'</p><span class="go">View project →</span></a>'}).join('')+'</div></main>';
}else{
  var i=P.map(function(p){return p.slug}).indexOf(slug),p=P[i];
  if(!p){main='<main class="w"><h1>Project not found</h1><p class="lead"><a href="/projects/">See all projects</a></p></main>'}
  else{
    var pv=P[(i+P.length-1)%P.length],nx=P[(i+1)%P.length];
    main='<main class="w"><a class="back" href="/projects/">← All projects</a><p class="kick">'+e(p.type)+'</p><h1>'+e(p.title)+'</h1><p class="lead">'+e(p.desc)+'</p>'+
    '<div class="chips">'+p.tags.map(function(t){return'<span class="chip">'+e(t)+'</span>'}).join('')+'</div>'+
    '<div class="grid"><div class="blk"><b>Problem solved</b>'+e(p.problem)+'</div><div class="blk"><b>Features</b>'+e(p.features)+'</div><div class="blk"><b>Challenges</b>'+e(p.challenges)+'</div><div class="blk"><b>What I learned</b>'+e(p.learned)+'</div></div>'+
    (p.links.length?'<div class="links">'+p.links.map(function(l){var ext=/^https?:/.test(l[1]);return'<a class="btn'+(l[2]?' p':'')+'" href="'+e(l[1])+'"'+(ext?' target="_blank" rel="noopener"':'')+'>'+e(l[0])+'</a>'}).join('')+'</div>':'')+
    '<div class="pn"><a href="/'+pv.slug+'/">← '+e(pv.title)+'</a><a href="/'+nx.slug+'/">'+e(nx.title)+' →</a></div></main>';
  }
}
b.innerHTML=nav+main+'<footer>© 2026 Abrar Imtiyaz · <a href="/">abrarimtiyaz.in</a></footer>';
var t=document.getElementById('tt');
function sync(){t.textContent=h.getAttribute('data-theme')==='light'?'☀':'🌙'}
sync();
t.addEventListener('click',function(){var n=h.getAttribute('data-theme')==='light'?'dark':'light';h.setAttribute('data-theme',n);try{localStorage.setItem('portfolio-theme',n)}catch(x){}sync()});
})();

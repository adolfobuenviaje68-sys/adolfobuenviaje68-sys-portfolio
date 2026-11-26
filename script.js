(function(){
  var roles=['IT Student','Computer Technician','IT Support Trainee','CSS NC II Holder'];
  var el=document.getElementById('typed');
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce){el.textContent=roles[0];}
  else{
    var r=0,i=0,del=false;
    (function tick(){
      var w=roles[r];
      el.textContent=w.slice(0,i);
      if(!del&&i===w.length){del=true;return setTimeout(tick,1400);}
      if(del&&i===0){del=false;r=(r+1)%roles.length;return setTimeout(tick,350);}
      i+=del?-1:1;
      setTimeout(tick,del?40:85);
    })();
  }

  var burger=document.getElementById('burger'),menu=document.getElementById('menu');
  function setMenu(o){menu.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Close menu':'Open menu');}
  burger.addEventListener('click',function(){setMenu(!menu.classList.contains('open'));});
  menu.addEventListener('click',function(e){if(e.target.tagName==='A')setMenu(false);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false);});

  var links=[].slice.call(menu.querySelectorAll('a'));
  var secs=links.map(function(a){return document.querySelector(a.getAttribute('href'));});
  function spy(){
    var y=window.scrollY+120,cur=0;
    secs.forEach(function(s,i){if(s&&s.offsetTop<=y)cur=i;});
    if(window.innerHeight+window.scrollY>=document.body.scrollHeight-4)cur=secs.length-1;
    links.forEach(function(a,i){a.classList.toggle('active',i===cur);if(i===cur)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current');});
  }
  window.addEventListener('scroll',spy,{passive:true});spy();

  var rv=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window&&!reduce){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.08});
    rv.forEach(function(n){io.observe(n);});
  }else{rv.forEach(function(n){n.classList.add('in');});}

  document.getElementById('year').textContent=new Date().getFullYear();
})();

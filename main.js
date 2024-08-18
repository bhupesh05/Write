/**
 For pragati ugrendra a daughter 
  * Dated 2 aug 2024
**/

 /**
 
 one canvas like notebook with pen and eraser, restart and buttons of changing letters (symbols ) abcd
 
 in setting 
 landscape mode     not working properly dont need improvement
 
 pensize can change in code
 pencolor fixed
 notebook mode 4 line, 2 line, 3 line , squares.  no need 

 paint work done
/**

/*
 * causing resize when keyboard appear disappear
 */
 
 /* 
window.addEventListener('resize', e => {
    this.location = this.location
    //refreshing page...
    //rsize();
  })  // added rsize
/**/

pnsz=5    //pen size
let przltr='B C D'   //letter 

music=new Audio()
music.src='Happykids.mp3'
music.loop=true
music.volume=0.4


blank =(e)=>{
  //cs('blank')
}

window.ondrag=blank;
//try to disable refresh in browser on swipe down.  undone

tor=110
hh=innerHeight
lfn=mfr(hh/210)
hh=(hh-tor)/lfn
ww=innerWidth;
wfn=mfr((ww-20)/67/2)+1

ac=-1;

_=[['abc','bcd','def','fgh','hij','jkl','lmn','nop','pqr','rst','tuv','vwx','xyz'],['0 1 2','1 2 3','3 4 5','5 6 7','7 8 9','9 10']]



let cn1 = createEl({'class':'cnvs'},'',"canvas")

let cn = createEl({'class':'cnvs','style':{background:'transparent'}},'',"canvas")

var cx=cn1.getContext("2d")
var cx1 = cn.getContext("2d")
cn.width=cn1.width=innerWidth
cn.height=cn1.height=innerHeight

pen=true

cler=()=>{
  cx.clearRect(0,0,innerWidth,innerHeight)
  sprites()
}
 
cx1font='95px arial' //cursive work 
  
wrte=()=>{
  cx1.fillStyle="#ffee99aa"
  cx1.font=cx1font
  var ty=przltr
  if(!nums.checked){
  if(!normal.checked){
  if(!caps.checked) ty=ty.toLowerCase();
  else ty=ty.toUpperCase()
  }
  cx1.fillText(ty,20,hh-6)
  }
  else{
    for(i in ty)
    cx1.fillText(ty[i],i*tor+15,hh-6)
  }
}

tswch=()=>{
  var n1=rni(20),n2=rni(20)
  var n3=n1+n2
  var n4=-1
  /**/
  n4=parseInt(prompt("Please solve to change letters\n"+n1+"+"+n2+'=',-1));
 if(n4==-1||isNaN(n4)) return
 else if(n4!=n3){ 
    alert('Wrong answer! correct is '+n3)
    return 
  }
  /**/
  swch(div1)
  swch(div2,true)
}

typed=()=>{
  //inp.value="abc"
  var r = inp.value
  var re =/[^A-z\d\s]/
  if(r.length==0||re.test(r)) {
    alert('Type some..');
    r=nums.checked?'1 2 3':'bcd';
    r=sprit.checked?r:'';
  }
  re=/\d{1,2}/g
  //keyboard was causing resize so it was refreshing
  
  if(nums.checked=re.test(r))
  {
    var re2=/[A-z]/g
    if(re2.test(r)) {
      alert('Bad input')
      r='1011'
    }
    r=r.match(re)
    for(i in r)
      if(r[i].length==1) r[i]='  '+r[i]
    //r=r.join('')
    przltr=r
  }
  else{
  r=r.replace(/ /g,'')
  if(r.length>wfn) r= r.slice(0,wfn)
  var rr=""
  for(i=0;i<r.length;i++)
      rr=rr+r[i]+'  ';
  przltr=rr
  }
  
  if(cursive.checked) cx1font ="95px cursive"
  else cx1font ="95px arial"
  
  if(music_.checked) music.volume=0.4
  else music.volume=0
  
  cler()
}

div=createEl()

div1=createEl({'prn':div})

btn=createEl({'class':'bbtn sbtn','events':{'click':()=>{
  pen=!pen;
  btn.innerHTML=pen?'✏️👈':'⬜👈';
  sprites()
}},'prn':div1},'✏️👈',"button")

/** //not necessary
btn2=createEl({'class':'bbtn','events':{'click':()=>{
  sprite=!sprite;
  btn2.innerHTML=sprite?'📕':'📗';
  sprites();
  //cl(pen)
}},'prn':div},'📕',"button")
*/
bt6=createEl({'class':'bbtn','events':{'click':tswch
},'prn':div1},'⚙️','button')

bt5=createEl({'class':'bbtn','events':{'click':()=>{ cler();
ac++;
ac=ac%_[nums.checked?1:0].length
//cl(nums.checked+' '+ac)
  inp.value=_[nums.checked?1:0][ac]
  typed();
}},'prn':div1},'⭕','button')

bt1=createEl({'class':'bbtn','events':{'click':cler},'prn':div1},'❌','button')

div2=createEl({'class':'box'},"Please write upto "+wfn+" letters<br>",)

inp=createEl({'prn':div2},'','input')
br(div2,2)

var iop =createEl({'prn':div2},'Cursive: ')
cursive=createEl({'class':'swtch','prn':iop,'attrb':{'type':'checkbox'}},'','input')

iop =createEl({'prn':div2},'Capital: ')
caps=createEl({'class':'swtch','prn':iop,'attrb':{'type':'checkbox','checked':true}},'','input')

iop =createEl({'prn':div2},'Number: ')
nums = createEl({ 'class': 'swtch', 'prn': iop, 'attrb': { 'type': 'checkbox'} }, '', 'input')

iop =createEl({'prn':div2},'Sprite: ')
sprit = createEl({ 'class': 'swtch', 'prn': iop, 'attrb': { 'type': 'checkbox','checked':true} }, '', 'input')

iop =createEl({'prn':div2},'Cap + small: ')
normal = createEl({ 'class': 'swtch', 'prn': iop, 'attrb': { 'type': 'checkbox'} }, '', 'input')

iop = createEl({ 'prn': div2 }, 'Music: ')
music_ = createEl({ 'class': 'swtch', 'prn': iop, 'attrb': { 'type': 'checkbox','checked':true } }, '', 'input')

br(div2)
btn7=createEl({'class':'bbtn','prn':div2,'events':{'click':typed}},'✅','button')

btn7=createEl({'class':'bbtn','style':{'left':'100px'},'prn':div2,'events':{'click':()=>{swch(div1,true);swch(div2);cler();}}},'❌','button')

_draw = (f = () => { }, d = { c: '#f00', lw: 0, ss: "#000",cf:cx}) => {
    d.cf.beginPath()
    f()
    d.cf.closePath()
    d.cf.fillStyle = d.c
    d.cf.fill()
    if (d.lw > 0) {
      d.cf.lineWidth = d.lw
      d.cf.strokeStyle = d.ss
      d.cf.stroke()
    }
  }

boX = ({ x = x, y = y, w=20,h=20,c = "#f00", lw = 0, ss = '#000',cf=cx }) => {
    _draw(() => {
      cf.fillStyle = c
      cf.fillRect(x-w/2, y-h/2, w,h)
    }, { c: c, lw: lw, ss: ss ,cf:cf})
    return { x: x, y: y }
  }
  

start=(e)=>{
 cx.beginPath()
 cx.lineWidth=pnsz;
 cx.strokeStyle="#ffe"
 cx.moveTo(e.touches[0].clientX,e.touches[0].clientY)
}

move=(e)=>{
  var xx=e.touches[0].clientX;
  var yy=e.touches[0].clientY;
  sprites()
  var tst="✏️"
  if(pen){
  cx.lineTo(xx,yy)
  cx.stroke()
  }
  else{
    boX({x:xx,y:yy,c:"#00f"})
    tst="⬜"
  }
  cx1.fillStyle="#fff"
  cx1.font="30px serif"
  cx1.fillText(tst,xx-40,yy)
}

end = () => {
  cx.closePath()
}

document.onclick=()=>{
  music.play()
  document.onclick=null
}

cn.addEventListener("touchstart",start)
cn.addEventListener("touchmove",move)
cn.addEventListener("touchend",end)

//sprites
sprites=()=>{
  cx1.clearRect(0,0,innerWidth,innerHeight)
  wrte()
if(!sprit.checked) return 

cx1.strokeStyle="#ff220098"
cx1.lineWidth=2
cx1.beginPath()
if(nums.checked){
  var bx= innerWidth>innerHeight?innerWidth:innerHeight;
  bx=bx/100
  for(i=0;i<bx;i++){
    cx1.moveTo(0,95+i*95)
    cx1.lineTo(ww,95+i*95)
    cx1.stroke()
    cx1.moveTo(15 + i*tor,0)
    cx1.lineTo(15 + i*tor,innerHeight)
    cx1.stroke()
  }
}
else{
for(var i=0;i<lfn;i++){
  for(var j=0;j<4;j++){
    cx1.moveTo(0,tor+hh*i+35*j)
    cx1.lineTo(ww,tor+hh*i+35*j)
    cx1.stroke()
}}
}
cx1.closePath()
}

sprites()

/**
 * find some fonts support html canvas for kids not cursive 
 * find some music
 * 
 */
 
 

let cl = (x) => { console.log(x) }
let cw = (x) => { console.warn(x) }
let cs = (x) => { console.info(x) }
let ce = (x) => { console.error(x) }
let mr = (x) => { return Math.round(x) }
let mfr = (x) => { return Math.floor(x) }
let mrn = () => { return Math.random() }
let mbs = (x) => { return Math.abs(x) }
let rn = (s = true, mn = 0.5) => { return s ? mrn() : rni(1, mn) }
let rni = (mx = 255, mn = 0) => { return mr(rn() * (mx - mn)) + mn; }  // rni(1) include 1
let rnbul = (d=0.5) => { return rn() > d }
let rch = () => { return rnbul() ? 1 : -1; }
let swch = (a, t = false) => {
  if (t) a.style.display = "block";
  else a.style.display = "none";
}
let suff = (ar) => {
  let ci = ar.length,
    tem, ri;
  while (0 !== ci) {
    ri = rni(0, ci);
    ci -= 1;
    tem = ar[ci];
    ar[ci] = ar[ri];
    ar[ri] = tem
  }
  return ar;
}
let arrAvg = (a) => {
  let sum = 0
  for (var i = 0; i < a.length; i++)
    sum = sum + parseInt(a[i]);
  return sum / a.length;
}

let _tag = (s) => { return document.getElementsByTagName(s) }
let _cln = (s) => { return document.getElementsByClassName(s) }


//createEl updateEl is same
function createEl(v = { /* class,style,attrb, events,rmevents,stylep,prn /*parent node *\/,bfn*/ }, data = "", elm = "div")
{
  //document select element for updating various attributes of el 
  if(elm==undefined||elm!=HTMLElement)
  var el = document.createElement(elm)
  else el=elm
  var tp
  
  // or just add new function taking rest below code like updateEl and call in this function;
  if(data!="")
  el.innerHTML = data;

  if ("class" in v) {
    tp = v["class"]
    el.className = tp
  }
  if ("style" in v) {
    tp = v["style"]
    for (key in tp)
      el.style.setProperty(key, tp[key])
  }
  if ("attrb" in v)
  {
    tp = v["attrb"]
    for (key in tp)
      el.setAttribute(key, tp[key])
  }
  if ("events" in v) {
    tp = v["events"]
    for (key in tp)
      el.addEventListener(key, tp[key])
  }
  if ("rmevents" in v) {
    tp = v["rmevents"]
    for (key in tp)
      el.removeEventListener(key, tp[key])
  }
  if ("stylep" in v)
  {
    tp = v["stylep"]
    for (key in tp)
      el.style.setAttribute(key, tp[key])
  }
  //cl(v)
  if ("bfn" in v) {
    tp = v["bfn"].parent
    tp.insertBefore(el, v["bfn"])
  }
  else if ("prn" in v) {
    if (v["prn"] != null)
      v['prn'].appendChild(el)
    return el
  }
  else document.body.appendChild(el)
  return el;
}


br=(el=document.body,n=1)=>{
  for(var i=0;i<n;i++)
   el.appendChild(document.createElement('br'))
}

/**/
let root = document.querySelector(':root');
let nv = navigator
let wn = window

window.addEventListener("load", () => {
  //cl("hello b");
  
})

lcm=(a,b)=>{
  if(a%b==a)
      lcm(b,a)
  else if(b%a==0)
      return b
  else 
     return b*a
}

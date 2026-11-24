/* Shared helpers for the showcase dashboards: escaping, ids, browser storage, an edit dialog, and an undo message. */
var K=(function(){
  "use strict";
  function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
  function uid(){return Math.random().toString(36).slice(2,10)}
  function load(key,fallback){try{var v=JSON.parse(localStorage.getItem(key)||"null");if(v)return v}catch(e){}return fallback()}
  function save(key,data){try{localStorage.setItem(key,JSON.stringify(data))}catch(e){}}
  var ICON={
    edit:'<span class="material-symbols-outlined" aria-hidden="true">edit</span>',
    x:'<span class="material-symbols-outlined" aria-hidden="true">delete</span>'
  };

  var host=document.createElement("div");
  host.innerHTML='<div class="scrim" id="k-scrim" hidden><form class="dialog" id="k-dlg" role="dialog" aria-modal="true" aria-labelledby="k-t"><h2 id="k-t"></h2><div id="k-f" class="k-fields"></div><div class="dlg-actions"><button type="button" class="btn text danger" id="k-del">Delete</button><span style="flex:1"></span><button type="button" class="btn text" id="k-cancel">Cancel</button><button type="submit" class="btn filled">Save</button></div></form></div><div class="snack" id="k-snack" hidden role="status"><span id="k-st"></span><button type="button" id="k-undo">Undo</button></div>';
  document.body.appendChild(host);
  function $(id){return document.getElementById(id)}
  var cur=null,last=null;

  /* form({title, fields:[{k,l,type,options,ph}], values, onSave(vals), onDelete()}) */
  function form(o){
    cur=o;var vals=o.values||{};
    $("k-t").textContent=o.title;
    $("k-del").hidden=!o.onDelete;
    $("k-f").innerHTML=o.fields.map(function(f){
      var v=vals[f.k]==null?"":vals[f.k],id="kf-"+f.k,inner;
      if(f.type==="textarea")inner='<textarea id="'+id+'"'+(f.ph?' placeholder="'+esc(f.ph)+'"':'')+'>'+esc(v)+'</textarea>';
      else if(f.type==="select")inner='<select id="'+id+'">'+f.options.map(function(op){
        var val=Array.isArray(op)?op[0]:op,lab=Array.isArray(op)?op[1]:op;
        return '<option value="'+esc(val)+'"'+(String(val)===String(v)?" selected":"")+'>'+esc(lab)+'</option>';
      }).join("")+'</select>';
      else inner='<input id="'+id+'" type="'+(f.type||"text")+'" value="'+esc(v)+'"'+(f.ph?' placeholder="'+esc(f.ph)+'"':'')+(f.type==="number"?' min="1"':'')+'>';
      return '<label class="field" for="'+id+'"><span>'+esc(f.l)+'</span>'+inner+'</label>';
    }).join("");
    last=document.activeElement;
    $("k-scrim").hidden=false;
    var first=$("k-f").querySelector("input,textarea,select");if(first)first.focus();
  }
  function close(){$("k-scrim").hidden=true;cur=null;if(last&&document.contains(last))last.focus()}
  $("k-dlg").addEventListener("submit",function(e){
    e.preventDefault();if(!cur)return;
    var vals={},firstKey=cur.fields[0].k;
    cur.fields.forEach(function(f){var el=$("kf-"+f.k);vals[f.k]=f.type==="number"?Math.max(1,parseInt(el.value,10)||1):el.value.trim()});
    if(!vals[firstKey]){$("kf-"+firstKey).focus();return}
    var fn=cur.onSave;close();fn(vals);
  });
  $("k-cancel").addEventListener("click",close);
  $("k-del").addEventListener("click",function(){if(cur&&cur.onDelete){var fn=cur.onDelete;close();fn()}});
  $("k-scrim").addEventListener("mousedown",function(e){if(e.target===$("k-scrim"))close()});
  document.addEventListener("keydown",function(e){if(e.key==="Escape"&&cur)close()});

  var undoFn=null,timer=null;
  function toast(msg,undo){
    undoFn=undo||null;$("k-st").textContent=msg;$("k-undo").hidden=!undo;$("k-snack").hidden=false;
    clearTimeout(timer);timer=setTimeout(function(){$("k-snack").hidden=true;undoFn=null},7000);
  }
  $("k-undo").addEventListener("click",function(){var fn=undoFn;undoFn=null;$("k-snack").hidden=true;if(fn)fn()});

  return {esc:esc,uid:uid,load:load,save:save,form:form,toast:toast,ICON:ICON};
})();

tinymce.PluginManager.add("textcolor",function(e){function t(){var t,o,l=[];for(o=e.settings.textcolor_map||["000000","Black","993300","Burnt orange","333300","Dark olive","003300","Dark green","003366","Dark azure","000080","Navy Blue","333399","Indigo","333333","Very dark gray","800000","Maroon","FF6600","Orange","808000","Olive","008000","Green","008080","Teal","0000FF","Blue","666699","Grayish blue","808080","Gray","FF0000","Red","FF9900","Amber","99CC00","Yellow green","339966","Sea green","33CCCC","Turquoise","3366FF","Royal blue","800080","Purple","999999","Medium gray","FF00FF","Magenta","FFCC00","Gold","FFFF00","Yellow","00FF00","Lime","00FFFF","Aqua","00CCFF","Sky blue","993366","Red violet","C0C0C0","Silver","FF99CC","Pink","FFCC99","Peach","FFFF99","Light yellow","CCFFCC","Pale green","CCFFFF","Pale cyan","99CCFF","Light sky blue","CC99FF","Plum","FFFFFF","White"],t=0;t<o.length;t+=2)l.push({text:o[t+1],color:o[t]});return l}function o(){var o,l,r,a,c,i,n,F,d,s=this;for(o=t(),r='<table class="mce-grid mce-grid-border mce-colorbutton-grid" role="list" cellspacing="0"><tbody>',a=o.length-1,c=e.settings.textcolor_rows||5,i=e.settings.textcolor_cols||8,F=0;c>F;F++){for(r+="<tr>",n=0;i>n;n++)d=F*i+n,d>a?r+="<td></td>":(l=o[d],r+='<td><div id="'+s._id+"-"+d+'" data-mce-color="'+l.color+'" role="option" tabIndex="-1" style="'+(l?"background-color: #"+l.color:"")+'" title="'+l.text+'"></div></td>');r+="</tr>"}return r+="</tbody></table>"}function l(t){var o,l=this.parent();(o=t.target.getAttribute("data-mce-color"))&&(this.lastId&&document.getElementById(this.lastId).setAttribute("aria-selected",!1),t.target.setAttribute("aria-selected",!0),this.lastId=t.target.id,l.hidePanel(),o="#"+o,l.color(o),e.execCommand(l.settings.selectcmd,!1,o))}function r(){var t=this;t._color&&e.execCommand(t.settings.selectcmd,!1,t._color)}e.addButton("forecolor",{type:"colorbutton",tooltip:"Text color",selectcmd:"ForeColor",panel:{role:"application",ariaRemember:!0,html:o,onclick:l},onclick:r}),e.addButton("backcolor",{type:"colorbutton",tooltip:"Background color",selectcmd:"HiliteColor",panel:{role:"application",ariaRemember:!0,html:o,onclick:l},onclick:r})});

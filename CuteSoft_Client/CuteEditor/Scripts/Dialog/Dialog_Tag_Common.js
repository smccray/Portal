var OxO9a75=["inp_class","inp_width","inp_height","sel_align","sel_textalign","sel_float","inp_forecolor","img_forecolor","inp_backcolor","img_backcolor","inp_tooltip","value","className","width","style","height","align","styleFloat","cssFloat","textAlign","title","backgroundColor","color","","class","onclick"];var inp_class=Window_GetElement(window,OxO9a75[0],true);var inp_width=Window_GetElement(window,OxO9a75[1],true);var inp_height=Window_GetElement(window,OxO9a75[2],true);var sel_align=Window_GetElement(window,OxO9a75[3],true);var sel_textalign=Window_GetElement(window,OxO9a75[4],true);var sel_float=Window_GetElement(window,OxO9a75[5],true);var inp_forecolor=Window_GetElement(window,OxO9a75[6],true);var img_forecolor=Window_GetElement(window,OxO9a75[7],true);var inp_backcolor=Window_GetElement(window,OxO9a75[8],true);var img_backcolor=Window_GetElement(window,OxO9a75[9],true);var inp_tooltip=Window_GetElement(window,OxO9a75[10],true);UpdateState=function UpdateState_Common(){} ;SyncToView=function SyncToView_Common(){inp_class[OxO9a75[11]]=element[OxO9a75[12]];inp_width[OxO9a75[11]]=element[OxO9a75[14]][OxO9a75[13]];inp_height[OxO9a75[11]]=element[OxO9a75[14]][OxO9a75[15]];sel_align[OxO9a75[11]]=element[OxO9a75[16]];if(Browser_IsWinIE()){sel_float[OxO9a75[11]]=element[OxO9a75[14]][OxO9a75[17]];} else {sel_float[OxO9a75[11]]=element[OxO9a75[14]][OxO9a75[18]];} ;sel_textalign[OxO9a75[11]]=element[OxO9a75[14]][OxO9a75[19]];inp_tooltip[OxO9a75[11]]=element[OxO9a75[20]];inp_forecolor[OxO9a75[11]]=revertColor(element[OxO9a75[14]].color);inp_forecolor[OxO9a75[14]][OxO9a75[21]]=inp_forecolor[OxO9a75[11]];img_forecolor[OxO9a75[14]][OxO9a75[21]]=inp_forecolor[OxO9a75[11]];inp_backcolor[OxO9a75[11]]=revertColor(element[OxO9a75[14]].backgroundColor);inp_backcolor[OxO9a75[14]][OxO9a75[21]]=inp_backcolor[OxO9a75[11]];img_backcolor[OxO9a75[14]][OxO9a75[21]]=inp_backcolor[OxO9a75[11]];} ;SyncTo=function SyncTo_Common(element){element[OxO9a75[12]]=inp_class[OxO9a75[11]];try{element[OxO9a75[14]][OxO9a75[13]]=inp_width[OxO9a75[11]];element[OxO9a75[14]][OxO9a75[15]]=inp_height[OxO9a75[11]];} catch(x){} ;element[OxO9a75[16]]=sel_align[OxO9a75[11]];if(Browser_IsWinIE()){element[OxO9a75[14]][OxO9a75[17]]=sel_float[OxO9a75[11]];} else {element[OxO9a75[14]][OxO9a75[18]]=sel_float[OxO9a75[11]];} ;element[OxO9a75[14]][OxO9a75[19]]=sel_textalign[OxO9a75[11]];element[OxO9a75[20]]=inp_tooltip[OxO9a75[11]];element[OxO9a75[14]][OxO9a75[22]]=inp_forecolor[OxO9a75[11]];element[OxO9a75[14]][OxO9a75[21]]=inp_backcolor[OxO9a75[11]];if(element[OxO9a75[12]]==OxO9a75[23]){element.removeAttribute(OxO9a75[12]);} ;if(element[OxO9a75[12]]==OxO9a75[23]){element.removeAttribute(OxO9a75[24]);} ;if(element[OxO9a75[20]]==OxO9a75[23]){element.removeAttribute(OxO9a75[20]);} ;if(element[OxO9a75[16]]==OxO9a75[23]){element.removeAttribute(OxO9a75[16]);} ;} ;img_forecolor[OxO9a75[25]]=inp_forecolor[OxO9a75[25]]=function inp_forecolor_onclick(){SelectColor(inp_forecolor,img_forecolor);} ;img_backcolor[OxO9a75[25]]=inp_backcolor[OxO9a75[25]]=function inp_backcolor_onclick(){SelectColor(inp_backcolor,img_backcolor);} ;
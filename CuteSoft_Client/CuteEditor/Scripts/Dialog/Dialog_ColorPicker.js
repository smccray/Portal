var OxOfacf=["=","; path=/;"," expires=",";","cookie","length","","#ffffff","CECC","onmouseover","event","srcElement","target","className","colordiv","style","onmouseout","onclick","CheckboxColorNames","checked","cname","backgroundColor","cvalue","[[_CuteEditorResource_]]Load.ashx?type=dialog\x26file=ColorPicker.Aspx\x26culture=[[_culture_]]","\x26[[DNN_Arg]]","dialogWidth:520px;dialogHeight:420px;help:0;status:0;resizable:1","dialogArguments","object","onchange","color","editor","divpreview","value","#","RecentColors","SPAN","[[ValidColor]]"];function SetCookie(name,Ox4f,Ox56){var Ox57=name+OxOfacf[0]+escape(Ox4f)+OxOfacf[1];if(Ox56){var Ox58= new Date();Ox58.setSeconds(Ox58.getSeconds()+Ox56);Ox57+=OxOfacf[2]+Ox58.toUTCString()+OxOfacf[3];} ;document[OxOfacf[4]]=Ox57;} ;function GetCookie(name){var Ox5a=document[OxOfacf[4]].split(OxOfacf[3]);for(var i=0;i<Ox5a[OxOfacf[5]];i++){var Ox5b=Ox5a[i].split(OxOfacf[0]);if(name==Ox5b[0].replace(/\s/g,OxOfacf[6])){return unescape(Ox5b[1]);} ;} ;} ;function GetCookieDictionary(){var Ox12b={};var Ox5a=document[OxOfacf[4]].split(OxOfacf[3]);for(var i=0;i<Ox5a[OxOfacf[5]];i++){var Ox5b=Ox5a[i].split(OxOfacf[0]);Ox12b[Ox5b[0].replace(/\s/g,OxOfacf[6])]=unescape(Ox5b[1]);} ;return Ox12b;} ;function GetCookieArray(){var arr=[];var Ox5a=document[OxOfacf[4]].split(OxOfacf[3]);for(var i=0;i<Ox5a[OxOfacf[5]];i++){var Ox5b=Ox5a[i].split(OxOfacf[0]);var Ox57={name:Ox5b[0].replace(/\s/g,OxOfacf[6]),value:unescape(Ox5b[1])};arr[arr[OxOfacf[5]]]=Ox57;} ;return arr;} ;var __defaultcustomlist=[OxOfacf[7],OxOfacf[7],OxOfacf[7],OxOfacf[7],OxOfacf[7],OxOfacf[7],OxOfacf[7],OxOfacf[7]];function GetCustomColors(){var Ox12f=__defaultcustomlist.concat();for(var i=0;i<18;i++){var Oxdc=GetCustomColor(i);if(Oxdc){Ox12f[i]=Oxdc;} ;} ;return Ox12f;} ;function GetCustomColor(Ox131){return GetCookie(OxOfacf[8]+Ox131);} ;function SetCustomColor(Ox131,Oxdc){SetCookie(OxOfacf[8]+Ox131,Oxdc,60*60*24*365);} ;var _origincolor=OxOfacf[6];document[OxOfacf[9]]=function (Ox1d0){Ox1d0=window[OxOfacf[10]]||Ox1d0;var Ox12=Ox1d0[OxOfacf[11]]||Ox1d0[OxOfacf[12]];if(Ox12[OxOfacf[13]]==OxOfacf[14]){firecolorchange(Ox12[OxOfacf[15]].backgroundColor);} ;} ;document[OxOfacf[16]]=function (Ox1d0){Ox1d0=window[OxOfacf[10]]||Ox1d0;var Ox12=Ox1d0[OxOfacf[11]]||Ox1d0[OxOfacf[12]];if(Ox12[OxOfacf[13]]==OxOfacf[14]){firecolorchange(_origincolor);} ;} ;document[OxOfacf[17]]=function (Ox1d0){Ox1d0=window[OxOfacf[10]]||Ox1d0;var Ox12=Ox1d0[OxOfacf[11]]||Ox1d0[OxOfacf[12]];if(Ox12[OxOfacf[13]]==OxOfacf[14]){var Ox29e=document.getElementById(OxOfacf[18])&&document.getElementById(OxOfacf[18])[OxOfacf[19]];if(Ox29e){do_select(Ox12.getAttribute(OxOfacf[20])||Ox12[OxOfacf[15]][OxOfacf[21]]);} else {do_select(Ox12.getAttribute(OxOfacf[22])||Ox12[OxOfacf[15]][OxOfacf[21]]);} ;} ;} ;var _editor;function firecolorchange(Ox2a1){} ;function ShowColorDialog(Ox235){var Ox13b=OxOfacf[23]+OxOfacf[24];var Ox2a3=OxOfacf[25];var Ox13e=showModalDialog(Ox13b,null,Ox2a3);if(Ox13e!=null&&Ox13e!==false){Ox235(Ox13e);} ;} ;if(top[OxOfacf[26]]){if( typeof (top[OxOfacf[26]])==OxOfacf[27]){if(top[OxOfacf[26]][OxOfacf[28]]){firecolorchange=top[OxOfacf[26]][OxOfacf[28]];_origincolor=top[OxOfacf[26]][OxOfacf[29]];_editor=top[OxOfacf[26]][OxOfacf[30]];} ;} ;} ;var _selectedcolor=null;function do_select(Oxdc){_selectedcolor=Oxdc;firecolorchange(Oxdc);var Ox2a6=document.getElementById(OxOfacf[31]);if(Ox2a6){Ox2a6[OxOfacf[32]]=Oxdc;} ;} ;function do_saverecent(Oxdc){if(!Oxdc){return ;} ;if(Oxdc[OxOfacf[5]]!=7){return ;} ;if(Oxdc.substring(0,1)!=OxOfacf[33]){return ;} ;var hex=Oxdc.substring(1,7);var Ox2a8=GetCookie(OxOfacf[34]);if(!Ox2a8){Ox2a8=OxOfacf[6];} ;if((Ox2a8[OxOfacf[5]]%6)!=0){Ox2a8=OxOfacf[6];} ;for(var i=0;i<Ox2a8[OxOfacf[5]];i+=6){if(Ox2a8.substr(i,6)==hex){Ox2a8=Ox2a8.substr(0,i)+Ox2a8.substr(i+6);i-=6;} ;} ;if(Ox2a8[OxOfacf[5]]>31*6){Ox2a8=Ox2a8.substr(0,31*6);} ;Ox2a8=hex+Ox2a8;SetCookie(OxOfacf[34],Ox2a8,60*60*24*365);} ;function do_insert(){var Oxdc;var divpreview=document.getElementById(OxOfacf[31]);if(divpreview){Oxdc=divpreview[OxOfacf[32]];} else {Oxdc=_selectedcolor;} ;if(!Oxdc){return ;} ;if(/^[0-9A-F]{6}$/ig.test(Oxdc)){Oxdc=OxOfacf[33]+Oxdc;} ;try{document.createElement(OxOfacf[35])[OxOfacf[15]][OxOfacf[29]]=Oxdc;do_saverecent(Oxdc);Window_SetDialogReturnValue(window,Oxdc);Window_CloseDialog(window);} catch(x){alert(OxOfacf[36]);divpreview[OxOfacf[32]]=OxOfacf[6];return false;} ;} ;
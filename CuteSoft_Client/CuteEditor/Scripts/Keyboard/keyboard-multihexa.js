var OxO4393=["0123456789ABCDEF","0000","all","getElementById","","|","fond","\x3Cimg src=\x22Load.ashx?type=image\x26file=multiclavier.gif\x22 width=404 height=152 border=\x220\x22\x3E\x3Cbr /\x3E","sign","car","simpledia","simple","majus","\x26nbsp;","double","minus","doubledia","kb-","kb+","Delete","Clear","Back","CapsLock","Enter","Shift","\x3C|\x3C","Space","\x3E|\x3E","clavscroll(-3)","clavscroll(3)","faire(\x22del\x22)","RAZ()","faire(\x22bck\x22)","bloq()","faire(\x22\x5Cn\x22)","haut()","faire(\x22ar\x22)","faire(\x22 \x22)","faire(\x22av\x22)","act","action","clav","clavier","masque","\x3Cimg src=\x22Load.ashx?type=image\x26file=1x1.gif\x22 width=404 height=152 border=\x220\x22 usemap=\x22#clavier\x22\x3E","\x3Cmap name=\x22clavier\x22\x3E","\x3Carea coords=\x22",",","\x22 href=\x22javascript:void(0)\x22 onClick=\x27javascript:ecrire(",")\x27\x3E","\x22 href=\x22javascript:void(0)\x22 onClick=\x27javascript:","\x27\x3E","\x22 href=\x27javascript:charger(","\x3C/map\x3E","length"," ","%0D%0A","av","ar","bck","del","\x3Cspan class=","\x3E","\x3C/span\x3E","\x3Cdiv id=\x22","\x22 \x3E","\x3C/div\x3E","left","style","px","top","innerHTML","act0","act1","langue=","cookie",";","langue","=","; ","expires="];var caps=0,lock=0,hexchars=OxO4393[0],accent=OxO4393[1],clavdeb=0;var clav= new Array();j=0;for(i in Maj){clav[j]=i;j++;} ;var ns6=((!document[OxO4393[2]])&&(document[OxO4393[3]]));var ie=document[OxO4393[2]];var langue=getCk();if(langue==OxO4393[4]){langue=clav[clavdeb];} ;CarMaj=Maj[langue].split(OxO4393[5]);CarMin=Min[langue].split(OxO4393[5]);var posClavierLeft=0,posClavierTop=0;if(ns6){posClavierLeft=0;posClavierTop=80;} else {if(ie){posClavierLeft=0;posClavierTop=80;} ;} ;tracer(OxO4393[6],posClavierLeft,posClavierTop,OxO4393[7],OxO4393[8]);var posX= new Array(0,28,56,84,112,140,168,196,224,252,280,308,336,42,70,98,126,154,182,210,238,266,294,322,350,50,78,106,134,162,190,218,246,274,302,330,64,92,120,148,176,204,232,260,288,316,28,56,84,294,322,350);var posY= new Array(14,14,14,14,14,14,14,14,14,14,14,14,14,42,42,42,42,42,42,42,42,42,42,42,42,70,70,70,70,70,70,70,70,70,70,70,98,98,98,98,98,98,98,98,98,98,126,126,126,126,126,126);var nbTouches=52;for(i=0;i<nbTouches;i++){CarMaj[i]=((CarMaj[i]!=OxO4393[1])?(fromhexby4tocar(CarMaj[i])):OxO4393[4]);CarMin[i]=((CarMin[i]!=OxO4393[1])?(fromhexby4tocar(CarMin[i])):OxO4393[4]);if(CarMaj[i]==CarMin[i].toUpperCase()){cecar=((lock==0)&&(caps==0)?CarMin[i]:CarMaj[i]);tracer(OxO4393[9]+i,posClavierLeft+6+posX[i],posClavierTop+3+posY[i],cecar,((dia[hexa(cecar)]!=null)?OxO4393[10]:OxO4393[11]));tracer(OxO4393[12]+i,posClavierLeft+15+posX[i],posClavierTop+1+posY[i],OxO4393[13],OxO4393[14]);tracer(OxO4393[15]+i,posClavierLeft+3+posX[i],posClavierTop+9+posY[i],OxO4393[13],OxO4393[14]);} else {tracer(OxO4393[9]+i,posClavierLeft+6+posX[i],posClavierTop+3+posY[i],OxO4393[13],OxO4393[11]);cecar=CarMin[i];tracer(OxO4393[15]+i,posClavierLeft+3+posX[i],posClavierTop+9+posY[i],cecar,((dia[hexa(cecar)]!=null)?OxO4393[16]:OxO4393[14]));cecar=CarMaj[i];tracer(OxO4393[12]+i,posClavierLeft+15+posX[i],posClavierTop+1+posY[i],cecar,((dia[hexa(cecar)]!=null)?OxO4393[16]:OxO4393[14]));} ;} ;var actC1= new Array(0,371,364,0,378,0,358,0,344,0,112,378);var actC2= new Array(0,0,14,42,42,70,70,98,98,126,126,126);var actC3= new Array(32,403,403,39,403,47,403,61,403,25,291,403);var actC4= new Array(11,11,39,67,67,95,95,123,123,151,151,151);var act= new Array(OxO4393[17],OxO4393[18],OxO4393[19],OxO4393[20],OxO4393[21],OxO4393[22],OxO4393[23],OxO4393[24],OxO4393[24],OxO4393[25],OxO4393[26],OxO4393[27]);var effet= new Array(OxO4393[28],OxO4393[29],OxO4393[30],OxO4393[31],OxO4393[32],OxO4393[33],OxO4393[34],OxO4393[35],OxO4393[35],OxO4393[36],OxO4393[37],OxO4393[38]);var nbActions=12;for(i=0;i<nbActions;i++){tracer(OxO4393[39]+i,posClavierLeft+1+actC1[i],posClavierTop-1+actC2[i],act[i],OxO4393[40]);} ;var clavC1= new Array(35,119,203,287);var clavC2= new Array(0,0,0,0);var clavC3= new Array(116,200,284,368);var clavC4= new Array(11,11,11,11);for(i=0;i<4;i++){tracer(OxO4393[41]+i,posClavierLeft+5+clavC1[i],posClavierTop-1+clavC2[i],clav[i],OxO4393[42]);} ;tracer(OxO4393[43],posClavierLeft,posClavierTop,OxO4393[44]);document.write(OxO4393[45]);for(i=0;i<nbTouches;i++){document.write(OxO4393[46]+posX[i]+OxO4393[47]+posY[i]+OxO4393[47]+(posX[i]+25)+OxO4393[47]+(posY[i]+25)+OxO4393[48]+i+OxO4393[49]);} ;for(i=0;i<nbActions;i++){document.write(OxO4393[46]+actC1[i]+OxO4393[47]+actC2[i]+OxO4393[47]+actC3[i]+OxO4393[47]+actC4[i]+OxO4393[50]+effet[i]+OxO4393[51]);} ;for(i=0;i<4;i++){document.write(OxO4393[46]+clavC1[i]+OxO4393[47]+clavC2[i]+OxO4393[47]+clavC3[i]+OxO4393[47]+clavC4[i]+OxO4393[52]+i+OxO4393[49]);} ;document.write(OxO4393[53]);function ecrire(i){txt=rechercher()+OxO4393[5];subtxt=txt.split(OxO4393[5]);ceci=(lock==1)?CarMaj[i]:((caps==1)?CarMaj[i]:CarMin[i]);if(test(ceci)){subtxt[0]+=cardia(ceci);distinguer(false);} else {if(dia[accent]!=null&&dia[hexa(ceci)]!=null){distinguer(false);accent=hexa(ceci);distinguer(true);} else {if(dia[accent]!=null){subtxt[0]+=fromhexby4tocar(accent)+ceci;distinguer(false);} else {if(dia[hexa(ceci)]!=null){accent=hexa(ceci);distinguer(true);} else {subtxt[0]+=ceci;} ;} ;} ;} ;txt=subtxt[0]+OxO4393[5]+subtxt[1];afficher(txt);if(caps==1){caps=0;MinusMajus();} ;} ;function faire(Oxb1b){txt=rechercher()+OxO4393[5];subtxt=txt.split(OxO4393[5]);l0=subtxt[0][OxO4393[54]];l1=subtxt[1][OxO4393[54]];c1=subtxt[0].substring(0,(l0-2));c2=subtxt[0].substring(0,(l0-1));c3=subtxt[1].substring(0,1);c4=subtxt[1].substring(0,2);c5=subtxt[0].substring((l0-2),l0);c6=subtxt[0].substring((l0-1),l0);c7=subtxt[1].substring(1,l1);c8=subtxt[1].substring(2,l1);if(dia[accent]!=null){if(Oxb1b==OxO4393[55]){Oxb1b=fromhexby4tocar(accent);} ;distinguer(false);} ;switch(Oxb1b){case (OxO4393[57]):if(escape(c4)!=OxO4393[56]){txt=subtxt[0]+c3+OxO4393[5]+c7;} else {txt=subtxt[0]+c4+OxO4393[5]+c8;} ;break ;;case (OxO4393[58]):if(escape(c5)!=OxO4393[56]){txt=c2+OxO4393[5]+c6+subtxt[1];} else {txt=c1+OxO4393[5]+c5+subtxt[1];} ;break ;;case (OxO4393[59]):if(escape(c5)!=OxO4393[56]){txt=c2+OxO4393[5]+subtxt[1];} else {txt=c1+OxO4393[5]+subtxt[1];} ;break ;;case (OxO4393[60]):if(escape(c4)!=OxO4393[56]){txt=subtxt[0]+OxO4393[5]+c7;} else {txt=subtxt[0]+OxO4393[5]+c8;} ;break ;;default:txt=subtxt[0]+Oxb1b+OxO4393[5]+subtxt[1];break ;;} ;afficher(txt);} ;function RAZ(){txt=OxO4393[4];if(dia[accent]!=null){distinguer(false);} ;afficher(txt);} ;function haut(){caps=1;MinusMajus();} ;function bloq(){lock=(lock==1)?0:1;MinusMajus();} ;function tracer(Oxb20,Oxb21,haut,Oxb1b,Oxb22){Oxb1b=OxO4393[61]+Oxb22+OxO4393[62]+Oxb1b+OxO4393[63];document.write(OxO4393[64]+Oxb20+OxO4393[65]+Oxb1b+OxO4393[66]);if(ns6){document.getElementById(Oxb20)[OxO4393[68]][OxO4393[67]]=Oxb21+OxO4393[69];document.getElementById(Oxb20)[OxO4393[68]][OxO4393[70]]=haut+OxO4393[69];} else {if(ie){document.all(Oxb20)[OxO4393[68]][OxO4393[67]]=Oxb21;document.all(Oxb20)[OxO4393[68]][OxO4393[70]]=haut;} ;} ;} ;function retracer(Oxb20,Oxb1b,Oxb22){Oxb1b=OxO4393[61]+Oxb22+OxO4393[62]+Oxb1b+OxO4393[63];if(ns6){document.getElementById(Oxb20)[OxO4393[71]]=Oxb1b;} else {if(ie){doc=document.all(Oxb20);doc[OxO4393[71]]=Oxb1b;} ;} ;} ;function clavscroll(Ox27){clavdeb+=Ox27;if(clavdeb<0){clavdeb=0;} ;if(clavdeb>clav[OxO4393[54]]-4){clavdeb=clav[OxO4393[54]]-4;} ;for(i=clavdeb;i<clavdeb+4;i++){retracer(OxO4393[41]+(i-clavdeb),clav[i],OxO4393[42]);} ;if(clavdeb==0){retracer(OxO4393[72],OxO4393[13],OxO4393[40]);} else {retracer(OxO4393[72],act[0],OxO4393[40]);} ;if(clavdeb==clav[OxO4393[54]]-4){retracer(OxO4393[73],OxO4393[13],OxO4393[40]);} else {retracer(OxO4393[73],act[1],OxO4393[40]);} ;} ;function charger(i){langue=clav[i+clavdeb];setCk(langue);accent=OxO4393[1];CarMaj=Maj[langue].split(OxO4393[5]);CarMin=Min[langue].split(OxO4393[5]);for(i=0;i<nbTouches;i++){CarMaj[i]=((CarMaj[i]!=OxO4393[1])?(fromhexby4tocar(CarMaj[i])):OxO4393[4]);CarMin[i]=((CarMin[i]!=OxO4393[1])?(fromhexby4tocar(CarMin[i])):OxO4393[4]);if(CarMaj[i]==CarMin[i].toUpperCase()){cecar=((lock==0)&&(caps==0)?CarMin[i]:CarMaj[i]);retracer(OxO4393[9]+i,cecar,((dia[hexa(cecar)]!=null)?OxO4393[10]:OxO4393[11]));retracer(OxO4393[15]+i,OxO4393[13]);retracer(OxO4393[12]+i,OxO4393[13]);} else {retracer(OxO4393[9]+i,OxO4393[13]);cecar=CarMin[i];retracer(OxO4393[15]+i,cecar,((dia[hexa(cecar)]!=null)?OxO4393[16]:OxO4393[14]));cecar=CarMaj[i];retracer(OxO4393[12]+i,cecar,((dia[hexa(cecar)]!=null)?OxO4393[16]:OxO4393[14]));} ;} ;} ;function distinguer(Oxb27){for(i=0;i<nbTouches;i++){if(CarMaj[i]==CarMin[i].toUpperCase()){cecar=((lock==0)&&(caps==0)?CarMin[i]:CarMaj[i]);if(test(cecar)){retracer(OxO4393[9]+i,Oxb27?(cardia(cecar)):cecar,Oxb27?OxO4393[10]:OxO4393[11]);} ;} else {cecar=CarMin[i];if(test(cecar)){retracer(OxO4393[15]+i,Oxb27?(cardia(cecar)):cecar,Oxb27?OxO4393[16]:OxO4393[14]);} ;cecar=CarMaj[i];if(test(cecar)){retracer(OxO4393[12]+i,Oxb27?(cardia(cecar)):cecar,Oxb27?OxO4393[16]:OxO4393[14]);} ;} ;} ;if(!Oxb27){accent=OxO4393[1];} ;} ;function MinusMajus(){for(i=0;i<nbTouches;i++){if(CarMaj[i]==CarMin[i].toUpperCase()){cecar=((lock==0)&&(caps==0)?CarMin[i]:CarMaj[i]);retracer(OxO4393[9]+i,(test(cecar)?cardia(cecar):cecar),((dia[hexa(cecar)]!=null||test(cecar))?OxO4393[10]:OxO4393[11]));} ;} ;} ;function test(Oxb29){return (dia[accent]!=null&&dia[accent][hexa(Oxb29)]!=null);} ;function cardia(Oxb29){return (fromhexby4tocar(dia[accent][hexa(Oxb29)]));} ;function fromhex(Oxb2c){out=0;for(a=Oxb2c[OxO4393[54]]-1;a>=0;a--){out+=Math.pow(16,Oxb2c[OxO4393[54]]-a-1)*hexchars.indexOf(Oxb2c.charAt(a));} ;return out;} ;function fromhexby4tocar(Oxb1b){out4= new String();for(l=0;l<Oxb1b[OxO4393[54]];l+=4){out4+=String.fromCharCode(fromhex(Oxb1b.substring(l,l+4)));} ;return out4;} ;function tohex(Oxb2c){return hexchars.charAt(Oxb2c/16)+hexchars.charAt(Oxb2c%16);} ;function tohex2(Oxb2c){return tohex(Oxb2c/256)+tohex(Oxb2c%256);} ;function hexa(Oxb1b){out=OxO4393[4];for(k=0;k<Oxb1b[OxO4393[54]];k++){out+=(tohex2(Oxb1b.charCodeAt(k)));} ;return out;} ;function getCk(){fromN=document[OxO4393[75]].indexOf(OxO4393[74])+0;if((fromN)!=-1){fromN+=7;toN=document[OxO4393[75]].indexOf(OxO4393[76],fromN)+0;if(toN==-1){toN=document[OxO4393[75]][OxO4393[54]];} ;return unescape(document[OxO4393[75]].substring(fromN,toN));} ;return OxO4393[4];} ;function setCk(Oxb2c){if(Oxb2c!=null){exp= new Date();time=365*60*60*24*1000;exp.setTime(exp.getTime()+time);document[OxO4393[75]]=escape(OxO4393[77])+OxO4393[78]+escape(Oxb2c)+OxO4393[79]+OxO4393[80]+exp.toGMTString();} ;} ;
var OxO2a51=["flash_preview","btnbrowse","inp_src","onclick","value","cssText","style","Movie"];var flash_preview=Window_GetElement(window,OxO2a51[0],true);var btnbrowse=Window_GetElement(window,OxO2a51[1],true);var inp_src=Window_GetElement(window,OxO2a51[2],true);btnbrowse[OxO2a51[3]]=function btnbrowse_onclick(){function Ox35d(Ox13e){if(Ox13e){inp_src[OxO2a51[4]]=Ox13e;} ;} ;editor.SetNextDialogWindow(window);editor.ShowSelectFileDialog(Ox35d,inp_src.value);} ;UpdateState=function UpdateState_Flash(){flash_preview[OxO2a51[6]][OxO2a51[5]]=element[OxO2a51[6]][OxO2a51[5]];flash_preview.mergeAttributes(element);} ;SyncToView=function SyncToView_Flash(){inp_src[OxO2a51[4]]=element[OxO2a51[7]];} ;SyncTo=function SyncTo_Flash(element){element[OxO2a51[7]]=inp_src[OxO2a51[4]];} ;
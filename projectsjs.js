
function enlarge(name,descriptionName){
  var target=document.getElementById(name);
  var extra=document.getElementById(descriptionName);
  if(target.style.zIndex=="3"){
    target.style.zIndex="4";
    target.style.transform="scale(2,2)";
    if(name=="riceyak" || name=='ricebikes'){target.style.transformOrigin='left';};
    if(name=="elections" || name=='website'){target.style.transformOrigin='right';};
    setTimeout(function(){extra.innerHTML="An anonymous messaging platform dedicated to fosteringuniSversity-wide culture and providing a user-friendly alternative to popular communication venues such as GroupMe. An anonymous messaging platform dedicated to fosteringuniversity-wide culture and providing a user-friendly alternative to popular communication venues such as GroupMe.";},1000);
    }
  else{
    /*target.style.zIndex="3";*/
    target.style.transform="scale(1,1)";
    if(name=="riceyak" || name=='ricebikes'){target.style.transformOrigin='left';};
    if(name=="elections" || name=='website'){target.style.transformOrigin='right';};
    setTimeout(function(){extra.innerHTML="An anonymous messaging platform dedicated to fosteringuniSversity-wide culture and providing a user-friendly alternative to popular communication venues such as GroupMe.";},1000);
    setTimeout(function(){target.style.zIndex="3";},500);
    };

    
  };
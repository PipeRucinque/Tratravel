import React, { useState } from 'react';
import { AdviceContainer, AdviceWidget, AdviceBg, AdviceImg, AdviceText } from '../styles/AdviceStyles';
import ImageSlider from "../components/ImageSlider";
import UserConsumer from '../hooks/useDatos'
import _ from 'lodash'
import saveResults from '../common/Control'

const Advice = () => {

  const [saveResultFinal, setSaveResultFinal] = UserConsumer();

  
  if (_.isEmpty(saveResultFinal)) {
    return "Loading..."
  }
  else{

  
  return (
    <>
    <AdviceContainer>
     
      <AdviceImg>
        <AdviceText>Algunas imágenes de {saveResultFinal[2]}</AdviceText><ImageSlider></ImageSlider>
    </AdviceImg>
    
    <AdviceWidget>
    <AdviceText>¿Listo para viajar?</AdviceText>
      {<div id="searchWidget" style={{width: "300px", height: "450px"}}><iframe id="widgetIframe" src="https://www.expedia.com/marketing/widgets/searchform/widget?wtt=5&tp1=ismael&tp2=ismael&lob=H,FH,F&des=&wbi=333333&olc=000000&whf=4&hfc=FFFFFF&wif=4&ifc=000000&wbc=286078&wbf=4&bfc=FFFFFF&wws=1&sfs=H600FW300F&langid=1033" width="100%" height="100%" scrolling="no" frameborder="0"></iframe></div>}
    </AdviceWidget>
  
    
    

    
    </AdviceContainer>
    
    
     
  
      </>
  );
}};

export default Advice;
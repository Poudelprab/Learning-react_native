import {View, Text} from 'react-native'
import React from 'react'
import TextComponents from './TextComponents'
import ViewComponent from './ViewComponent'
import ButtonComp from './ButtonComp'
import ImageComponent from './ImageComponent'




function Index()  {
  return (
    <View>
      
      <TextComponents/>
      <ViewComponent/>
      <ButtonComp/>
      <ImageComponent/>
    
     <Text> This Is Home Screen</Text>
    </View>
  )
}

function Comp()
{
   
    return <Index/>
}
export default Comp;

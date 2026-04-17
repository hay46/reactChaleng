
import React from 'react'
import Props from './components/props/Props_passArray'
import PropsNormal from './components/props/PropsNormal'
import Day1_project from './components/Day1_project/Day1_project'
import banana from './assets/10001.png'

const App = () => {
  return (
    <div>
      {/* <Props items={["aples,banana,orange"]}
       />
        <Props items={["mango,banana,orange"]}
       />
        <Props items={["papays,banana,orange"]}
       />
        <Props items={["tringo,banana,orange"]}
       /> */}
        {/* <PropsNormal name="abebe"
        fname="kebede" age={35} natinality="ethiopan" gender="male" />
         */}

         <Day1_project 
         sale="SALE"  
         imaglink={banana}
         alternativNave="banana"
         titleFrute="fresh Banana"
         rating="4.5"
         price={24}
         />

<Day1_project 
         sale="SALE"  
         imaglink={banana}
         alternativNave="banana"
         titleFrute="fresh Banana"
         rating="4.5"
         price={24}
         />

<Day1_project 
         sale="SALE"  
         imaglink={banana}
         alternativNave="banana"
         titleFrute="fresh Banana"
         rating="4.5"
         price={24}
         />

         <Day1_project 
         sale="SALE"  
         imaglink={banana}
         alternativNave="banana"
         titleFrute="fresh orang"
         rating="6"
         price={30}
         />
         
    </div>




   
  )
}

export default App
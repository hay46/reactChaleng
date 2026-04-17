
import React from 'react'
import Props from './components/props/Props_passArray'
import PropsNormal from './components/props/PropsNormal'
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
        <PropsNormal name="abebe"
        fname="kebede" age={35} natinality="ethiopan" gender="male" />
        
    </div>

   
  )
}

export default App
import React, { useState } from 'react'
import SidebarOpen from './components/SidebarOpen'
import SidebarButton from './components/SidebarButton'
import SidebarClosed from './components/SidebarClose'

function App() {
  
  const [sidebarState, setsidebarState] = useState<string>("large")
  const [leftButtonValue, setLeftButtonValue] = useState<string>("left-80")

  const toggleLeftValue = (e: MouseEvent) => {
    if (sidebarState == "large") {
      setsidebarState("small")
      setLeftButtonValue("left-32")
    } else {
      setsidebarState("large")
      setLeftButtonValue("left-80")
    } 
  }

  if (sidebarState == "large") {
    return (
      <div>
        <SidebarOpen />
        <SidebarButton buttonLeftValue={leftButtonValue} toggleLeftValue={toggleLeftValue}/>
      </div>
    ) 
  }
  return (
    <div>
      <SidebarClosed />
      <SidebarButton buttonLeftValue={leftButtonValue} toggleLeftValue={toggleLeftValue}/>
    </div>
  ) 
}

export default App

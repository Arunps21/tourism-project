import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

const componentContext = createContext()

export function ComponentProvider({children}) {
    const [component,setComponent] = useState("")
  return (
    <componentContext.Provider value={{component,setComponent}}>
        {children}
    </componentContext.Provider>
  )
}

export default componentContext
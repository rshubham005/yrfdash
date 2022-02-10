import React, { createContext, useState} from 'react'

export  const Contextdata= createContext();
function DataContext({children}) {
    const [user,setuser]=useState('');

    return (
        <div>
            <Contextdata.Provider value={{user,setuser}} >
                {children}
            </Contextdata.Provider>
        </div>
    )
}

export default DataContext

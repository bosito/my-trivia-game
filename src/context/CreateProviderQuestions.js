import React, { createContext, useContext, useEffect, useState } from 'react'

const CreateAppContext = createContext();

export default function CreateProviderQuestions({children}) {
    const [test, settest] = useState(null)
    useEffect(() => {
    }, [])

    const context = {
        test
    }

    return (
        <CreateAppContext.Provider value={context}>
            {children}
        </CreateAppContext.Provider>
    )
}

export const useContexApp = () => useContext(CreateAppContext);

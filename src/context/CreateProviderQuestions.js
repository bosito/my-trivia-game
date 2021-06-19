import React, { createContext, useContext, useEffect, useState } from 'react'

const CreateAppContext = createContext();

export default function CreateProviderQuestions({ children }) {
    const [test, settest] = useState('wolas')

    useEffect(() => {
        settest('wolas')
    }, [])

    //const getQuestions = e => {
        //e.preventDefault();
        //const url = `https://opentdb.com/api.php?amount=${}&category=${}&difficulty=${}&type=${}`;
        // fetch(url)
        //     .then(response => {
        //         return response.json();
        //     })
        //     .then(data => {
        //         console.log(url);
        //         console.log(data);
        //         questions = data.results;
        //         // nextQuestions();
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
    //};

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

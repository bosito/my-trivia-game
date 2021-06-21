import React, { createContext, useContext, useState } from 'react'

const CreateAppContext = createContext();

export default function CreateProviderQuestions({ children }) {
    const [fetchData, setFetchData] = useState([])
    const [viewQuestions, setViewQuestions] = useState(false)
    

    //https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple

    const handleSubmit = (e,inputState) => {
        e.preventDefault()
        console.log(inputState);
        const url = `https://opentdb.com/api.php?amount=${inputState.amount}&category=${inputState.category}&difficulty=${inputState.difficulty}&type=${inputState.type}`;
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                //console.log(data);
                setFetchData([...fetchData, data.results])
                //console.log(fetchData);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const context = {
        fetchData,
        viewQuestions,
        handleSubmit,
        setViewQuestions
    }

    return (
        <CreateAppContext.Provider value={context}>
            {children}
        </CreateAppContext.Provider>
    )
}

export const useContexApp = () => useContext(CreateAppContext);

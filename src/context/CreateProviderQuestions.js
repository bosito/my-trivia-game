import React, { createContext, useContext, useState } from 'react'

const CreateAppContext = createContext();

export default function CreateProviderQuestions({ children }) {
    const [fetchData, setFetchData] = useState([]);
    const [viewQuestions, setViewQuestions] = useState(false);
    const [closeMenu, setCloseMenu] = useState(false);
    const [countQuestion, setCountQuestion] = useState(0);

    const handleSubmit = (e,inputState) => {
        e.preventDefault();
        const url = `https://opentdb.com/api.php?amount=${inputState.amount}&category=${inputState.category}&difficulty=${inputState.difficulty}&type=${inputState.type}`;
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                //console.log(data);
                setFetchData([...fetchData, data.results]);
                setCloseMenu(true);
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
        setViewQuestions,
        closeMenu,
        setCloseMenu,
        countQuestion,
        setCountQuestion
    }

    return (
        <CreateAppContext.Provider value={context}>
            {children}
        </CreateAppContext.Provider>
    )
}

export const useContexApp = () => useContext(CreateAppContext);

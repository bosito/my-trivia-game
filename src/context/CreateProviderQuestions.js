import React, { createContext, useContext, useState, useEffect } from 'react'

const CreateAppContext = createContext();

export default function CreateProviderQuestions({ children }) {
    const [fetchData, setFetchData] = useState(null);
    const [viewQuestions, setViewQuestions] = useState(false);
    const [closeMenu, setCloseMenu] = useState(false);
    const [countQuestion, setCountQuestion] = useState(0);
    const [countCorrectQuestions, setCountCorrectQuestions] = useState(0);
    const [endGame, setEndGame] = useState(false);

    const handleSubmit = (e, inputState) => {
        e.preventDefault();
        const url = `https://opentdb.com/api.php?amount=${inputState.amount}&category=${inputState.category}&difficulty=${inputState.difficulty}&type=${inputState.type}`;
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                //console.log(data);
                setFetchData(data.results);
                setCloseMenu(true);
                //console.log(fetchData);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handelAddConutCorrect = () => setCountCorrectQuestions((countCorrectQuestions) => countCorrectQuestions + 1);
    
    useEffect(() => {
        (() => {
            if (fetchData) {
                if (fetchData.length === countQuestion) {
                    const isLastCuestion = () => {
                        setCloseMenu(false);
                        setEndGame(true);
                    };

                    isLastCuestion();
                }
            }
        })();
    },[countQuestion, fetchData]);

    const context = {
        fetchData,
        viewQuestions,
        handleSubmit,
        setViewQuestions,
        closeMenu,
        setCloseMenu,
        countQuestion,
        setCountQuestion,
        handelAddConutCorrect,
        countCorrectQuestions,
        endGame,
    };

    return (
        <CreateAppContext.Provider value={context}>
            {children}
        </CreateAppContext.Provider>
    );
};

export const useContexApp = () => useContext(CreateAppContext);

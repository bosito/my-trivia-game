import React, { useState, useEffect } from 'react';
import { useContexApp } from '../context/CreateProviderQuestions';

export default function CardMenu() {

    const { setCountQuestion, fetchData, handelAddConutCorrect, closeMenu } = useContexApp();
    let { countQuestion } = useContexApp();
    const [cuestionsTotal, setCuestionsTotal] = useState(null);

    

    useEffect(() => {
        if (fetchData[countQuestion]) {
            
            const formatAway = () => {
                const newArray = [...fetchData[countQuestion].incorrect_answers,
                fetchData[countQuestion].correct_answer];
                newArray.sort(() => Math.floor(Math.random() - 0.5));
                setCuestionsTotal(newArray);
            };

            formatAway();
        }
    },[countQuestion, fetchData])

    const isCorrectAnswer = (textOptions) => {
        if (textOptions === fetchData[countQuestion].correct_answer) {
            console.log(`las respuesta correcta es ${textOptions}`);
            setCountQuestion((countQuestion) => countQuestion + 1);
            handelAddConutCorrect();
            return
        }
        setCountQuestion((countQuestion) => countQuestion + 1);
    }

    return (
        <div className="contCardCuestions" style={{ display: closeMenu || 'none' }}>
            {cuestionsTotal ?
                <>
                    <p className="txt" style={{ fontSize: 25, marginBottom: 10 }} >
                        {fetchData[countQuestion]?.question}
                    </p>
                    <div className="contBotonsCuestions">
                        {cuestionsTotal.map((textOptions, index) => {
                            return (
                                <button key={index.toString()} className="bottomCuestions" onClick={() => isCorrectAnswer(textOptions)}>
                                    {textOptions}
                                </button>
                            )
                        })}
                    </div>

                </>
                : <div style={{ fontSize: 40, color: 'white' }}>loading...</div>
            }
        </div>
    )
}

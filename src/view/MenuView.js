import React, { useState, Fragment } from 'react'
//import { useContexApp } from '../context/CreateProviderQuestions'
import { dataSelectComponent, dataSelectDificult, dataSelectType } from '../data/defautData.js'

export default function MenuView() {

    const [inputState, setInputState] = useState({
        amount: '0',
        category: '0',
        difficulty: '0',
        type: '0'
    })

    //const { test } = useContexApp()
    const handleChange = (e) => setInputState({ ...inputState, [e.target.id]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputState);
        let url = `https://opentdb.com/api.php?amount=${inputState.amount}&category=${inputState.category}&difficulty=${inputState.difficulty}&type=${inputState.type}`;
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(url);
                console.log(data);
                //questions = data.results;
                //nextQuestions();
            })
            .catch(error => {
                console.log(error);
            });
    }

    /* const InputComponent = () => {
        return (
            <Fragment>
                <div className="question-field">
                    <label for="amount" className="txt">Número de preguntas: </label>
                    <input type="number" id="amount" min="0" className="amount"
                        name="numero"
                        onChange={handleChange}
                    />
                </div>
            </Fragment>
        )
    }*/

    const SelectComoponentLocal = (props) => {
        const { labelText, forLabel, dataSelect, onChange, dadState } = props
        return (
            <Fragment>
                <div className="question-field">
                    <label for={forLabel} className="txt">{labelText}</label>
                    {/* <p>{test.testValue}hola que hay</p> */}
                    <select name="" id={forLabel} className="amount"
                        onChange={onChange} value={dadState}
                    >
                        {dataSelect.map((objet) => {
                            return (
                                <option value={objet.value}>{objet.name}</option>
                            )
                        })}
                    </select>
                </div>
            </Fragment>
        )
    }

    return (
        <div className="container">
            <div className="containerPricipal">
                <div className="containerMenu">
                    <form className="styleForm" onSubmit={handleSubmit} >

                        <div className="question-field">
                            <label for="amount" className="txt">Número de preguntas: </label>
                            <input type="number" id="amount" min="0" className="amount"
                                name="numero"
                                onChange={handleChange}
                            />
                        </div>

                        <SelectComoponentLocal
                            labelText="Categoría: "
                            dataSelect={dataSelectComponent}
                            forLabel="category"
                            onChange={handleChange}
                            dadState={inputState.category}
                        />

                        <SelectComoponentLocal
                            labelText="Dificultad: "
                            dataSelect={dataSelectDificult}
                            forLabel="difficulty"
                            onChange={handleChange}
                            dadState={inputState.difficulty}
                        />

                        <SelectComoponentLocal
                            labelText="Tipo de pregunta: "
                            dataSelect={dataSelectType}
                            forLabel="type"
                            onChange={handleChange}
                            dadState={inputState.type}
                        />

                        <input type="submit" value="Comenzar" />
                    </form>
                </div>
            </div>
        </div>
    )
}
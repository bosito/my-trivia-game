import React, { useState, Fragment } from 'react'
import { useContexApp } from '../context/CreateProviderQuestions'
import { dataSelectComponent, dataSelectDificult, dataSelectType } from '../data/defautData.js'

export default function MenuStartGame() {
    const [inputState, setInputState] = useState({
        amount: '0',
        category: '0',
        difficulty: '0',
        type: '0'
    })

    const { handleSubmit, fetchData } = useContexApp()

    const handleChange = (e) => setInputState({ ...inputState, [e.target.id]: e.target.value })

   

    const SelectComoponentLocal = (props) => {
        const { labelText, forLabel, dataSelect, onChange, dadState } = props
        return (
            <Fragment>
                <div className="question-field">
                    <label for={forLabel} className="txt">{labelText}</label>
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
        <form className="styleForm" onSubmit={(e)=>handleSubmit(e,inputState)} >

            <div className="question-field">
                <label for="amount" className="txt">Número de preguntas: </label>
                <input type="number" id="amount" min="0" max="10"
                    className="amount" name="numero"
                    onChange={handleChange}
                    defaultValue={inputState.amount}
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
    )
}

/*const InputComponent = (props) => {
        const { onChange, dadState, forLabel } = props
        return (
            <Fragment>
                <div className="question-field">
                    <label for={forLabel} className="txt">Número de preguntas: </label>
                    <input type="number" id={forLabel} min="0" max="50"
                        className="amount" name="numero"
                        onChange={onChange}
                        defaultValue={dadState}
                    />
                </div>
            </Fragment>
        )
    }*/

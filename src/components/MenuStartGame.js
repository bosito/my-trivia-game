import React, { useState, Fragment } from 'react'
import { useContexApp } from '../context/CreateProviderQuestions'
import { dataSelectComponent, dataSelectDificult, dataSelectType } from '../data/defautData.js'

export default function MenuStartGame() {
    const { handleSubmit, closeMenu } = useContexApp();
    const [inputState, setInputState] = useState({
        amount: 1,
        category: '0',
        difficulty: '0',
        type: '0'
    });

    const handleChange = (e) => setInputState({ ...inputState, [e.target.id]: e.target.value });

    const SelectComoponentLocal = (props) => {

        const { labelText, forLabel, dataSelect, onChange, dadState } = props;

        return (
            <Fragment>
                <div className="question-field">
                    <label for={forLabel} className="txt">{labelText}</label>
                    <select name="" id={forLabel} className="amount"
                        onChange={onChange} value={dadState}
                    >
                        {dataSelect.map((objet, index) => {
                            return (
                                <option key={index.toString()} value={objet.value}>{objet.name}</option>
                            )
                        })}
                    </select>
                </div>
            </Fragment>
        );
    };

    return (
        <div style={{ display: closeMenu && 'none' }}>
            <form className="styleForm"
                onSubmit={(e) => handleSubmit(e, inputState)}
            >

                <div className="question-field">
                    <label for="amount" className="txt">Número de preguntas: </label>
                    <input type="number" id="amount" min="1" max="10"
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

                <input type="submit" value="Comenzar" className="bottom" />

            </form>
            <div className="containerBotonRaiting">
                <button className="bottom" onClick={() => console.log('wolas')} >Tabla de reitings</button>
            </div>
        </div>
    );
};

/* buscar por que este componente no funciona al momento de pasar los datos para ser reutilizable */

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

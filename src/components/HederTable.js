import React from 'react';
import { useContexApp } from '../context/CreateProviderQuestions.js';

export default function HederTable({ fetchData }) {

    const { countQuestion } = useContexApp();

    /*
    * el use efect es solo para cambiar el numero del contador; 
    * pero falta la logica para que este cambie deacuerdo a la pregunta contestada;
    */

    return (
        <div className="hederTableStyle">
            <p>Categoria:  {fetchData[0][countQuestion].category}</p>
            <p>Typo de preguntas:  {fetchData[0][countQuestion].type}</p>
            <p>Dificultad:  {fetchData[0][countQuestion].difficulty}</p>
            <p>N° Preguntas: {countQuestion} / {fetchData.length}</p>
            <p>Contador</p>
        </div>
    );
};
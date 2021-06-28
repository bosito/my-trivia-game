import React from 'react';
import { useContexApp } from '../context/CreateProviderQuestions.js';

export default function HederTable({ fetchData }) {

    const { countQuestion, closeMenu } = useContexApp();

    /*
    * el use efect es solo para cambiar el numero del contador; 
    * pero falta la logica para que este cambie deacuerdo a la pregunta contestada;
    */


    return (
        <div className="hederTableStyle" style={{ display: closeMenu || 'none' }}>
            <p>Categoria:  {fetchData[countQuestion]?.category}</p>
            <p>Typo de preguntas:  {fetchData[countQuestion]?.type}</p>
            <p>Dificultad:  {fetchData[countQuestion]?.difficulty}</p>
            <p>N° Preguntas: {countQuestion} / {fetchData.length}</p>
            <p>Contador</p>
        </div>
    );
};
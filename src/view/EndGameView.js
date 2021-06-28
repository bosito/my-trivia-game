import React, { useEffect, useState } from 'react';
import CongratulationsSvg from '../css/svg/Congratulations_Svg';
import LoseSvg from '../css/svg/Lose_svg'
import { useContexApp } from '../context/CreateProviderQuestions'

export default function EndGameView() {

    const { countCorrectQuestions, fetchData } = useContexApp();
    const [loadigResponse, setLoadigResponse] = useState(true);
    const [isWin, setIsWin] = useState(false);

    useEffect(() => {
        if (fetchData) {
            const win = (countCorrectQuestions * 100) / fetchData.length
            if (win > 60) {
                setTimeout(() => {
                    setLoadigResponse(false);
                    setIsWin(false);
                }, 3000);
                return
            }
            setTimeout(() => {
                setLoadigResponse(false);
            }, 3000);
        }
    })

    const WinView = () => {
        return (
            <>
                <CongratulationsSvg width={300} height={300} />
                <p style={{ color: 'white', fontSize: 30 }}>congratulations you won the game, your score is: </p>
                <p style={{ color: 'white', fontSize: 30 }}>{countCorrectQuestions} de {fetchData.length} </p>
            </>
        );
    };

    const LoseView = () => {
        return (
            <>
                <LoseSvg width={250} height={250} />
                <p style={{ color: 'white', fontSize: 30 }}>
                    sorry you lost the game, please try again
                </p>
                <p style={{ color: 'white', fontSize: 30 }}>
                    {countCorrectQuestions} de {fetchData.length}
                </p>
            </>
        )
    }

    return (
        <div className="contCardCuestions">
            {loadigResponse ?
                <div style={{ fontSize: 40, color: 'white' }}>loading...</div>
                : isWin ?
                    <WinView />
                    :
                    <LoseView />
            }
        </div>
    )
}

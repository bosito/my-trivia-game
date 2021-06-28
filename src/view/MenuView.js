import React, { useEffect } from 'react';
import { useContexApp } from '../context/CreateProviderQuestions';
import MenuStartGame from '../components/MenuStartGame.js';
import CardMenu from '../components/CardMenu.js';
import HederTable from '../components/HederTable';
import EndGameView from './EndGameView';

export default function MenuView() {

    const { closeMenu, fetchData, endGame } = useContexApp();

    useEffect(() => {
        console.log(closeMenu);
    }, [closeMenu])

    return (
        <div className="container">
            <div className="containerPricipal">
                {closeMenu && <HederTable fetchData={fetchData} />}
                <div className="containerMenu">
                    {endGame ? null : <MenuStartGame />}
                    {endGame ? (
                        <EndGameView />
                    )
                        : closeMenu && (
                            <CardMenu />
                        )
                    }

                </div>
            </div>
        </div>
    )
}
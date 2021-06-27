import React, { useState ,useEffect } from 'react';
import { useContexApp } from '../context/CreateProviderQuestions';
import MenuStartGame from '../components/MenuStartGame.js';
import CardMenu from '../components/CardMenu.js';
import HederTable from '../components/HederTable';

export default function MenuView() {

    const [cuestions, setCuestions] = useState(null);
    const { closeMenu, fetchData } = useContexApp();

    useEffect(() => {
        setCuestions(fetchData);
        console.log(fetchData[0]);
    }, [fetchData]);

    

    return (
        <div className="container">
            <div className="containerPricipal">
                {closeMenu && <HederTable fetchData={fetchData} />}
                <div className="containerMenu">
                    <MenuStartGame />
                    {closeMenu && (
                        <CardMenu cuestions={cuestions} />
                    )}
                </div>
            </div>
        </div>
    )
}
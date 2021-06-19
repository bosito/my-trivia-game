import React from 'react'
import { useContexApp } from '../context/CreateProviderQuestions'

export default function MenuView() {

    const { test } = useContexApp()
    
    return (
        <div>
            <p>wolas {test}</p>
        </div>
    )
}

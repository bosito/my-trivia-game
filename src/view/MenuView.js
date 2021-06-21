import React from 'react'
//import { useContexApp } from '../context/CreateProviderQuestions'
import MenuStartGame from '../components/MenuStartGame.js'

export default function MenuView() {
    //const [qIndex, setQIndex] = useState(0)

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(inputState);
    //     const url = `https://opentdb.com/api.php?amount=${inputState.amount}&category=${inputState.category}&difficulty=${inputState.difficulty}&type=${inputState.type}`;
    //     fetch(url)
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(data => {
    //             //console.log(data);
    //             setFetchData([...fetchData, data.results])
    //             //console.log(fetchData);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

    return (
        <div className="container">
            <div className="containerPricipal">
                <div className="containerMenu">
                    <MenuStartGame/>
                </div>
            </div>
        </div>
    )
}
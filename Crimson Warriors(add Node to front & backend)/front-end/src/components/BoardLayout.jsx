import { Link, Outlet, useLoaderData } from 'react-router-dom'
import BoardDetails from './BoardsDetails';
import { useState } from 'react';

export default function BoardLayout() {

    const Board = useLoaderData()
    const [current, setCurrent] = useState(null)

    // console.log(projects);
    const buttons = Board.map((b) => (
            <button className='lil-btn' key={b.id} onClick={()=> setCurrent(b)}>{b.name}</button>
    ))




    return (
        <section className='board-layout'>
            <h2 className='enviro'>Welcome to the game Board:</h2>
            <div className='pb'>
                {buttons}
            </div>
        {current &&
        <BoardDetails board={current} />
        }
        </section>
    )
}
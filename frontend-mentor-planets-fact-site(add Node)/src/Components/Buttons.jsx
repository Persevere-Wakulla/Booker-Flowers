

export default function Buttons({ click }) {



    return (
        <div className='buttons-container' onClick={click}>
            <button className='btn'>01 Overview </button>
            <button className='btn'>02 Internal Structure</button>
            <button className='btn'>03 Surface Geology</button>
        </div>
    )
}
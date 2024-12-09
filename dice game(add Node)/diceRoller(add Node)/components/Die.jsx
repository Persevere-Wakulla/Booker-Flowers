
// A simple dice with roll of 6
export default function Die(prop) {

    return (
        <div>
            <div className='singles'  style={{ width: 100, height: 100 }}>
                <p className='num'>{prop.roll}</p>
            </div>
        </div>
    )


}
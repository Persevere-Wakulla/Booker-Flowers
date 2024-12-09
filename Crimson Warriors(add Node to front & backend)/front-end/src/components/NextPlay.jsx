
export default function NextPlay({ monsterlifeForce }) {

    return (
        <div className="gameStat">
            <div className="nextTurn"><span id="whoTurn">{'Start Game'}</span></div>
            <div className="usersDamage" >PlDam:<span id='uDam'>{`${JSON.parse(sessionStorage.getItem('player')).character.health}`}</span></div>
            <div className="enemiesDamage" >EnDam:<span id='eDam'>{`${monsterlifeForce}`}</span></div>
        </div>

    )
}
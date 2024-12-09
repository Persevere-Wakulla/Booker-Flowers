

export default function EnemyHandler({ randMonster }) {

  let faces2 = document.querySelectorAll(".face2")
  // console.dir(faces2)
  faces2.forEach((side) => {
    side.style.backgroundImage = `url(${randMonster.image})`;
    side.style.backgroundSize = "cover"
   
    side.style.backgroundRepeat = "no-repeat"
  })

  // console.dir(monster.lifeforce)

  return (
    <section className="enemy-container">

      {
        <aside className="enemyStatsdisplay">
          <p>enemy:{randMonster.monster} </p>
          <p>type:{randMonster.category}</p>
          <p>life:{randMonster.lifeforce}</p>
          <p>attack:{randMonster.assault}</p>
          <p>defense:{randMonster.defense}</p>
          <p>move:{randMonster.steps}</p>
          <p>run:{randMonster.flee}</p>
          <p>magic:{randMonster.magic}</p>
          <p>rhand:{randMonster.lhand}</p>
          <p>lhand:{randMonster.rhand}</p>
        </aside>
      }
      <div className='eView'>
        <div className='face2 s1e'></div>
        <div className='face2 s2e'></div>
        <div className='face2 s3e'></div>
        <div className='face2 s4e'></div>
        <div className='face2 s5e'></div>
        <div className='face2 s6e'></div>
      </div>

    </section>
  )
}
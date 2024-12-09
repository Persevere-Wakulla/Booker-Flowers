function Job({id, value}){
    return (
    <div>
        <p>{id}: {value}</p>
       
    </div>
    )
}




export default function PriorExperience({ resume, updateResume}) {
    // console.log(assembler)
    // console.dir(resume)
    function handleNewJob(ev){
        // console.dir(ev)
        const myJob = {}
        const inputs = document.querySelectorAll('#prior input')
         const textarea = document.querySelector('#comments')
        inputs.forEach((item) => {
            myJob[item.id] = item.value
        })
            myJob[textarea.id] = textarea.value
        // create a new component or p to hold this on the screen
        for (let [key, value] in myJob){
            <Job id={key} value={value} />
        }
        console.dir(myJob)
        inputs.forEach(item => item.value = '')
        textarea.value = ''

        console.log(resume)
        updateResume({...resume, workHistory: [...resume.workHistory, myJob]})

    }

     // Take all information on New Resume.jsx and display it on screen as finished Resume'
    // function handleEditJob(){}
    
    
    return (
        <fieldset id='prior'>
            <legend> Prior Relative Experience</legend>
            <div>


                <label>Type of Experience:
                    <input type="text" priorep="priorep" id="priorep"></input>
                </label>
                <br /><br />
                <label>Position or Job Title:
                    <input type="text" position="position" id="position"></input>
                </label>
                <br /><br />
                <label>Responsibilities:
                    <input type="text" duties="duties" id="duties"></input>
                </label>
                <br /><br />
                <label>Date Started:
                    <input type="text" datestarted="datestarted" id="datestarted"></input>
                </label>
                <br /><br />
                <label>Date Ended:
                    <input type="text" dateended="dateended" id="dateended"></input>
                </label>
                <br /><br />

                <textarea comments="comments" id="comments" col="6" rows="6" placeholder="Enter Comments about your Experience here."></textarea>

            </div>
            <br />
            <div className="flex">
                <div>
                    <button onClick={handleNewJob}>Add</button>
                </div>
                {/* Edit infoormation' */}
                <div>
                {/* <div>
                    <button onClick={handleEditJob}>Edit</button>
                </div> */}
            </div>

             </div>
        </fieldset>
    )

}
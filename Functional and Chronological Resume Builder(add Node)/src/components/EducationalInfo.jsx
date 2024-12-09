function Education({ id, value }) {
    return (
        <div>
            <p>{id}: {value}</p>

        </div>
    )
}

export default function EducationalInfo({ resume, updateResume }) {



    function handleNewEducation(ev) {
        const myEducation = {}
        const inputs = document.querySelectorAll('#edu input')
        const textarea = document.querySelectorAll('#edu textarea')
        console.dir(textarea)
        console.dir(inputs)
       
        inputs.forEach((item) => {
            myEducation[item.id] = item.value
            item.value = ''
        })
        textarea.forEach((item) => {
            myEducation[item.id] = item.value
            item.value = ''
        })
        // create a new component or p to hold this on the screen
        for (let [key, value] in myEducation) {
            <Education id={key} value={value} />
        }
        console.dir(myEducation)
        
        console.log(JSON.stringify(myEducation))
     
        updateResume({...resume, education: [...resume.education, myEducation]})

    }
 // Edit information'
//   function handlEditEducation(){}

    return (
        <fieldset id='edu'>
            <legend> Education Info</legend>
            <div>
                <label>High School Deploma or GED:
                    <input type="text" schoolname="schoolname" id="schoolname"></input>
                </label>
                <br /> <br />
                <textarea name="studies" id="degree" col="6" rows="6" placeholder="Enter areas studied and dates you studied here."></textarea>
                <br /> <br />
                <label>College Name:
                    <input type="text" schoolname="collegename" id="collegename"></input>
                </label>
                <br /> <br />
                <textarea name="studies" id="course" col="6" rows="6" placeholder="Enter areas studied and dates you studied here."></textarea>
                <br /> <br />
                <label>Other:
                    <input type="text" schoolname="other" id="other"></input>
                </label>
                <br /> <br />
                <textarea name="studies" id="studies" col="6" rows="6" placeholder="Enter areas studied and dates you studied here."></textarea>



            </div>
            <br />
            <div className="flex">
                <div>
                    <button onClick={handleNewEducation}>Add</button>
                </div>
                 {/* Edit information'*/}
                {/* <div>
                    <button onClick={handlEditEducation}>Edit</button>
                </div> */}
            </div>
        </fieldset>
    )
}


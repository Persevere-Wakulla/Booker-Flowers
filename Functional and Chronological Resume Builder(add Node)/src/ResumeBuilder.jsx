import PersonalInfo from "./components/PersonalInfo";
import EducationalInfo from "./components/EducationalInfo";
import PriorExperience from "./components/PriorExperience";
import Heading from "./components/Heading";
import { useState } from "react";
import NewResume from "./components/NewResume";


// on ResumeBuilder....
// create some super-global-variable ({OBJECT}) to be passed around
// it will compile all the info from inputs
// finally pass it to Control to be displayed

export default function ResumeBuilder() {

    const [myResume, setMyResume] = useState({ personal: {}, education: [], workHistory: [] })

    function handleRetrieveResume() {
        const name = prompt('Choose Name')
        // ask for their name
        // check if theres any data for this person
        if (localStorage.getItem(name)) {
            // grab the data
            // parse it into a variable
            const usersData = JSON.parse(localStorage.getItem(name))
            console.log(usersData)
            // Render through react ways
            setMyResume(usersData) //Setting our state equal to our userData
            // set your state based off the localStorage data
        }

    }

console.log(myResume);

    return (
        <>
            <Heading />
            <PersonalInfo updateResume={setMyResume} resume={myResume} />
            <EducationalInfo updateResume={setMyResume} resume={myResume} />
            <PriorExperience updateResume={setMyResume} resume={myResume} />
            <NewResume resume={myResume} />
            <div>
                <button className='retrieve' onClick={handleRetrieveResume}>Retrieve</button>
            </div>
        </>
    )
}

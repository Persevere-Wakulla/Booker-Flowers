
function Info({ id, value }) {
    return (
        <div>
            <p>{id}: {value}</p>

        </div>
    )
}


export default function PersonalInfo({ resume, updateResume }) {
    function handleNewInfo(ev) {
        // const myInfo = new Map()
        let myInfo = {}
        const inputs = document.querySelectorAll('#personal input')
        inputs.forEach((item) => {
            // console.log(item.id, item.value);
            // myInfo.set(item.id, item.value)
            myInfo[item.id] = item.value;
        })
        console.dir(myInfo);

        for (let [key, value] in myInfo) {
            <Info id={key} value={value} />
        }
        inputs.forEach(item => item.value = '')
        updateResume({...resume, personal: myInfo})
        // resume.personal = myInfo
    }

    // // Edit is to process page to saved resume
    // function handleEditInfo() {

    // }


    return (
        <fieldset id='personal'>
            <legend>Personal Info</legend>

            <div>


                <label htmlFor="fname">FirstName:
                </label>
                <input type="text" fname="fname" id="fname" required></input>
                <br /><br />
                <label htmlFor="mname">MiddleName:
                </label>
                <input type="text" fname="mname" id="mname" required></input>
                <br /><br />
                <label htmlFor="lname">LastName:
                </label>
                <input type="text" lname="lname" id="lname" required></input>
                <br /><br />
                <label htmlFor="email">Email:
                </label>
                <input type="text" email="email" id="email" required></input>
                <br /><br />
                <label htmlFor="email">Address:
                </label>
                <input type="text" address="address" id="address" required></input>
                <br /><br />
                <label htmlFor="city">City:
                </label>
                <input type="text" lname="city" id="city" required></input>
                <br /><br />
                <label htmlFor="state">State:
                </label>
                <input type="text" email="state" id="state" required></input>
                <br /><br />
                <label htmlFor="cellnum">Cell Number:
                </label>
                <input type="text" cellnum="cellnum" id="cellnum" required></input>
            </div>
            <br />
            <div className="flex">
                <div>
                    <button onClick={handleNewInfo}>Add</button>
                </div>
                 {/* Edit is to process page to saved resume */}
                {/* <div>
                    <button onClick={handleEditInfo}>Edit</button>
                </div> */}
            </div>

        </fieldset>
    )
}
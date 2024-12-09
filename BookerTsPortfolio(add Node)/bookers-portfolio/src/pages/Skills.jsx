



function Skills() {




    return (
        <div className='skills-container'>
            <div>
                <h2 className='languages'>Front End</h2>
                <h3>I started learning to code in January of 2024 with the PERSEVERE program.</h3>
                <h3>HTML:</h3>
                <p className='des'>The first coding language taught in my year long PERSEVERE class. The skeleton of the coding experience.</p>
                <h3>CSS:</h3>
                <p className='des'> The skin or dressing layer of coding. This is the beautification of design and creative developement</p>
                <h3>JavaScript:</h3>
                <p className='des'>This is the brains of the code, the telling the computer what you want it to do in logical steps.</p>
                <h3>BootStrap:</h3>
                <p className='des'>Linking in premade code to create a interactive site.</p>
                <h3>React:</h3>
                <p className='des'>A way to use your functions again and again as pre made components.</p>
                <h3>JSON:</h3>
                <p className='des'>Pulling in data using fetch and using said data in programming.</p>
              
            </div>

            <div>
                <img className='success' src='src\assets\images\Bookers Logo.png' alt='success' />
            </div>
            <div>
                <h2 className='languages'>Back End</h2>
                <h3>Node.js:</h3>
                <p className='des'>Working in the server writing to files and directories</p>
                <h3>Mongoose:</h3>
                <p className='des'>Working between the back-end and front-end</p>
                <h3>MongoDB:</h3>
                <p className='des'>Storing data in the database and retrieving and using that data in the our front-end application</p>
             
            </div>

        </div>


    )
}

export default Skills
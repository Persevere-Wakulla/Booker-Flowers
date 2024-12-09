

export default function World() {
    const world = 'src/assets/images/holding-the-earth-in-your-hand.webp';
    const description = 'The world in your hands';


    return(
       <img 
       className="world"
       src= {world}
       alt={description}

       /> 
    );
}
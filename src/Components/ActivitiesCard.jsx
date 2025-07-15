import CardItem from './CardItem';
import './ActivitiesCard.css'
import crafts from '../assets/crafts.jpg';

function ActivitiesCard () {
    return(
      <>
      <main className="mainContainer">
      <div className='activitiesContainer'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={crafts}
              text='Activity 1'
              label='Crafts'
              path='/Activity Details'
            />
            <CardItem
              src={crafts}
              text='Activity 1'
              label='Crafts'
              path='/Activity Details'
            />
            <CardItem
              src={crafts}
              text='Activity 1'
              label='Crafts'
              path='/Activity Details'
            />
            <CardItem
              src={crafts}
              text='Activity 1'
              label='Crafts'
              path='/Activity Details'
            />
            <CardItem
              src={crafts}
              text='Activity 1'
              label='Crafts'
              path='/Activity Details'
            />
            <CardItem
              src={crafts}
              text='Activity 1'
              label='Crafts'
              path='/Activity Details'
            />
          </ul>
        </div>
      </div> 
      </main>   
      </> 
    )
}

export default ActivitiesCard;
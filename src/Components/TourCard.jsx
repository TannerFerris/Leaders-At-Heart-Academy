import './TourCard.css';

function TourCard () {

    //<button className="submit" type="submit">Book Tour</button>

    
    return(
        <>
        <main className="tourMain">
        <div className="bigTitle">COME VISIT US</div>
        <div className="tourContainer">
            <p className="header">Book A Tour</p>
            <form className="tourForm">
                <section className='info'>
                <input className="tourInput" type="text" id="name" name="name" placeholder='Name' required />
                <input className="tourInput" type="email" id="email" name="email" placeholder='Email' required />
                <input className="tourInput" type="tel" id="phone" name="phone" placeholder='Phoner Number' required />
                </section>
                <section className='booking'>
                <label >Preferred Date:</label>
                <input className="tourInput" type="date" id="date" name="date" required />
                <label >Preferred Time:</label>
                <input  className="tourInput"type="time" id="time" name="time" required />
                <div className="submit">No Tours Available</div>
                </section>
            </form>
        </div>
        </main>
        </>
    )
}

export default TourCard;
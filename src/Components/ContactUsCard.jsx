import './ContactUsCard.css';

function ContactUscard() {
    return(
        <>  <main className="ContactUsmain">
            <div className='contactContainer'>
                <div className='detailsContainer'>
                    <ul className='detailItems'>
                        <li>Phone Number</li>
                        <h1>945.228.3740</h1>
                        <li>Email</li>
                        <h1>info@leadersatheart.education</h1>
                        <h1>tjknight@leadersatheart.education</h1>
                        <li>Hours:</li>
                        <h1>Monday 7:30 AM - 5:30 PM</h1>
                        <h1>Tuesday 7:30 AM - 5:30 PM</h1>
                        <h1>Wednesday 7:30 AM - 5:30 PM</h1>
                        <h1>Thursday 7:30 AM - 5:30 PM</h1>

                    </ul>
                </div>
                <div className='messageContainer'>
                    <iframe
                        className="ContactFrame"
                        title="K-8 School Application Form"
                        src="https://form.jotform.com/243046525672154"
                        style={{
                            width: '100%',
                            height: '750px',
                        }}
                    />
                </div>
            </div>
            </main>
        
        </>
    )

}

export default ContactUscard;
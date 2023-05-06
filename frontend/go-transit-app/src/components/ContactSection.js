function ContactSection(){
    return(
    <div className="contactus-bg contactus-wrapper">
                <div className="bottom-section">
                    <div className='flex-container'>
                        <p>Latest travel updates <br/>
                         Be the first to hear about it
                        </p>
                        <form>
                        <input type="email" className="contactEmail" placeholder='enter email'/>
                        <button type='submit' className='cta-btn'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
    )
    }
    export default ContactSection;
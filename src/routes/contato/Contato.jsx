import './Contato.css'

function Contato (){
    return(
        <>
        <section className="Contato">
            <div className="text-ctt">

            </div>
            <form action="#" method="post">
            <div class="form-row">
                <label for="first-name">First name *</label>
                <input type="text" id="first-name" name="first-name" required/>
            </div>
            <div class="form-row">
                <label for="last-name">Last name *</label>
                <input type="text" id="last-name" name="last-name" required/>
            </div>
            <div class="form-row">
                <label for="email">Email *</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div class="form-row">
                <label for="phone">Phone</label>
                <input type="tel" id="phone" name="phone"/>
            </div>
            <div class="form-row">
                <label for="message">Message</label>
                <textarea id="message" name="message"></textarea>
            </div>
            <div class="form-row">
                <input type="submit" value="SUBMIT"/>
            </div>
        </form>
        </section>
        </>
    )
}
export default Contato
import emailjs from 'emailjs-com'
function Menu() {
    function sendEmail (e) {
        e.preventDefault();
        emailjs.sendForm("service_hf5xc8b","template_c21f367",e.target,"HWk80t6aoPaVYaluz").then(res=>{
            console.log(res)
        }).catch(err=> console.log(err));
    }
    return <section className='userThoughts'>
        <div className='coments'>
            <h2>Wyślij Opinie</h2>
            <form onSubmit={sendEmail}>
                <label>
                <input type={'text'} name={'userName'} placeholder={"Twoje imię"} className={"opinion"}/>
                <input type={"email"} name={'userEmail'} placeholder={"Twój Email"} className={"opinion"}/>
                </label>
                <textarea name="message"></textarea>

            </form>
            <button type={'submit'} value={"send"} className={"btn"}>Wyślij</button>
        </div>
    </section>;
}

export default Menu;
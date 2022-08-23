import emailjs from 'emailjs-com'
function Menu() {
    function sendEmail (e) {
        e.preventDefault();
        emailjs.sendForm("service_hf5xc8b","template_c21f367",e.target,"HWk80t6aoPaVYaluz").then(res=>{
            console.log(res)
        }).catch(err=> console.log(err));
    }
    return <section className={'userThoughts'} id={'userThoughts'}>
        <div className={'coments'} >
            <h2>Wyślij Opinie</h2>
            <form onSubmit={sendEmail}>
                <label>
                <input type={'text'} name={'userName'} placeholder={"Twoje imię"} className={"opinion"}/>
                <input type={"email"} name={'userEmail'} placeholder={"Twój Email"} className={"opinion"}/>
                </label>
                <textarea name="message" placeholder={'mile widziana ocena od 0 do 10 :)'}></textarea>
                <button type={'submit'} className={"btn"}>Wyślij</button>
            </form>

        </div>
    </section>;
}

export default Menu;
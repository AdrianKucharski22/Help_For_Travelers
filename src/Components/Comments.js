import React from "react";


function Menu() {
    return <section className='userThoughts'>
        <div className='username'>
            <h2>Twoje imię</h2>
            <p>Name</p>
        </div>
        <div className='coments'>
            <h2>Wyślij Opinie</h2>
            <textarea name="" id=""></textarea>
        </div>
        <div className='marks'>
            <h2>Ocena</h2>
        </div>
    </section>;
}

export default Menu;
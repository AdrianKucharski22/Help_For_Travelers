import Userthings from "./user";

function Menu() {
    return <section className="top-nav nav" name="viewport" content="width=device-width, initial-scale=1">
        <div className="logo">
            <h1 className={'logo'}><a href={"/Help_For_Travelers"}>DriveSafe</a></h1>
        </div>
        <input id="menu-toggle" type="checkbox"/>
        <label className="menu-button-container" htmlFor="menu-toggle">
            <div className="menu-button"></div>
        </label>
        <ul className="menu">
            <Userthings/>
        </ul>
    </section>;
}

export default Menu;
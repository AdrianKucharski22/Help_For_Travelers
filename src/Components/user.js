import "../styles/main.scss"
import React, {useRef, useEffect} from 'react';
const userOptions = document.querySelector(".userOptions")
// userOptions.style.display = 'none'

const UserThings= () => {
    const ref = useRef(null);

    useEffect(() => {
        const HandleClick = ()=> {
            // if (userOptions.style.display ==="none"){
            //     userOptions.style.display = 'block';
            //     return false;
            // }
            // else if (userOptions.style.display ==="block"){
            //     userOptions.style.display = 'none';
            //     return true;
            // }
        };
        const element = ref.current;

        element.addEventListener('click', HandleClick);

        return () => {
            element.removeEventListener('click', HandleClick);
        };
    }, []);
    return (
        <>
            <a href="#" ref={ref} className={"user"}><li>User</li></a>
        </>
    );
};

 export default UserThings;
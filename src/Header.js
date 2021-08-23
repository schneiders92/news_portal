import {Link}from "react-router-dom"


export default function Header(){
    return(
        <header>
            <Link to="/home">#home</Link>
            <Link to="/politics">#politics</Link>
            <Link to="/economy">#economy</Link>
            <Link to="/sport">#sport</Link>
            <Link to="/tech">#tech</Link>
        </header>
    )
}
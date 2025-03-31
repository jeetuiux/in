import { Link, useNavigate } from "react-router-dom"
export function Home(){
    return(
        <>
            <h1>This is home page</h1>
        <Link to="/about">about</Link>
    
        </>
    )
}
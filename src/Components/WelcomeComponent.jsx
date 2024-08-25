import { useParams } from "react-router-dom"

function WelcomeComponent() {

    const {username} = useParams()
    return (

        <div className="welcome">
            <h1>Welcome {username}</h1>
        </div>

    )
}

export default WelcomeComponent
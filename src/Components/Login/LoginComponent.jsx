import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { loginUser } from "../../Api/UserApi/UserService"


function LoginComponent() {

    const[username,setUsername] = useState('')
    const[password,setPassword] = useState('')

    const[checkfields,setCheckFields] = useState(false)
    const[CheckFieldMessage,setCheckFieldMessage] = useState('')

    const navigate = useNavigate()



    async function handleLogin() {
        if (username.trim() !== "" && password.trim() !== "") {
            const user = {
                name: username,
                password: password
            };

            try {
                const response = await loginUser(user);
                
                navigate(`/welcome/${username}`)
            } catch (error) {

                if(error.response.data!=null) {
                    setCheckFields(true)
                    setCheckFieldMessage(error.response.data)
                }
                else {

                    setCheckFields(true);
                    setCheckFieldMessage("Login failed. Please try again.");
                }

            } finally {
                console.log("Cleanup or additional tasks can be done here.");
            }
        } else {
            setCheckFields(true);
            setCheckFieldMessage("Please fill in all required fields.");
        }
    }
    


    function handleSignup() {
        navigate(`/signup`)

    }


    return (
        <div className="login">

            <div className="SignupForm">


                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <label><h2>SIGN IN</h2></label>
                        </div>
                    </div>
                

                <div>
                    <label>UserName</label>
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>


                <div className="row mt-3">
                    <div className="col text-center">
                        {/* <button type="submit" name="login" onClick={handleLogin}>Login</button> */}

                        <button onClick={handleLogin} className="btn btn-primary rounded m-3">Login</button>
                        <button type="submit" name="signup" onClick={handleSignup} className="btn btn-primary rounded">Signup</button>
                    </div>
                </div>

                {checkfields && <p>{CheckFieldMessage}</p>}


                

            </div>

        </div>

        </div>
    )
}

export default LoginComponent
import { useState } from "react"
import { createUser } from "../../Api/UserApi/UserService"


function SignupComponent() {

    const[username,setUsername] = useState('')
    const[password,setPassword] = useState('')

    const[message,setMessage] = useState('')
    const[showSuccessMessage,setSuccessMessage] = useState(false)

    const[checkfields,setCheckFields] = useState(false)
    const[CheckFieldMessage,setCheckFieldMessage] = useState('')


    async function handleSignup() {
        
        if(username.length!=0 && password.length!=0) {

            const user = {
                name : username,
                password : password
            }

            try {
                const response = await createUser(user);
                userCreated(response)
            } catch (error) {
                console.error('Signup failed:', error);
                setCheckFields(true);
                setCheckFieldMessage("Signup failed. Please try again.");
            } finally {
                console.log("Cleanup or additional tasks can be done here.");
            }
    
        }
        else {

            setCheckFields(true)
            setCheckFieldMessage("Check your fields")

        }


    }

    function userCreated(response) {
        
        setMessage(response.data)
        setSuccessMessage(true)
    }

    return (
        <div className="signup">

            <div className="SignupForm">

            {showSuccessMessage && <div className="text-Info mt-2 ">{message}</div> }

            {checkfields && <div className="text-Info mt-2 ">{CheckFieldMessage}</div> }


                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <label><h2>SIGN UP</h2></label>
                        </div>
                    </div>
                

                <div>
                    <label>UserName</label>
                    <input type="text" name="username" required value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="row mt-3">
                    <div className="col text-center">
                        <button type="submit" name="signup" onClick={handleSignup} className="btn btn-primary rounded me+10">Signup</button>
                    </div>
                </div>

                


                

            </div>

        </div>
        </div>
    )

}

export default SignupComponent
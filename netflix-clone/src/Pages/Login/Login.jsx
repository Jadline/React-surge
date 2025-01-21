import './Login.css'
import Logo  from  '../../assets/logo.png'
import { useState } from 'react'
import { login,signup } from '../../firebase'
function Login(){
    const[name,setName] = useState('')
    const [email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const [signState,setSignState] = useState('Sign In')

    async function userAuth(event){
        event.preventDefault()
        if(signState === 'Sign In')
            await login(email,password)
        else 
            await signup(name,email,password)


    }
    return(
        <div className='login'>
            <img src={Logo} alt="" className="login-logo" />
            <div className="login-form">
                <h1>{signState}</h1>
                <form>
                    {signState === 'Sign Up' ? <input type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)}/> : ''}
                    <input type="email"  placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={userAuth} type='submit'>{signState}</button>
                    <div className="form-help">
                        <div className="remember">
                            <input type="checkbox" id='remember'/>
                            <label htmlFor='remember'>Remember Me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                <div className="form-switch">
                    {signState === 'Sign In' ? <p>New to Netflix? <span onClick={() =>setSignState('Sign Up')}>Sign Up Now</span></p> : <p>Already have account? <span onClick={() => setSignState('Sign In')}>Sign In Now</span></p>}
                    
                </div>
            </div>
        </div>
    )
}
export default Login
import '../index.css';
import Navbar from '../Components/Navbar';
import { signup, useCurrentUser } from '../Utils/Firebase';
import { useRef, useState } from 'react';

const SignupPage: React.FC = () => {
    return (
        <div className='h-screen w-screen max-w-full max-h-full scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent'>
            <Navbar />
            <div className='h-screen w-screen max-w-full bg-soccer-ball-pattern flex justify-center items-center'>
                <SignupHero/>
            </div>
        </div>

    );
}

const SignupHero: React.FC = () => {
    
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmRef = useRef<HTMLInputElement>(null);

    const currentUser = useCurrentUser();

    const [loading, setLoading] = useState(false);

    async function handleSignup() {
        if(emailRef.current===null || passwordRef.current===null || passwordConfirmRef.current===null)
            return;
        if(passwordRef.current.value!==passwordConfirmRef.current.value)
            return;
        setLoading(true);
        try{
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert("ERROR");
        }
        setLoading(false);
        
    }

    return (
        <div className="hero h-2/3 w-1/2 bg-base-300 rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up</h1>
                    <p className="py-6">Select your favorite teams and check their next matches and previous results at any time</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={emailRef} type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input ref={passwordRef} type="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input ref={passwordConfirmRef} type="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={loading || currentUser!==null} onClick={handleSignup} className="btn btn-primary bg-green-500 hover:bg-green-600 border-green-600 hover:border-green-600">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
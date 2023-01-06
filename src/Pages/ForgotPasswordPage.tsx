import { resetPassword } from "../Utils/Firebase";
import { useRef, useState } from 'react';
import Navbar from "../Components/Navbar";

const ForgotPasswordPage: React.FC = () => {
    return(
        <div className="h-screen w-screen max-w-full bg-soccer-ball-pattern">
            <Navbar/>
            <div className="h-screen w-screen max-w-full bg-soccer-ball-pattern flex justify-center items-center">
                <LoginHero/>
            </div>
        </div>
    )
}

const LoginHero: React.FC = () => {

    const emailRef = useRef<HTMLInputElement>(null);

    const [loading, setLoading] = useState(false);

    async function handleReset() {
        if(emailRef.current===null)
            return;
        setLoading(true);
        try {
            await resetPassword(emailRef.current.value);
            alert("email sent!");
            emailRef.current.value = "";
        } catch {
            alert("No email");
        }
        setLoading(false);
    }

    return (
        <div className="hero h-1/2 w-1/2 bg-base-300 rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Reset Password</h1>
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
                        <div className="form-control mt-6">
                            <button disabled={loading} onClick={handleReset} className="btn btn-primary bg-green-500 hover:bg-green-600 border-green-600 hover:border-green-600">Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordPage;
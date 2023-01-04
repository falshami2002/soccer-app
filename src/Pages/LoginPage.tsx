import '../index.css';
import Navbar from '../Components/Navbar';

const LoginPage = () => {
    return (
        <div className='h-screen w-screen max-w-full max-h-full scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent'>
            <Navbar />
            <div className='h-screen w-screen max-w-full bg-soccer-ball-pattern flex justify-center items-center'>
                <LoginHero/>
            </div>
        </div>

    );
}

const LoginHero = () => {
    return (
        <div className="hero h-1/2 w-1/2 bg-base-300 rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login</h1>
                    <p className="py-6">Select your favorite teams and check their next matches and previous results at any time</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-green-500 hover:bg-green-600 border-green-600 hover:border-green-600">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
import React from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    let navigate = useNavigate();

    function handleRegister() {
        navigate('/profile');
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-custom-beige">
            <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-custom-green">Create your account</h2>
                </div>
                <form className="mt-8 space-y-6">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="username" className="sr-only">Username</label>
                            <input id="username" name="username" type="text" autoComplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-custom-green focus:border-custom-green focus:z-10 sm:text-sm" placeholder="Username" />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-custom-green focus:border-custom-green focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>

                    <div>
                        <button type="button" onClick={handleRegister} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-custom-green hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-green">
                            Register
                        </button>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Already have an account? <button onClick={() => navigate('/login')} className="font-medium text-custom-green hover:text-green-700">Sign in</button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;

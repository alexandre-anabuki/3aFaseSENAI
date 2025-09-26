
const LoginForm = () => {
    return(
        <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <form className="space-y-4">

                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" id="email" value="" required className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>

                <div>

                </div>
            </form>
        </div>
    )
}

export default LoginForm
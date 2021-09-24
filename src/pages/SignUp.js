import React from "react";

function SignUp() {
  return (
    <div className="container flex flex-col justify-center h-hero  mx-auto items-center">
      <h1 className="font-Roboto font-semibold text-center text-gray-600 text-9xl mb-6">
        Create your account
      </h1>
      <div className="bg-white w-96 pt-10 pb-8 px-10 shadow-2xl rounded-lg">
        <form className="mb-0 space-y-6">
          <div>
            <div className="mb-2">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="username"
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600 focus:ring-1"
                />
              </div>
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600 focus:ring-1"
                />
              </div>
            </div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                type="password"
                id="password"
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600 focus:ring-1"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent shadow-sm bg-primary hover:opacity-95 font-Roboto font-medium text-white text-center text-lg rounded-lg focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-indigo-600 hover:shadow-md "
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

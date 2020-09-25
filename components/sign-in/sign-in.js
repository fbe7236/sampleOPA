function SignIn() {
return (
    <div class="lg:w-2/6 md:w-1/2 bg-gray-800 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 class="text-white text-lg font-medium title-font mb-5">Sign In</h2>
      <input class="bg-gray-900 rounded border text-white border-gray-900 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="E-Mail" type="email"/>
      <input class="bg-gray-900 rounded border text-white border-gray-900 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Password" type="password"/>
      <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Log In</button>
      <p class="text-xs text-gray-600 mt-3">Literally you probably haven't heard of them jean shorts.</p>
    </div>
)
}

export default SignIn;
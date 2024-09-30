function Newsletter() {
  return (
    <div className=" mt-28 py-20 px-6 flex flex-col items-center">
      <h2 className="text-white text-5xl font-bold mb-11 text-center">
        Subscribe and Get <br /> 15% Off Your First Purchase
      </h2>
      <form className="w-full max-w-3xl">
        <div className="flex flex-col items-start mb-3 w-full">
          <div className=" mt-11">
          <label className="text-white mb-2 text-xl " htmlFor="email">
            Email *
          </label>
          <div className="flex w-full">
            <input
              className="appearance-none block w-[600px] bg-white text-gray-900 border border-gray-300 rounded-full py-4 px-4 text-xl leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="email"
              type="email"
              placeholder="Sign up here"
              style={{ height: '60px'}} // Custom height for input
            />
            <button
              type="submit"
              className=" ml-5 shadow-lg shadow-violet-500/50 font-normal bg-violet-600 hover:bg-white text-white px-7 h-11 hover:text-black rounded-full"
              style={{ height: '60px', width: '150px' }} // Custom height for button
            >
              Subscribe
            </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Newsletter;



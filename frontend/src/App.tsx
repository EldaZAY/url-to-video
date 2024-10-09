

function App() {

  return (
    <>
      <div className="bg-gradient-to-b from-slate-600 to-black to-40% text-white min-h-dvh gap-x-28">
        <main className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 px-10 gap-8 py-16">
          <div className="flex flex-col justify-center py-4">
            <h1 className="text-4xl font-bold uppercase mb-4">
              <span className="text-5xl">
                URL to Video
              </span>
              <br />
              <span className="bg-gradient-to-br from-violet-500 from-20% to-sky-500 bg-clip-text text-transparent">
                Powered by AI
              </span>
            </h1>
            <form className="min-w-min max-w-md flex border-2 border-slate-600 rounded-full p-1">
              <input 
                className="bg-transparent text-white p-2 grow" 
                type="url" placeholder="https://..."/>
              <button className="bg-slate-400 bg-opacity-60 text-black  font-semibold rounded-full px-4" type="submit">
                Create&nbsp;Video
              </button>
            </form>
          </div>
          <div className="md:pt-10">
            <div className="bg-gray-200 w-[320px] h-[460px] text-gray-500 rounded-2xl"></div>
          </div>

        </main>
      </div>
    </>
  )
}

export default App

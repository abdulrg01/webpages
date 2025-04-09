
export default function MainSection() {
  return (
    <div className="min-h-screen bg-[#18181b] border-t border-black/10 dark:border-white/10 mt-20 text-white">
      <div className="md:pt-20 my-10">
        <div className="md:-mb-40">
          <h1 className="text-4xl font-semibold max-w-3xl md:px-20 px-7 text-start relative z-20 py-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Idea to website in hours,{" "} <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">not days</span>
          </h1>
          <p className="max-w-3xl md:px-20 px-7 my-3 text-start text-xl text-neutral-400 dark:text-neutral-300">
            Get the best in class components and templates to rapidly prototype
            and build professional looking websites.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 mb-12">
          <div className="md:col-span-4 md:mt-80 gap-3">
            <div className="mb-3">
              <img
                className="w-full h-[300px] md:h-[500px] rounded-lg"
                src="https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80"
                alt=""
              />
            </div>
            <div className="md:hidden flex">
              <img
                className="w-full h-[300px] md:h-[500px] rounded-lg"
                src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
              />
            </div>
          </div>
          <div className="md:col-span-4 md:mt-48">
            <div className="grid grid-cols-1 border-x border-gray-600 border-dashed gap-6 mb-12">
              <div>
                <img
                  className="w-full h-[300px] md:h-[500px] rounded-lg"
                  src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
                  alt=""
                />
              </div>

              <div>
                <img
                  className="w-full h-[250px] rounded-lg"
                  src="https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-4 hidden md:grid">
            <div className="space-y-6">
              <div>
                <img
                  className="w-full h-[300px] md:h-[500px] rounded-lg"
                  src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-full h-[300px] md:h-[500px] rounded-lg"
                  src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-8 px-4">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-800 tracking-tight">
            Hello World
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Welcome to your Next.js application
          </p>
        </div>
        
        <div className="space-y-2">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Built with Next.js, TypeScript, and Tailwind CSS for a modern web experience
          </p>
        </div>

        <div className="animate-pulse">
          <div className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
          <div className="inline-block w-3 h-3 bg-indigo-500 rounded-full mr-1"></div>
          <div className="inline-block w-3 h-3 bg-purple-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
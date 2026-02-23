import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">
          VAPIX Echo ACAP
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          ACAP app of VAPIX testing tool
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Swagger UI</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            View and interact with the API documentation using Swagger UI.
            Supports multiple themes for better visualization.
          </p>
          <Link
            href="/swagger"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Open Swagger UI →
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-500 text-center">
          <p>
            Personal Project - This work is done in my personal capacity and has
            no relation to my employer or any organization I am affiliated with.
          </p>
        </div>
      </main>
    </div>
  );
}

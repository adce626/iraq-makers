export default function Loading() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-800 rounded-lg w-48 mb-4" />
          <div className="h-4 bg-gray-800 rounded-lg w-96 mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-[300px] bg-gray-800 rounded-2xl" />
            <div className="space-y-4">
              <div className="h-6 bg-gray-800 rounded-lg w-3/4" />
              <div className="h-4 bg-gray-800 rounded-lg w-full" />
              <div className="h-4 bg-gray-800 rounded-lg w-5/6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
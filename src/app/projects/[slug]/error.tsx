'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-12 max-w-lg mx-auto">
          <svg className="w-16 h-16 mx-auto text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <h2 className="text-xl font-bold text-white mb-2">عذراً، حدث خطأ</h2>
          <p className="text-gray-400 mb-6">لم نتمكن من تحميل هذه الصفحة. يرجى المحاولة مرة أخرى.</p>
          <button
            onClick={reset}
            className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-all font-medium"
          >
            إعادة المحاولة
          </button>
        </div>
      </div>
    </div>
  );
}
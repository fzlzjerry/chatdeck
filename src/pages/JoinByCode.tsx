import { Hash } from "lucide-react";

export function JoinByCode() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-gray-900 rounded-2xl shadow-xl border border-violet-900/50 overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-center mb-6">
            <Hash className="h-12 w-12 text-violet-400" />
          </div>
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Join Room by Code
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Room Code
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-800 border border-violet-900/50 rounded-lg text-white focus:outline-none focus:border-violet-500 text-center text-2xl tracking-wide"
                placeholder="Enter room code..."
                maxLength={6}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password (if required)
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-gray-800 border border-violet-900/50 rounded-lg text-white focus:outline-none focus:border-violet-500"
                placeholder="Enter room password..."
              />
            </div>

            <div className="pt-4">
              <button className="w-full bg-violet-600 text-white py-3 rounded-lg hover:bg-violet-700 transition-colors">
                Join Room
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-gray-400 text-sm">
            Room codes are 6 characters long and case-sensitive
          </p>
        </div>
      </div>
    </div>
  );
}

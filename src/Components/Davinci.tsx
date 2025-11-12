

// const Davinci = () => {
//   return (
//     <div>
//       <h1>Here we only talk Davinci, nothing more nothing less.</h1>
//     </div>
//   )
// }

// export default Davinci

import { useState } from 'react';
import { Send, TrendingUp, TrendingDown, Loader2, Sparkles } from 'lucide-react';

export default function Davinci() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);

  const API_URL = 'http://localhost:8000';

  const analyzeSentiment = async () => {
    if (!text.trim()) {
      setError('Please enter some text to analyze');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch(`${API_URL}/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text.trim() }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze sentiment');
      }

      const data = await response.json();
      setResult(data);
      
      // Add to history
      setHistory(prev => [
        { ...data, timestamp: new Date().toLocaleTimeString() },
        ...prev.slice(0, 6)
      ]);
      
    } catch (err) {
      setError('Error connecting to API. Make sure the backend is running on port 8000.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      analyzeSentiment();
    }
  };

  const exampleTexts = [
    "This product is absolutely amazing! I love it!",
    "Terrible experience. Would not recommend.",
    "It's okay, nothing special but does the job."
  ];

  const loadExample = (example) => {
    setText(example);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-8 h-8 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-800">Sentiment Analyzer</h1>
          </div>
          <p className="text-gray-600">Powered by DistilBERT & TensorFlow</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          {/* Input Section */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Enter your text:
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type or paste your text here..."
              className="w-full h-32 p-4 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
            />
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm text-gray-500">
                {text.length} characters
              </span>
              <button
                onClick={() => setText('')}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Example Texts */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-700 mb-2">Try examples:</p>
            <div className="flex flex-wrap gap-2">
              {exampleTexts.map((example, idx) => (
                <button
                  key={idx}
                  onClick={() => loadExample(example)}
                  className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-full transition-colors"
                >
                  {example.slice(0, 30)}...
                </button>
              ))}
            </div>
          </div>

          {/* Analyze Button */}
          <button
            onClick={analyzeSentiment}
            disabled={loading || !text.trim()}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Analyze Sentiment
              </>
            )}
          </button>

          {/* Error Message */}
          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {/* Result */}
          {result && (
            <div className="mt-6 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg border-2 border-indigo-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {result.sentiment === 'Positive' ? (
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  ) : (
                    <TrendingDown className="w-8 h-8 text-red-600" />
                  )}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {result.sentiment}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Confidence: {(result.confidence * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
              </div>

              {/* Probability Bars */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-700">Positive</span>
                    <span className="text-gray-600">
                      {(result.probabilities.positive * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-green-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${result.probabilities.positive * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-700">Negative</span>
                    <span className="text-gray-600">
                      {(result.probabilities.negative * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-red-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${result.probabilities.negative * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* History */}
        {history.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Analyses</h2>
            <div className="space-y-3">
              {history.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-gray-700 mb-2">
                        "{item.text.slice(0, 80)}{item.text.length > 80 ? '...' : ''}"
                      </p>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-semibold px-2 py-1 rounded ${
                            item.sentiment === 'Positive'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {item.sentiment}
                        </span>
                        <span className="text-xs text-gray-500">
                          {(item.confidence * 100).toFixed(0)}% confident
                        </span>
                        <span className="text-xs text-gray-400">• {item.timestamp}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
import { useState } from 'react';
import { animals } from './data/animals.ts';

function App() {
  const [inputNumber, setInputNumber] = useState<string>('');
  const [selectedAnimal, setSelectedAnimal] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const handleSearch = () => {
    const num = parseInt(inputNumber);
    if (isNaN(num)) {
      setError('正しい数字を入力してください');
      setSelectedAnimal(null);
      return;
    }
    if (num < 1 || num > 1000) {
      setError('1から1000までの数字を入力してください');
      setSelectedAnimal(null);
      return;
    }
    const animal = animals.find(a => a.number === num);
    if (!animal) {
      setError('該当する動物が見つかりません');
      setSelectedAnimal(null);
      return;
    }

    const updatedAnimal = {
      ...animal,
      image: new URL(`../public/images/${animal.image}`, import.meta.url).href,
      sound: new URL(`../public/sounds/${animal.sound}`, import.meta.url).href
    };

    setError('');
    setSelectedAnimal(updatedAnimal);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-bold text-center mb-8">動物番号検索</h1>
                <div className="flex flex-col gap-4">
                  <input
                    type="number"
                    value={inputNumber}
                    onChange={(e) => setInputNumber(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    placeholder="数字を入力 (1-1000)"
                    className="px-4 py-2 border rounded-md"
                  />
                  <button
                    onClick={handleSearch}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    検索
                  </button>
                </div>

                {error && (
                  <div className="text-red-500 mt-4 text-center">
                    {error}
                  </div>
                )}

                {selectedAnimal && (
                  <div className="mt-8">
                    <img
                      src={selectedAnimal.image}
                      alt={selectedAnimal.nameJa}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <h2 className="text-xl font-bold mb-2">
                      {selectedAnimal.nameJa} ({selectedAnimal.nameEn})
                    </h2>
                    <p className="text-gray-600 mb-4">{selectedAnimal.description}</p>
                    <audio
                      controls
                      className="w-full"
                    >
                      <source src={selectedAnimal.sound} type="audio/mpeg" />
                      お使いのブラウザは音声再生に対応していません
                    </audio>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

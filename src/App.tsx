import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Volume2, VolumeX } from "lucide-react"
import { ANIMALS, Animal } from "./data/animals"

function App() {
  const [inputNumber, setInputNumber] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputNumber(e.target.value)
    setError('')
    setSelectedAnimal(null)
    stopSound()
  }

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault()

    if (!inputNumber) {
      setError('正しい数字を入力してください')
      return
    }

    const num = parseInt(inputNumber)
    if (isNaN(num)) {
      setError('正しい数字を入力してください')
      return
    }

    if (num < 1 || num > 1000) {
      setError('1から1000までの数字を入力してください')
      return
    }

    const index = (num - 1) % ANIMALS.length
    const animal = ANIMALS[index]
    setSelectedAnimal(animal)
    stopSound()
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const playSound = () => {
    if (selectedAnimal) {
      stopSound()
      const newAudio = new Audio(selectedAnimal.sound_path)
      newAudio.addEventListener('ended', () => setIsPlaying(false))
      newAudio.play().catch(error => {
        console.error('Error playing sound:', error)
        setIsPlaying(false)
      })
      setAudio(newAudio)
      setIsPlaying(true)
    }
  }

  const stopSound = () => {
    if (audio) {
      audio.pause()
      audio.currentTime = 0
      setIsPlaying(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">動物番号検索</h1>
          <p className="text-gray-600">1から1000までの数字を入力してください</p>
        </div>

        <div className="flex gap-4 justify-center mb-8">
          <Input
            type="text"
            value={inputNumber}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="数字を入力 (1-1000)"
            className="w-48"
          />
          <Button onClick={() => handleSubmit()}>検索</Button>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-8">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {selectedAnimal && (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex justify-between items-center">
                <span>{selectedAnimal.name_jp} ({selectedAnimal.name_en})</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={isPlaying ? stopSound : playSound}
                  className="ml-4"
                >
                  {isPlaying ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <img
                  src={selectedAnimal.image_path}
                  alt={selectedAnimal.name_en}
                  className="w-full h-64 object-cover rounded-lg"
                  onError={(e) => console.error('Error loading image:', e)}
                />
                <p className="text-gray-700 text-lg">
                  {selectedAnimal.description}
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default App

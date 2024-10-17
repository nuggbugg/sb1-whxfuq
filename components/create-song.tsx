"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { BufferingAnimation } from "@/components/buffering-animation"
import { Music } from "lucide-react"

const musicStyles = ["Pop", "Rock", "Reggae", "Rap", "Country", "Jazz", "Classical", "Electronic"]

const voices = [
  { name: "Viktor Leksell", image: "https://cdn.shopify.com/s/files/1/0025/6311/3030/files/Viktor_Leksell.webp?v=1729109420" },
  { name: "Veronica Maggio", image: "https://cdn.shopify.com/s/files/1/0025/6311/3030/files/ab6761610000e5ebb1b12c57641adcce01d1eb1d.jpg?v=1729109410" },
  { name: "Håkan Hellström", image: "https://cdn.shopify.com/s/files/1/0025/6311/3030/files/Hakan_Hellstrom.jpg?v=1729109412" },
  { name: "Thomas Ledin", image: "https://cdn.shopify.com/s/files/1/0025/6311/3030/files/nedladdning.webp?v=1729109415" },
  { name: "Peg Parnevik", image: "https://cdn.shopify.com/s/files/1/0025/6311/3030/files/Peg_Parnevik_20240713.jpg?v=1729109418" },
  { name: "Ellen Krauss", image: "https://cdn.shopify.com/s/files/1/0025/6311/3030/files/images_1.jpg?v=1729109411" },
]

interface Song {
  title: string;
  vocals: string;
  genre: string;
}

interface CreateSongProps {
  onCreateSong: (song: Song) => void;
}

export function CreateSong({ onCreateSong }: CreateSongProps) {
  const [selectedStyle, setSelectedStyle] = useState("")
  const [selectedVoice, setSelectedVoice] = useState("")
  const [songDescription, setSongDescription] = useState("")
  const [songTitle, setSongTitle] = useState("")
  const [isCreating, setIsCreating] = useState(false)

  const handleCreateSong = () => {
    if (songTitle && selectedStyle && selectedVoice) {
      setIsCreating(true)
      const newSong: Song = {
        title: songTitle,
        vocals: selectedVoice,
        genre: selectedStyle,
      }
      
      // Simulate song creation process
      setTimeout(() => {
        onCreateSong(newSong)
        setIsCreating(false)
        // Reset form
        setSongDescription("")
        setSongTitle("")
        setSelectedStyle("")
        setSelectedVoice("")
      }, 2000)
    }
  }

  return (
    <div className="w-2/3 space-y-6 relative">
      {isCreating && <BufferingAnimation />}
      <Textarea
        placeholder="Write what kind of song you want to create"
        className="h-32 bg-secondary border-secondary"
        value={songDescription}
        onChange={(e) => setSongDescription(e.target.value)}
      />
      <div className="space-y-2">
        <label className="block text-sm font-medium mb-2">Style of Music</label>
        <Input
          placeholder="Enter style of music"
          value={selectedStyle}
          onChange={(e) => setSelectedStyle(e.target.value)}
          className="bg-secondary border-secondary mb-2"
        />
        <div className="flex flex-wrap gap-2">
          {musicStyles.map((style) => (
            <Button
              key={style}
              variant={selectedStyle === style ? "secondary" : "outline"}
              size="sm"
              onClick={() => setSelectedStyle(style)}
              className={cn(selectedStyle === style && "bg-primary text-primary-foreground")}
            >
              {style}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Title</label>
        <Input 
          placeholder="Give your song a title for searching, discovery and organisation" 
          className="bg-secondary border-secondary"
          value={songTitle}
          onChange={(e) => setSongTitle(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Which {selectedStyle} voice do you want to use?</label>
        <Input type="search" placeholder="Search voices..." className="mb-4 bg-secondary border-secondary" />
        <div className="grid grid-cols-3 gap-4">
          {voices.map((voice) => (
            <Button
              key={voice.name}
              variant={selectedVoice === voice.name ? "secondary" : "outline"}
              className={cn(
                "h-auto py-2 px-4 justify-start",
                selectedVoice === voice.name ? "bg-primary text-primary-foreground" : "bg-secondary"
              )}
              onClick={() => setSelectedVoice(voice.name)}
            >
              <img src={voice.image} alt={voice.name} className="w-8 h-8 rounded-full mr-2 object-cover" />
              <span>{voice.name}</span>
            </Button>
          ))}
        </div>
      </div>
      <Button 
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg font-semibold"
        onClick={handleCreateSong}
        disabled={isCreating}
      >
        <Music className="mr-2 h-5 w-5" />
        {isCreating ? "Creating..." : "Create song"}
      </Button>
    </div>
  )
}
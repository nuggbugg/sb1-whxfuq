"use client"

import { X, Play, Pause, SkipBack, SkipForward } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from 'next/image'
import { useState } from "react"

interface Song {
  title: string;
  vocals: string;
  genre: string;
}

interface SongDetailPopupProps {
  song: Song;
  onClose: () => void;
}

export function SongDetailPopup({ song, onClose }: SongDetailPopupProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <Card className="fixed top-0 right-0 w-1/3 h-full bg-background border-l border-border overflow-y-auto p-6">
      <Button 
        variant="ghost" 
        size="icon"
        className="absolute top-4 right-4"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </Button>
      
      <div className="mb-6">
        <Image
          src="https://cdn.shopify.com/s/files/1/0025/6311/3030/files/linzan_generate_a_face_image_of_Drake_were_half_face_is_real__3e4d9f88-d05e-4253-bc83-229b2f970d21_3.png?v=1729110094"
          alt="Song cover"
          width={300}
          height={300}
          className="rounded-lg mx-auto"
        />
      </div>

      <h2 className="text-2xl font-bold mb-2">{song.title}</h2>
      <p className="text-muted-foreground mb-4">Vocals by: {song.vocals}</p>

      <div className="flex justify-center items-center space-x-4 mb-6">
        <Button variant="outline" size="icon">
          <SkipBack className="h-6 w-6" />
        </Button>
        <Button 
          variant="default" 
          size="icon" 
          className="h-14 w-14"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <Pause className="h-8 w-8" />
          ) : (
            <Play className="h-8 w-8" />
          )}
        </Button>
        <Button variant="outline" size="icon">
          <SkipForward className="h-6 w-6" />
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Genre</h3>
          <p className="text-muted-foreground">{song.genre}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p className="text-muted-foreground">
            Uplifting, mid-tempo, with emotional yet joyful vocals. Incorporates acoustic and electric guitars, drums.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Lyrics</h3>
          <p className="text-muted-foreground">
            [Verse 1]<br />
            In the city lights, we dance tonight<br />
            Our hearts in sync, everything feels right<br />
            Your smile shines bright, guiding me through<br />
            This magical moment, just me and you<br />
            <br />
            [Chorus]<br />
            We're living in a dream<br />
            Nothing's as it seems<br />
            But with you by my side<br />
            I'm ready for the ride<br />
          </p>
        </div>
      </div>
    </Card>
  )
}
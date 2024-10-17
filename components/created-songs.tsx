"use client"

import { useState } from "react"
import { ThumbsUp, ThumbsDown, Share2, MoreVertical, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import Image from 'next/image'
import { SongDetailPopup } from "@/components/song-detail-popup"

interface Song {
  title: string;
  vocals: string;
  genre: string;
}

interface CreatedSongsProps {
  songs: Song[];
}

export function CreatedSongs({ songs }: CreatedSongsProps) {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null)

  return (
    <div className="w-1/3 space-y-4">
      {songs.map((song, index) => (
        <Card 
          key={index} 
          className="bg-secondary border-secondary overflow-hidden cursor-pointer hover:bg-secondary/80 transition-colors"
          onClick={() => setSelectedSong(song)}
        >
          <div className="flex p-4 items-center">
            <div className="relative w-20 h-20 flex-shrink-0 mr-4">
              <Image
                src="https://cdn.shopify.com/s/files/1/0025/6311/3030/files/linzan_generate_a_face_image_of_Drake_were_half_face_is_real__3e4d9f88-d05e-4253-bc83-229b2f970d21_3.png?v=1729110094"
                alt="Song cover"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
                <Play className="w-8 h-8 text-white opacity-80 hover:opacity-100 cursor-pointer" />
              </div>
              <div className="absolute bottom-1 right-1 bg-black bg-opacity-60 text-white text-xs px-1 rounded">
                3:05
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-semibold text-white truncate">{song.title}</h3>
                <span className="text-xs text-muted-foreground bg-background px-2 py-1 rounded">v3.5</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                {song.genre}, uplifting, mid-tempo, with emotional yet joyful vocals
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" className="hover:bg-primary/20 hover:text-primary px-2 py-1 h-8">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:bg-primary/20 hover:text-primary px-2 py-1 h-8">
                    <ThumbsDown className="h-4 w-4 mr-1" />
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" className="hover:bg-primary/20 hover:text-primary px-2 py-1 h-8">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-muted-foreground">Public</span>
                    <Switch />
                  </div>
                  <Button variant="ghost" size="sm" className="hover:bg-primary/20 hover:text-primary px-2 py-1 h-8">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
      {selectedSong && (
        <SongDetailPopup song={selectedSong} onClose={() => setSelectedSong(null)} />
      )}
    </div>
  )
}
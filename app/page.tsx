"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { CreateSong } from "@/components/create-song"
import { CreatedSongs } from "@/components/created-songs"
import { ThemeProvider } from "@/components/theme-provider"

interface Song {
  title: string;
  vocals: string;
  genre: string;
}

export default function Home() {
  const [createdSongs, setCreatedSongs] = useState<Song[]>([])

  const handleCreateSong = (newSong: Song) => {
    setCreatedSongs([...createdSongs, newSong])
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex h-screen bg-background text-foreground">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <h1 className="text-3xl font-bold mb-6">Create a Song</h1>
          <div className="flex gap-6">
            <CreateSong onCreateSong={handleCreateSong} />
            <CreatedSongs songs={createdSongs} />
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}
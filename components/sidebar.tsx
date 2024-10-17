"use client"

import { Settings, Compass, Trophy, Users, LogOut, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'

export function Sidebar() {
  return (
    <div className="w-64 bg-card text-card-foreground p-4 flex flex-col h-full">
      <div className="flex items-center mb-8">
        <Image
          src="https://storage.googleapis.com/songfox-files/songfox%20OrdLoga_vit-19%203.svg"
          alt="Songfox Logo"
          width={150}
          height={40}
        />
      </div>
      <div className="flex items-center mb-8 bg-secondary p-3 rounded-lg">
        <Avatar className="h-10 w-10 mr-3 ring-2 ring-primary">
          <AvatarImage src="https://cdn.shopify.com/s/files/1/0025/6311/3030/files/erik_prof.png?v=1728633956" alt="@erik" />
          <AvatarFallback>E</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">@erik</p>
          <p className="text-sm text-muted-foreground">erik@gmail.com</p>
        </div>
      </div>
      <nav className="space-y-2 flex-1">
        <Button variant="ghost" className="w-full justify-start hover:bg-secondary hover:text-primary">
          <Music className="mr-2 h-4 w-4" />
          Compose a Song
        </Button>
        <Button variant="ghost" className="w-full justify-start hover:bg-secondary hover:text-primary">
          <Compass className="mr-2 h-4 w-4" />
          Explore
        </Button>
        <Button variant="ghost" className="w-full justify-start hover:bg-secondary hover:text-primary">
          <Trophy className="mr-2 h-4 w-4" />
          AI Song Contest
        </Button>
        <Button variant="ghost" className="w-full justify-start hover:bg-secondary hover:text-primary">
          <Users className="mr-2 h-4 w-4" />
          Fan Club
        </Button>
        <Button variant="ghost" className="w-full justify-start hover:bg-secondary hover:text-primary">
          <Settings className="mr-2 h-4 w-4" />
          Song Settings
        </Button>
      </nav>
      <div className="mt-auto">
        <p className="text-sm text-muted-foreground mb-2">90 credits left</p>
        <Button className="w-full mb-4 bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
        <Button variant="ghost" className="w-full justify-start text-destructive hover:bg-secondary">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}
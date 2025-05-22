"use client"

import { useState, useEffect } from "react"

interface CountdownProps {
  endTime: string
}

export default function MaintenanceCountdown({ endTime }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date(endTime).getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [endTime])

  return (
    <div className="text-center">
      <h3 className="text-lg font-medium text-zinc-300 mb-3">Przewidywany czas powrotu:</h3>
      <div className="flex justify-center gap-4">
        <div className="bg-black/30 px-4 py-3 rounded-lg w-20">
          <div className="text-2xl font-bold text-white">{timeLeft.days}</div>
          <div className="text-xs text-zinc-400">DNI</div>
        </div>
        <div className="bg-black/30 px-4 py-3 rounded-lg w-20">
          <div className="text-2xl font-bold text-white">{timeLeft.hours}</div>
          <div className="text-xs text-zinc-400">GODZIN</div>
        </div>
        <div className="bg-black/30 px-4 py-3 rounded-lg w-20">
          <div className="text-2xl font-bold text-white">{timeLeft.minutes}</div>
          <div className="text-xs text-zinc-400">MINUT</div>
        </div>
        <div className="bg-black/30 px-4 py-3 rounded-lg w-20">
          <div className="text-2xl font-bold text-white">{timeLeft.seconds}</div>
          <div className="text-xs text-zinc-400">SEKUND</div>
        </div>
      </div>
    </div>
  )
}

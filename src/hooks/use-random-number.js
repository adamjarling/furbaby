import React from "react"

export default function useRandomNumber(max) {
  return Math.floor(Math.random() * max)
}

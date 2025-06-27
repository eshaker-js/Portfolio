"use client"
import React from "react"
import {motion} from "motion/react"
import { cn } from "@/lib/utils"

export const HeaderButton = ({
  className,
  children,
  ref,
  label,
}: {
  className?: string
  children?: React.ReactNode
  ref: string 
  label: string
}) => {
  return(
    <motion.a
      whileHover={{
        y: 4,
        color: '#193cb8'
      }}
      href={ref}>
        {label}
      </motion.a>
  )
}

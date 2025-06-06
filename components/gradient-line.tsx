"use client"

import { useState, useEffect } from "react"

export default function GradientLine(props){
    return(
         <div
              className="h-1 rounded-full mb-8"
              style={{ background: `linear-gradient(45deg, ${props.c1}, ${props.c2})` }}
            ></div>
    )
}
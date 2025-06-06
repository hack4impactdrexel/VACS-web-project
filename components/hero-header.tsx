"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function HeroHeader(props){
    return(
    <section className="relative">
            <div className="absolute inset-0 z-0">
              <Image
                src={props.src}
                alt={props.alt}
                width={1600}
                height={400}
                className="w-full h-full object-cover brightness-50"
              />
            </div>
            <div className="relative z-10 container mx-auto px-4 py-24 text-white text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{props.headText}</h1>
              <p className="text-xl max-w-3xl mx-auto text-white">
                {props.subtext}
              </p>
            </div>
    </section>)
}
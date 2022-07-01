import React from 'react'

export function Header() {
  return (
    <header className="flex h-60 w-full flex-col items-center justify-center bg-cyan-500 py-4 leading-relaxed">
      <h1 className="text-4xl font-bold uppercase text-white">
        Github Explorer
      </h1>
      <hr className="my-3 w-3/5 border-cyan-700" />
      <span className="block text-cyan-700">
        Explore os repositórios de um usuário no github.
      </span>
    </header>
  )
}

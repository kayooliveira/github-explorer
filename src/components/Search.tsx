import React, { ChangeEvent, useState } from 'react'

interface SearchProps {
  onSubmit: (search: string) => void
}

export function Search({ onSubmit }: SearchProps) {
  const [search, setSearch] = useState('')

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    onSubmit(search)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex w-full max-w-[1200px] flex-col gap-4 text-center sm:mx-auto sm:w-5/6 sm:flex-row"
    >
      <input
        className="focus flex-1 rounded border-2 border-x-transparent border-t-transparent border-b-cyan-500 bg-transparent px-6 py-3 font-bold text-cyan-500 placeholder-cyan-500 outline-none focus:outline-2 focus:outline-cyan-500"
        type="search"
        onChange={handleChange}
        value={search}
        placeholder="Digite o nome do usuário"
      />
      <button
        className="rounded bg-cyan-500 py-2 px-4 font-bold text-white outline-none  transition-colors hover:bg-cyan-800 focus:outline focus:outline-cyan-500"
        type="submit"
      >
        Buscar
      </button>
    </form>
  )
}

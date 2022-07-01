import axios from 'axios'
import React, { useState } from 'react'

import { RepositoryType } from './@types'
import { Header } from './components/Header'
import { Repository } from './components/Repository'
import { Search } from './components/Search'

export function App() {
  const [repositories, setRepositories] = useState<RepositoryType[]>([])

  async function searchRepositories(search: string) {
    const { data } = await axios.get<RepositoryType[]>(
      `https://api.github.com/users/${search}/repos`
    )
    setRepositories(data)
  }
  return (
    <>
      <Header />
      <Search onSubmit={searchRepositories} />
      <hr className="my-8 border-gray-700" />
      <main className="mx-auto w-5/6">
        {repositories.map(repository => (
          <Repository key={repository.id} {...repository} />
        ))}
      </main>
    </>
  )
}

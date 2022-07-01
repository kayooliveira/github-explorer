import { Eye, GitFork, Star } from 'phosphor-react'
import React from 'react'

import { RepositoryType } from '../@types'

export function Repository(repo: RepositoryType) {
  return (
    <a
      className="my-4 flex min-h-[6rem] flex-col items-center justify-between gap-6 rounded bg-gray-800 py-2 px-4 outline-none transition-colors hover:bg-cyan-900  focus:bg-cyan-900 focus:outline-cyan-500 md:flex-row"
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex w-full items-center justify-evenly gap-4 md:w-auto md:justify-center">
        <div className="box-border flex-shrink-0 rounded-full border border-cyan-500 p-1">
          <img
            src={repo.owner.avatar_url}
            alt="Avatar do dono do repositório"
            className="h-16 w-16 rounded-full"
          />
        </div>
        <div className="flex flex-col leading-relaxed">
          <span className="block text-xl font-bold text-cyan-500">
            {repo.full_name}
          </span>
          <span className="block text-gray-500">{repo.description}</span>
        </div>
      </div>
      <hr className="w-full border-gray-600 md:hidden" />
      <div className="flex w-full flex-row items-center justify-between gap-2 text-cyan-500 md:w-auto md:flex-col md:justify-center">
        <span className="flex items-center gap-2">
          <Star weight="fill" size="16" /> {repo.stargazers_count}
        </span>

        <span className="flex items-center gap-2">
          <GitFork weight="fill" size="16" /> {repo.forks_count}
        </span>

        <span className="flex items-center gap-2">
          <Eye weight="fill" size="16" /> {repo.watchers_count}
        </span>
      </div>
    </a>
  )
}

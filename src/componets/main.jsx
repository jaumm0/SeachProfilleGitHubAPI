import { useState } from 'react';
import { Github, Search, User, BookOpen, UserPlus } from 'lucide-react';
import { githubprofile, githubrepos } from './api';

function Main() {
  const [username, setUsername] = useState('');
  const [data, setData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [verrepos, setVerrepos] = useState(15);


  async function Buscarperfil() {
    try {
      setError(null);

      const profile = await githubprofile(username);
      const repos = await githubrepos(username);
      

      setData(profile);
      setRepos(repos);
    } catch (err) {
      setError('User not found');
      setData(null);
      setRepos([]);
    }
  }

  return (
    <main className="min-h-screen grid place-items-center  min-h-screen">
      <section className="grid grid-rows-2 gap-12 text-TextMain ">
        {/* Título */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-GradientStart">
            Explore Developer Profiles
          </h1>
          <p className="mb-3 text-xl py-2 font-medium">
            Discover GitHub users, analyze their repositories, and track their <br />
            coding journey.
          </p>
        </section>

        {/* Input e botão */}
        <section className="flex justify-center items-center gap-4 ">
          <div className="relative">
            <Github className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter GitHub username"
              className="border border-gray-300 rounded-xl pl-14 pr-4  py-2 w-120 h-13"
            />
          </div>

          <button
            onClick={Buscarperfil}
            className="h-13 w-32 rounded-xl bg-ButtonMain text-black font-semibold hover:bg-Hoverbutton hover:shadow-ButtonMain transition-all duration-200 cursor-pointer hover:scale-105"
          >
            Search
          </button>
        </section>

        <section className="">
          {data && (
            <div className="flex justify-center h-50 gap-4 rounded-xl bg-Repocolor transition-all duration-500 text-white hover:bg-gradient-to-r from-blue-300 to-black p-5">
              <div className="grid grid-cols-1">
                <img
                  className="w-40 h-40 rounded-xl place-self-start"
                  src={data.avatar_url}
                  alt=""
                />
                <p className="flex justify-center items-center w-25 h-6 rounded-xl position relative left-17 bottom-3 text-black  bg-ButtonMain">
                  @{data.login}
                </p>
              </div>

              <div className="grid font-bold w-150 place-items-end">
                <h2 className="text-3xl font-bold w-150 place-self-start">
                  {data.name}
                </h2>

                <div className="grid w-150 h-30 text-center">
                  <p className="w-145">
                    {data.bio}
                    </p>

                  <p className="flex items-center gap-1 w-35 pr-3">
                    <User />
                    <span>{data.followers}</span>
                    Followers
                  </p>

                  <p className="flex items-center gap-2 w-40 pr-1">
                    <UserPlus />
                    <span>{data.following}</span>
                    Following
                  </p>

                  <p className="flex items-center gap-2 w-40 pr-1">
                    <BookOpen />
                    <span>{data.public_repos}</span>
                    Repositories
                  </p>
                </div>
              </div>
            </div>
          )}

          <section>
            <section className="p-5 mt-10  transition-all duration-200  text-white font-bold text-black">
              <ul>
                <li>
                  
                  {repos.slice(0, verrepos).map((repo) => (
                    <div key={repo.id}>
                      
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block  bg-Repocolor hover:bg-gradient-to-r from-blue-300 to-gray-400  hover:scale-105 rounded-xl w-200 p-4 mb-4 transition-all h-30 duration-200"
                      >
                        <span className=''>{repo.name}</span>

                        <p className="">
                          Sobre:
                          <span className='pl-2'>{repo.description}</span>
                        </p>
                      </a>
                    </div>
                  ))}
                </li>

                <div>
                  {repos.length > verrepos && (
                    <button
                      className="h-13 w-50 rounded-xl bg-ButtonMain text-black font-semibold hover:shadow-ButtonMain hover:bg-Hoverbutton transition-all duration-200 cursor-pointer hover:scale-105"
                      onClick={() => setVerrepos(repos.length)}
                    >
                      Show all repositories
                    </button>
                  )}
                </div>
              </ul>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}''

export default Main;

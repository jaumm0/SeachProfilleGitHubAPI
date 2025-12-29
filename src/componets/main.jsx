import {useState} from 'react';
import { Github, Search, User, BookOpen, UserPlus } from 'lucide-react';
import { githubprofile, githubrepos } from './api';


function Main() {

  const [username, setUsername] = useState('');
  const [data, setData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [verrepos, setVerrepos] = useState(15);


  async function Buscarperfil( ){
    try{
      setError(null);

      const profile = await githubprofile(username);
      const repos = await githubrepos(username);

      
      setData(profile); 
      setRepos(repos);
    }catch (err){
      setError('User not found');
      setData(null);
      setRepos([]);
    }
  }




  return (
    <main className="min-h-screen grid place-items-center  min-h-screen">
      <section className="grid grid-rows-2 gap-12 text-TextMain">

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
        <section className="flex justify-center items-center gap-4">
          <div className="relative">
            <Github className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter GitHub username"
              className="border border-gray-300 rounded-xl pl-10 pr-4 py-2 w-120 h-13"
            />
          </div>
          <button
            onClick={Buscarperfil}
            className="h-13 w-32 rounded-xl bg-ButtonMain text-white font-semibold hover:bg-Hoverbutton hover:shadow-ButtonMain transition-all duration-200 cursor-pointer hover:scale-105"
          >
            Search
          </button>
        </section>
        <section className=''>
            {data &&( 
              <div className=' flex justify-center  h-50   gap-4 rounded-xl hover:bg-white transition-all duration-200 text-white  hover:text-black  text-black p-5 '> 
                <div className='grid grid-cols-1'>
                  <img 
                      className='w-40 h-40 rounded-xl  place-self-start '
                      src={data.avatar_url}  
                      alt="" 
                    />
                    <p
                      className='flex justify-center items-center w-25 h-6 rounded-xl text-white bg-ButtonMain '
                      >
                        @{data.login}
                    </p>
                  </div>
                  <div className='grid font-bold  w-150 place-items-end '>
                      <h2
                        className='text-3xl  font-bold  w-150  place-self-start  ' 
                      >{data.name}</h2>
                      
                      <div className='grid  w-150 h-30 text-center    '> 
                          <p
                          className='w-150 '
                          >{data.bio}
                        </p>
                        <p 
                            className='gap-1 flex items-center gap-2 w-40  pl-1 '>   
                            <User className=" " />
                            <span className=''>
                              {data.followers}
                            </span>
                              Followers 
                        </p>
                        <p 
                            className='flex items-center gap-2 w-40 pl-1 '>
                            <UserPlus className="  " /> 
                            <span>
                              {data.following}
                            </span>
                                Following  
                        </p>
                        <p className="flex items-center gap-2 w-40 pl-1">
                            <BookOpen className="" />
                            <span>
                              {data.public_repos}
                            </span>
                              Repositories
                        </p>  
                     
                        
                      </div>
                  </div>
              </div>
            )}
            <section>
                <section className=' p-5 mt-10 transition-all duration-200 text-white font-bold text-black '>
                    <ul>
                      <li

                      >
                        {repos.slice(0,verrepos).map((repo) => (
                        <div>
                          <a 
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block border border-gray-300 rounded-xl p-4 mb-4 transition-all h-30 duration-200"
                          >
                            {repo.name}
                          </a>
                        </div> 
                        ))}
                        </li>
                                <div>
                            {repos.length > verrepos && (
                              <button
                                className='h-13 w-50 rounded-xl bg-ButtonMain text-white font-semibold hover:shadow-ButtonMain hover:bg-Hoverbutton transition-all duration-200 cursor-pointer hover:scale-105'
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
}

export default Main;

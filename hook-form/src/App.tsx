import { useState } from 'react';
import './styles/global.css';

import { useForm } from 'react-hook-form';

export function App() {
  const { output, setOutput } = useState('')

  const { register, handleSubmit } = useForm()

  function createUser(data: any) {
    setOutput(JSON.stringify(data, null, 2))
  }

  // pesquisar high-order function (.map, .reduce) -> função em outra função

  return (
    <main className="h-screen bg-zinc-50 flex flex-col gap-10 items-center justify-center">
      <form onSubmit={ handleSubmit(createUser) } className="flex flex-col gap-4 w-full max-w-xs">

        <div className="flex flex-col gap-1">
          <label htmlFor="">E-mail</label>
          <input
            type="email" 
            className="border border-zinc-200 shadow-sm rounded h-10 px-3" 
            {...register('email')}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="">Senha</label>
          <input
            type="password"
            className="border border-zinc-200 shadow-sm rounded h-10 px-3" 
            {...register('password')}
          />
        </div>
       
        <button
          type="submit"
          className="bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600"
        >
          Salvar
        </button>
   
      </form>
      <pre> {output} </pre>
    </main>
  )
}

export default App;

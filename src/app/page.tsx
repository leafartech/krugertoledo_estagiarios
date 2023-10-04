'use client'

import { useEffect } from "react";

export default function Home() {
  let cont = 0
  useEffect(() => {
    if (cont === 0) {
      const script = document.createElement('script');
      script.src = 'https://lauromts.activehosted.com/f/embed.php?id=13';
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.async = true;

      document.body.appendChild(script);
      cont++;
    }
  }, []);
  return (
    <div className="min-h-screen bg-my flex justify-center">
      <main className="max-w-5xl pt-12 flex flex-col items-center px-4 sm:px-0 text-center">
        <img src="./images/logo.png" alt="" className="my-6 w-28" />
        <h1 className="font-extrabold text-white text-2xl sm:text-3xl">Aplique para a vaga preenchendo os campos abaixo.</h1>
        <p className="text-zinc-400 sm:mt-2">Faremos uma análise e entraremos em contato com os selecionados.</p>
        <div className={ `${"_form_13"}`}></div>
      </main>
    </div>
  )
}

import NewItem from './new-item';

export default function week5Page() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-6 ">
      <div className="w-full max-w-md"> 
       <h1 className="text-2xl font-bold mb-4 text-white">
        Week 5 — New Item
        </h1>
      <NewItem />
      </div>
    </main>
  );  

}

      
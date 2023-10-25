import Image from 'next/image'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <header className='w-full bg-zinc-700 py-5'>
      <h1 className="text-center my-3 mt-0 page-title">Hello World</h1>
      
      <div className="flex justify-center w-100" id="navigation">
      <Navbar />
      </div>
      </header>
      <section className="grid grid-cols-2 w-4/5 mx-auto">
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, nobis repudiandae! Ut expedita rem atque quibusdam velit voluptas repellendus, obcaecati, officia eaque cum, nostrum doloribus. Dolores aliquam ipsa repellat hic!</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, nobis repudiandae! Ut expedita rem atque quibusdam velit voluptas repellendus, obcaecati, officia eaque cum, nostrum doloribus. Dolores aliquam ipsa repellat hic!</p>
      </section>
    </div>
  )
}

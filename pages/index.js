import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <Head>
        <title>Spotify</title>
        {/* {<link rel="icon" href="/favicon.ico" />} */}
      </Head>

      <main>
        <Sidebar />
      </main>
    </div>
  )
}

// heroicons (icons) comes with tailwind.
// Spotify clone vid https://www.youtube.com/watch?v=3xrko3GpYoU&t=58s

// Where did i get the clients IDS ???? research
// clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
// clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,

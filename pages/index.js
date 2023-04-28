import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <div
      className="w-full h-screen bg-center bg-no-repeat bg-cover" style={{backgroundImage: 'url("https://kawsar.design/wp-content/uploads/2023/02/BG-Tx-1.svg")'}}
    >
        <Header />
    </div>
  )
}
export default Home;
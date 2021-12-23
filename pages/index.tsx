import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import GeneratedList, { GeneratedItem } from '../components/GeneratedList'

const TitleSeed = [
  "Dampak Siaran Budaya Lokal di TVRI Terhadap Perilaku Khalayak",
  "Efektivitas Bahasa Melayu Dalam Penyampaian Berita Program Televisi Lokal X",
  "Efektivitas Komunikasi Interpersonal Dalam Mendidik Siswa Difabel SLB X",
  "Efektivitas Penggunaan Internet sebagai Media Pembelajaran dalam Menunjang Kegiatan Belajar dan Mengajar di Sekolah X",
  "Fenomena Hoax Dalam Pemberitaan Media Online",
  "Komunikasi Politik Islam Dalam Kampanye Pemilihan Kepala Daerah di Kota X",
  "Konstruksi Pemberitaan Media Online Tentang Penanggulangan Bencana Banjir oleh Pemerintah Daerah X",
  "Opini Masyarakat Terhadap Corporate Sosial Responsibility (CSR) Perusahaan X",
  "Pemanfaatan Media Sosial Dalam Menciptakan Personal Branding Pejabat Publik",
  "Pemanfaatan Media Sosial untuk Promosi Wisata di Kota X",
  "Pengaruh Adegan Kekerasan dalam Sinetron X Terdapat Perilaku Remaja",
  "Pengaruh Iklan Layanan di Televisi terhadap Perilaku Masyarakat",
  "Pengaruh Instagram Sebagai Media Interaksi Terhadap Gaya Hidup Remaja",
  "Pengaruh Komunikasi Massa Dalam Kampanye Pilpres",
  "Pengaruh Pemberitaan Korupsi Terhadap Citra Kepala Daerah",
  "Penggunaan Komunikasi Persuasi Melalui Dakwah Humor",
  "Peran Instagram Sebagai Media Pemasaran Online Terhadap Minat Beli Remaja Kota X",
  "Peran Media Internal Dalam Memperbaiki Citra Perusahaan X",
  "Peran Media Sosial Terhadap Efektivitas Komunikasi Interpersonal",
  "Peran Nilai-nilai Nasionalisme Pada Iklan Dalam Membangun Semangat Remaja",
  "Peran Public Relations Dalam Menciptakan Citra Perusahaan X",
  "Peran UlamaTri Dalam Meningkatkan Partisipasi Pemilih Dalam Pilpres",
  "Persepsi Muslimah Terhadap Label Halal Pada Produk yang Di-iklankan di Televisi",
  "Pola Pemanfaatan Media Sosial Instagram Dalam Mempublikasikan Konten Publik Relations",
  "Strategi Komunikasi Pemasaran Melalui Jejaring Sosial",
  "Strategi Komunikasi Persuasif Kepala Daerah Dalam Melestarikan Kearifan Lokal",
  "Strategi Komunikasi Politik Melalui Media Sosial Instagram dalam Menarik Pemilih Remaja",
  "Strategi Komunikasi Politik Melalui Media Sosial untuk Tingkatkan Partisipasi Pemilih Pada Pemilihan Kepala Daerah di Provinsi X",
  "Strategi Kreatif Media Pemberitaan Online Dalam Menarik Pembaca dari Kalangan Remaja",
  "Strategi Penanganan Krisis Bencana Alam Menggunakan Media Relations",
]

const Home: NextPage = () => {
  const [items, setItems] = useState<GeneratedItem[]>([])
  const onClick = useCallback(() => {
    let i = 0;
    // pick 5 random item from titleSeed
    const randomItems = TitleSeed.sort(() => Math.random() - 0.5).slice(0, 5)
    setItems(randomItems.map(title => ({ id: i++, title, preview: '' })))

  }, [setItems]);



  return (
    <div  >
      <Head>
        <title>Genjutsu</title>
        <meta name="description" content="Generator Judul Skripsi Unik" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Genjutsu</h2>
            <p className="mt-2 text-center text-sm text-gray-600">

              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Generator Judul Skripsi Unik
              </a>
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Keyword
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Masukkan keyword"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>


              <div className='mt-4'>
                <button onClick={onClick}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Generate
                </button>
              </div>
              {/* <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or Upload</span>
                  </div>
                </div>


              </div> */}



            </div>
            {/* Card with List of generated Words */}

            <div className="bg-white mt-2 py-4 px-4 shadow sm:rounded-lg sm:px-10">
              <GeneratedList items={items} />

            </div>
          </div>

        </div>
      </div>

    </div >
  )
}

export default Home

import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      {/* <!-- HERO --> */}
      <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl shadow-2xl overflow-hidden transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
          <img
            src="img/personalities.png"
            id="heroImage"
            className="w-full h-full animate-[smoothZoom_16s_ease-in-out_infinite]"
            alt=""
          />
        </div>
        <div className="items-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
            {"Motivation-Based "}
            <span className="text-indigo-600">Personality</span>
          </h1>
          <em className="text-sm">
            Kepribadian berdasarkan Jenis Motivasi yang Dominan
          </em>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-xl my-4">
            {"Setiap orang punya "}
            <span className="text-pink-500">bahan bakar yang berbeda</span>{" "}
            untuk bergerak, bertahan, belajar dan bekerja secara produktif.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-xl my-4">
            <strong>The Four Fuel Types</strong> oleh
            <a
              href="https://instagram.com/ganiramaa"
              target="_blank"
              className="font-bold"
            >
              {" Rama Gani "}
            </a>
            <br />
            <i className="text-xs md:text-sm">
              Self-Determination Theory - Richard M. Ryan & Edward L. Deci
            </i>
          </p>
          <div className="flex mt-10">
            <button
              onClick={() => navigate("/")}
              className="cursor-pointer bg-gray-600 text-white px-6 py-3 rounded-xl transition-transform duration-700 ease-in-out scale-100 hover:scale-110 mr-3"
            >
              Kembali
            </button>
            <button
              onClick={() => navigate("/test")}
              className="cursor-pointer bg-indigo-600 text-white px-6 py-3 rounded-xl transition-transform duration-700 ease-in-out scale-100 hover:scale-110"
            >
              Mulai Tes
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="items-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-2">
            4 Jenis <span className="text-indigo-600">Bahan Bakar Manusia</span>{" "}
            untuk Bergerak dan Bekerja
          </h1>
          <i>
            Original Post by. Rafi Achmad -
            <span className="text-pink-500"> retizen.republika.co.id</span>
          </i>
          <p className="mt-6">
            Pernah gak sih kalian menemukan orang yang semakin dinasihati justru
            semakin malas, tetapi ketika dibiarkan malah jadi lebih produktif?
            Fenomena ini ternyata bukan soal keras kepala atau kurang ambisi,
            tapi bisa jadi karena sumber energi tiap orang itu beda-beda.
          </p>
          <p className="mt-6">
            Bersumber dari konten edukatif seorang pegiat buku di media sosial
            dengan akun @ganiramaa, yang merangkum hasil deep research dari
            berbagai jurnal serta buku Self-Determination Theory karya Richard
            M. Ryan dan Edward L. Deci
          </p>
        </div>
        <div className="rounded-3xl shadow-2xl overflow-hidden transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
          <img
            src="img/fuels.jpg"
            id="heroImage"
            className="w-full h-full animate-[smoothZoom_16s_ease-in-out_infinite]"
            alt=""
          />
        </div>
      </section>

      {/* <!-- CONTENT --> */}
      <section className="max-w-6xl mx-auto px-8 py-10 grid md:grid-rrows-2 gap-8 items-center">
        <div>
          <p className="mb-6">
            Dijelaskan bahwa manusia tidak digerakkan oleh satu jenis motivasi
            yang sama. Setiap orang punya “bahan bakar” berbeda untuk bisa
            bergerak, bertahan, dan bekerja secara produktif. Konsep ini
            kemudian dirangkum oleh Rama Gani dalam istilah “The Four Fuel
            Types.” Lantas, apa saja yang dimaksud dengan The Four Fuel Types
            ini?
          </p>
          <strong className="mb-6 block">
            Pertama, <span className="text-indigo-600">Validation</span> Fuel
          </strong>
          <p className="mb-6">
            Validation Fuel adalah energi yang muncul dari pengakuan eksternal.
            Orang dengan tipe ini akan merasa hidup ketika mendapat apresiasi,
            pujian, atau pengakuan. Sebaliknya, ketika diabaikan, energinya bisa
            langsung turun drastis. Rama Gani menegaskan bahwa hal ini bukan
            bentuk manja, melainkan memang sumber energi orang tersebut berasal
            dari luar dirinya.
          </p>
          <strong className="mb-6 block">
            Kedua, <span className="text-indigo-600">Fear</span> Fuel
          </strong>
          <p className="mb-6">
            Fear Fuel adalah tipe orang yang bergerak karena rasa takut seperti
            takut miskin, takut tertinggal, takut gagal, dan berbagai ketakutan
            lainnya. Selama hidup terasa mengancam, mereka bisa berjalan gaspol.
            Namun ketika hidup sudah terasa aman, dorongannya cenderung menurun,
            yang penting sudah berada di zona aman. Menariknya, tipe energi ini
            sering dianggap sebagai cara paling ampuh untuk memotivasi
            seseorang. Dalam kehidupan sehari-hari, Fear Fuel kerap muncul dalam
            bentuk nasihat orang tua, keluarga, bahkan teman, yang tanpa sadar
            menekan lewat rasa takut.
          </p>
          <strong className="mb-6 block">
            Ketiga, <span className="text-indigo-600">Vision</span> Fuel
          </strong>
          <p className="mb-6">
            Vision Fuel adalah energi yang lahir dari mimpi dan gambaran masa
            depan. Selama visi, wishlist, dan tujuan hidup masih jelas dan hidup
            di dalam dirinya, orang dengan tipe ini akan terus bergerak. Namun
            tanpa visi, hidup bisa terasa kosong. Ketika seseorang terlihat
            bingung, stagnan, atau hanya menghabiskan waktu di kamar tanpa arah,
            bisa jadi bukan karena malas, melainkan karena vision fuel-nya belum
            terbentuk. Ia perlu menciptakan mimpinya terlebih dahulu agar bisa
            melangkah maju.
          </p>
          <strong className="mb-6 block">
            Keempat, <span className="text-indigo-600">Meaning</span> Fuel
          </strong>
          <p className="mb-6">
            Terakhir adalah Meaning Fuel. Orang dengan tipe ini akan terus
            berjalan selama apa yang ia lakukan terasa bermakna bagi dirinya.
            Geraknya mungkin tidak cepat, tetapi cenderung stabil dan konsisten
            karena didorong oleh rasa “ini penting” dan “ini berarti.”
          </p>
          <p className="mb-6">
            Dari keempat jenis bahan bakar manusia ini, sering kali kesalahan
            justru terjadi saat kita memberi energi yang tidak sesuai. Orang
            yang membutuhkan makna malah didorong untuk mencari validasi. Orang
            yang hidup dari visi justru ditakut-takuti dan terus dinasihati.
            Akibatnya, banyak orang kemudian dicap malas, tidak punya tujuan,
            kurang ambisi, atau tidak punya drive. Padahal, mungkin bukan
            orangnya yang salah, melainkan bahan bakar yang kita berikan tidak
            sesuai.
          </p>
          <p className="mb-6">
            Karena itu, penting untuk berkomunikasi dengan orang-orang terdekat
            agar kita bisa memahami energi apa yang paling cocok untuk mendorong
            mereka terus bergerak dan produktif alih-alih menebak-nebak dan
            memaksakan motivasi versi kita sendiri.
          </p>
          <i className="mb-20 text-italic text-pink-500">
            #psikologipendidikan #psikologi #mental #motivasi #energi
          </i>
        </div>
      </section>
    </>
  );
}

import Chart from "../components/Chart";

export default function ResultCard({ id, label, insight, scores }) {
  const profiles = id.split("+");

  return (
    <>
      {/* <!-- RESULT HEADER --> */}
      <section className="max-w-6xl mx-auto px-4 py-6 transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
        <div className="items-center justify-center flex md:hidden">
          <img
            src="img/adult-phlegmatic.png"
            className="h-40 w-full object-cover object-top heroImage"
            alt=""
          />
        </div>
        <div className="h-72 overflow-hidden rounded-3xl p-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-2xl max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div className="text-center md:text-left md:ml-6 px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{label}</h1>
            <h3 className="text-white text-xl font-semibold" id="title">
              <div className="flex justify-center md:justify-start gap-2">
                {profiles.map((b) => (
                  <span
                    key={b}
                    className="px-3 py-1 rounded-xl text-xs font-semibold bg-pink-400 text-indigo-600 font-bold"
                  >
                    {b.toUpperCase()}
                  </span>
                ))}
              </div>
            </h3>
            <p className="text-gray-200 mt-6 text-sm md:text-md" id="intro">
              {insight}
            </p>
          </div>
          <div className="items-center justify-center hidden md:flex">
            <img
              src="img/adult-phlegmatic.png"
              className="h-60 w-full object-cover object-top heroImage"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* <!-- DETAILS --> */}
      <section className="max-w-6xl mx-auto px-8 my-8">
        <p className="text-sm md:text-md mb-8">
          Individu tipe Vision umumnya memiliki{" "}
          <strong className="text-indigo-600">karakter koleris:</strong> tegas,
          cepat mengambil keputusan, tidak betah berlama-lama di zona nyaman,
          dan cenderung memimpin secara natural. Mereka ambisius, bukan dalam
          arti haus pujian, tapi haus kemajuan.{" "}
          <span className="text-indigo-600">
            Fokus utamanya adalah hasil, arah, dan capaian.
          </span>{" "}
          Mereka suka tantangan, tidak takut mengambil risiko terukur, dan
          sering merasa gelisah jika hidupnya stagnan. Dalam kelompok, mereka
          spontan mengambil peran pengarah, penggerak, atau pengambil keputusan.
        </p>
        <p className="text-sm md:text-md mb-8">
          Tipe Vision hidup di masa depan. Pikiran mereka sering bekerja dengan
          pertanyaan:{" "}
          <span className="text-indigo-600">
            “Ke mana ini akan membawa aku?” dan “Apa langkah selanjutnya?”
          </span>
          . Mereka kuat dalam big picture thinking, mampu menghubungkan
          aktivitas hari ini dengan tujuan jangka panjang. Mereka merasa hidup
          ketika punya goal jelas, milestone, dan peta jalan.{" "}
          <span className="text-indigo-600">
            Tanpa visi, mereka mudah bosan, sinis, atau kehilangan arah
          </span>
          . Mereka bukan tipe yang menikmati rutinitas kosong; setiap aktivitas
          harus terasa mengarah ke sesuatu.
        </p>
        <p className="text-sm md:text-md mb-8">
          Tipe Vision bukan tidak peduli orang, tapi prioritas utamanya adalah
          arah dan dampak. Jika tidak diarahkan dengan baik, mereka bisa tumbuh
          menjadi pribadi yang kering makna, sukses secara target tapi kosong
          secara nilai.{" "}
          <span className="text-indigo-600">
            Namun jika vision-nya disatukan dengan meaning, mereka berpotensi
            menjadi pemimpin perubahan yang besar.
          </span>
        </p>
      </section>
      <br />

      {/* <!-- MAIN CONTENT --> */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4">
        {/* <!-- RADAR CHART --> */}
        <Chart scores={scores} />

        {/* <!-- DESCRIPTION --> */}
        <div className="grid md:grid-rows-3 gap-8">
          <div className="bg-white/80 dark:bg-gray-800/70 rounded-3xl p-8 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
            <h3 className="text-md font-bold mb-3">Motivasi yang Membangun</h3>
            <ul className="text-sm md:text-md">
              <li>Ada target yang ingin dicapai</li>
              <li>Gambaran diri ideal di masa depan</li>
              <li>Ada mimpi yang ingin diwujudkan</li>
            </ul>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/70 rounded-3xl p-8 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
            <h3 className="text-md font-bold mb-3">
              Motivasi yang Kurang Bekerja
            </h3>
            <ul className="text-sm md:text-md">
              <li>Validation berlebihan terasa dangkal</li>
              <li>Fear / ancaman memicu perlawanan</li>
              <li>Aturan tanpa tujuan = buang waktu</li>
            </ul>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/70 rounded-3xl p-8 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
            <h3 className="text-md font-bold mb-3">Saran Pengembangan</h3>
            <ul className="text-sm md:text-md">
              <li>Bantu formulasikan visi yang sehat</li>
              <li>Beri ruang mengambil keputusan</li>
              <li>Jangan matikan mereka dengan kontrol</li>
            </ul>
          </div>
        </div>
      </section>

      {/* <!-- SWOT --> */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 xl:grid-cols-4  gap-8">
          <div className="bg-indigo-600 text-white rounded-3xl p-8 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
            <h3 className="text-md font-bold mb-3">Strength (Kekuatan)</h3>
            <ul className="text-sm list-disc pl-3">
              <li>Goal-oriented kuat</li>
              <li>Tahan tekanan jangka panjang</li>
              <li>Natural leader</li>
              <li>Cepat bergerak & progresif</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-8 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
            <h3 className="text-md font-bold mb-3">Weakness (Kelemahan)</h3>
            <ul className="text-sm list-disc pl-3">
              <li>Kurang peka pada proses</li>
              <li>Bisa keras kepala</li>
              <li>Mudah frustrasi jika lambat</li>
              <li>Cenderung over-achievement</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl p-8 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
            <h3 className="text-md font-bold mb-3">Opportunity (Peluang)</h3>
            <ul className="text-sm list-disc pl-3">
              <li>Potensi pemimpin, founder, penggerak</li>
              <li>Cocok di bidang strategi & manajemen</li>
              <li>Bisa jadi role model generasi</li>
              <li>Impact besar jika diberi meaning</li>
            </ul>
          </div>
          <div className="bg-pink-600 text-white rounded-3xl p-8 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
            <h3 className="text-md font-bold mb-3">Threat (Ancaman)</h3>
            <ul className="text-sm list-disc pl-3">
              <li>Burnout karena hidup hanya target</li>
              <li>Kehilangan empati</li>
              <li>Krisis makna di usia dewasa</li>
              <li>Konflik relasi, terlalu fokus hasil</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

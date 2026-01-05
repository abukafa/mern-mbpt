import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UIContext } from "../context/UIContext";
import { content } from "../data/introduction";

export default function Welcome() {
  const { audience } = useContext(UIContext);
  const data = content[audience];
  const navigate = useNavigate();

  return (
    <>
      {/* <!-- HERO --> */}
      <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            dangerouslySetInnerHTML={{ __html: data.heroTitle }}
          />
          <p
            className="text-gray-600 dark:text-gray-400 mb-8"
            id="heroDesc"
            dangerouslySetInnerHTML={{ __html: data.heroDesc }}
          />
          <button
            onClick={() => navigate("/test")}
            className={`cursor-pointer text-white px-6 py-3 rounded-xl transition-transform duration-700 ease-in-out scale-100 hover:scale-110 ${
              audience == "adult" ? "bg-indigo-600" : "bg-pink-500"
            }`}
            id="heroBtn"
          >
            {data.heroBtn}
          </button>
        </div>
        <div className="h-72 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl overflow-hidden transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
          <img
            src={audience == "adult" ? "img/adults.png" : "img/kids.png"}
            id="heroImage"
            className="w-full h-full object-cover animate-[smoothZoom_16s_ease-in-out_infinite]"
            alt=""
          />
        </div>
      </section>

      {/* <!-- VALUE SECTION --> */}
      <section className="max-w-6xl mx-auto px-4 pt-8">
        <h2 className="text-2xl font-bold text-center mb-10" id="valueTitle">
          Empat Arah Motivasi Manusia
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="rounded-2xl p-6 bg-white/80 dark:bg-gray-800/70 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-110">
            <h3 className="font-semibold mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`size-5 inline-block mr-2 ${
                  audience == "adult" ? "text-indigo-600" : "text-pink-500"
                }`}
              >
                <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                <path
                  fillRule="evenodd"
                  d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                  clipRule="evenodd"
                />
              </svg>
              Vision
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400" id="v1">
              Punya tujuan dan cita-cita.
            </p>
          </div>
          <div className="rounded-2xl p-6 bg-white/80 dark:bg-gray-800/70 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-110">
            <h3 className="font-semibold mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`size-5 inline-block mr-2 ${
                  audience == "adult" ? "text-indigo-600" : "text-pink-500"
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                  clipRule="evenodd"
                />
              </svg>
              Meaning
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400" id="v2">
              Ingin hidupnya bermakna.
            </p>
          </div>
          <div className="rounded-2xl p-6 bg-white/80 dark:bg-gray-800/70 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-110">
            <h3 className="font-semibold mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`size-5 inline-block mr-2 ${
                  audience == "adult" ? "text-indigo-600" : "text-pink-500"
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                  clipRule="evenodd"
                />
              </svg>
              Fear
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400" id="v3">
              Butuh rasa aman.
            </p>
          </div>
          <div className="rounded-2xl p-6 bg-white/80 dark:bg-gray-800/70 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-110">
            <h3 className="font-semibold mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`size-5 inline-block mr-2 ${
                  audience == "adult" ? "text-indigo-600" : "text-pink-500"
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a2.5 2.5 0 0 0-4-3 2.5 2.5 0 0 0-4 3H3.25C2.56 6 2 6.56 2 7.25v.5C2 8.44 2.56 9 3.25 9h6V6h1.5v3h6C17.44 9 18 8.44 18 7.75v-.5C18 6.56 17.44 6 16.75 6H14Zm-1-1.5a1 1 0 0 1-1 1h-1v-1a1 1 0 1 1 2 0Zm-6 0a1 1 0 0 0 1 1h1v-1a1 1 0 0 0-2 0Z"
                  clipRule="evenodd"
                />
                <path d="M9.25 10.5H3v4.75A2.75 2.75 0 0 0 5.75 18h3.5v-7.5ZM10.75 18v-7.5H17v4.75A2.75 2.75 0 0 1 14.25 18h-3.5Z" />
              </svg>
              Validation
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400" id="v4">
              Suka belajar dan tantangan.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- CTA --> */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="rounded-3xl p-12 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4" id="ctaTitle">
            Bangun Generasi yang Sadar Diri
          </h2>
          <p className="max-w-2xl mx-auto opacity-90 mb-8" id="ctaDesc">
            Digunakan untuk pendidikan, mentoring, dan pembinaan karakter.
          </p>
          <button
            className="cursor-pointer bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold transition-transform duration-700 ease-in-out scale-100 hover:scale-110"
            id="ctaBtn"
            onClick={() => {
              navigate("/about");
            }}
          >
            Tentang MBPT
          </button>
        </div>
      </section>

      {/* <!-- VALUE ABOUT --> */}
      <section className="max-w-6xl mx-auto px-4 py-10" id="about">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 bg-white/80 dark:bg-gray-800/70 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-110">
            <h3 className="font-semibold mb-2">Aplikasi MBPT</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400" id="ab1">
              MBPT dikembangkan melalui sebuah aplikasi tes kepribadian yang
              dibuat oleh
              <a
                href="http://jazacademy.id"
                target="_blank"
                className={`font-semibold ${
                  audience == "adult" ? "text-indigo-600" : "text-pink-500"
                }`}
              >
                {" Jaz Academy "}
              </a>
              sebagai bahan ajar pengembangan aplikasi sekaligus alat observasi
              perilaku dan motivasi peserta didik. Aplikasi ini dipakai langsung
              dalam konteks pendidikan nyata, sehingga data dan refleksi berasal
              dari praktik, bukan sekadar teori.
            </p>
          </div>
          <div className="rounded-2xl p-6 bg-white/80 dark:bg-gray-800/70 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-110">
            <h3 className="font-semibold mb-2">Four Fuel Types</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400" id="ab2">
              MBPT adalah Four Fuel Type yang dirumuskan oleh
              <a
                href="http://instagram.com/ganiramaa"
                target="_blank"
                className={`font-semibold ${
                  audience == "adult" ? "text-indigo-600" : "text-pink-500"
                }`}
              >
                {" Rama Gani "}
              </a>
              , terinspirasi dan disintesis dari Self-Determination Theory karya
              Richard M. Ryan dan Edward L. Deci. Model ini menyederhanakan
              sumber motivasi manusia menjadi empat bahan bakar utama agar mudah
              dipahami, diajarkan, dan diterapkan.
            </p>
          </div>
          <div className="rounded-2xl p-6 bg-white/80 dark:bg-gray-800/70 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-110">
            <h3 className="font-semibold mb-2">Objektif</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400" id="ab3">
              MBPT bukan untuk menilai atau memberi label seseorang, melainkan
              alat pengembangan diri. Keempat tipe motivasi dapat bekerja pada
              siapa pun, hanya setiap orang memiliki kecenderungan dominan yang
              bisa diarahkan, dilatih, dan tidak bersifat permanen. Model ini
              membantu memahami potensi, bukan membatasi identitas.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

import Chart from "../components/Chart";
import { useState } from "react";
import { useContext } from "react";
import { UIContext } from "../context/UIContext";

export default function ResultCard({ profile, scores }) {
  const { audience } = useContext(UIContext);
  if (!profile || !profile[audience]) return null;
  const data = profile[audience];
  const profiles = profile.id.split("+");
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [error, setError] = useState({});

  async function handleSubmit() {
    if (!form.name.trim()) {
      setError({ name: "Nama harus diisi" });
      return;
    }
    if (!form.email.trim()) {
      setError({ email: "Email harus diisi" });
      return;
    }
    setError({});
    const res = await fetch("/api/result", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        phone: form.phone,
        email: form.email,
        mode: audience,
        result: scores,
      }),
    });

    if (!res.ok) return;
    const data = await res.json();
    if (!data?.id) return;

    window.location.href = `/result/${data.id}`;
  }

  return (
    <>
      {/* <!-- RESULT HEADER --> */}
      <section className="max-w-6xl mx-auto px-4 py-6 transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
        <div className="items-center justify-center flex md:hidden">
          <img
            src={`/img/${audience}-${profiles[0]}.png`}
            className="h-40 w-full object-cover object-top heroImage"
            alt=""
          />
        </div>
        <div className="h-72 overflow-hidden rounded-3xl p-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-2xl max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div className="text-center md:text-left md:ml-6 px-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {profile.label}
            </h3>
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
              {data.insight}
            </p>
          </div>
          <div className="items-center justify-center hidden md:flex">
            <img
              src={`/img/${audience}-${profiles[0]}.png`}
              className="h-60 w-full object-cover object-top heroImage"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* <!-- DETAILS --> */}
      <section className="max-w-6xl mx-auto px-8 my-8">
        <p className="text-md mb-8">
          {data.details[0]} {data.details[1]}
        </p>
        <p className="text-md mb-8">{data.details[2]}</p>
      </section>
      <br />

      {/* <!-- MAIN CONTENT --> */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4">
        {/* <!-- RADAR CHART --> */}
        <Chart scores={scores} />

        {/* <!-- DESCRIPTION --> */}
        <div className="grid md:grid-rows-3 gap-8">
          <div className="bg-white/80 dark:bg-gray-800/70 rounded-3xl p-8 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
            <h3 className="text-md text-indigo-600 font-bold mb-3">
              Motivasi yang Membangun
            </h3>
            <ul className="text-sm md:text-md list-disc pl-5">
              {data.goodFuels.map((good, i) => {
                return <li key={i}>{good}</li>;
              })}
            </ul>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/70 rounded-3xl p-8 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
            <h3 className="text-md text-indigo-600 font-bold mb-3">
              Motivasi yang Kurang Bekerja
            </h3>
            <ul className="text-sm md:text-md list-disc pl-5">
              {data.badFuels.map((bad, i) => {
                return <li key={i}>{bad}</li>;
              })}
            </ul>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/70 rounded-3xl p-8 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
            <h3 className="text-md text-indigo-600 font-bold mb-3">
              Saran Pengembangan
            </h3>
            <ul className="text-sm md:text-md list-disc pl-5">
              {data.suggestions.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* <!-- SWOT --> */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 xl:grid-cols-4  gap-8">
          <div className="bg-indigo-600 text-white rounded-3xl p-8 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
            <h3 className="text-md font-bold mb-3">Strength (Kekuatan)</h3>
            <ul className="text-sm list-disc pl-5">
              {data.strength.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </div>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-8 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
            <h3 className="text-md font-bold mb-3">Weakness (Kelemahan)</h3>
            <ul className="text-sm list-disc pl-5">
              {data.weakness.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl p-8 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
            <h3 className="text-md font-bold mb-3">Opportunity (Peluang)</h3>
            <ul className="text-sm list-disc pl-5">
              {data.opportunity.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </div>
          <div className="bg-pink-600 text-white rounded-3xl p-8 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
            <h3 className="text-md font-bold mb-3">Threat (Ancaman)</h3>
            <ul className="text-sm list-disc pl-5">
              {data.threat.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8 flex item-center justify-center">
        <button
          onClick={() => setOpen(true)}
          className="cursor-pointer bg-indigo-600 text-white px-6 py-4 rounded-xl transition-transform duration-700 ease-in-out scale-100 hover:scale-110 animate-colorPulse transition-colors"
        >
          Export Result
        </button>
      </section>

      {open && (
        <div className="fixed inset-0 bg-black/50 dark:bg-gray-800/50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <input
              required
              placeholder="Nama"
              className="border border-indigo-600 p-2 w-full mt-3 rounded-lg"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {error.name && !form.name && (
              <small className="text-red-500">{error.name}</small>
            )}
            <input
              required
              placeholder="No. Telepon"
              className="border border-indigo-600 p-2 w-full mt-3 rounded-lg"
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <input
              required
              placeholder="Email"
              className="border border-indigo-600 p-2 w-full mt-3 rounded-lg"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {error.email && !form.email && (
              <small className="text-red-500">{error.email}</small>
            )}

            <button
              onClick={handleSubmit}
              className="cursor-pointer bg-indigo-600 text-white px-4 py-2 mt-3 rounded-lg w-full"
            >
              Kirim & Generate PDF
            </button>
          </div>
        </div>
      )}
    </>
  );
}

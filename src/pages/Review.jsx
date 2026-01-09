import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { resultProfiles } from "../data/resultProfiles";
import { determineDominant } from "../utils/score";
import Chart from "../components/Chart";

export default function Review() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/api/result/${id}`)
      .then((res) => res.json())
      .then(setData);
  }, [id]);

  if (!data) return null;

  const scores = data.result;
  const audience = data.mode ? data.mode : "adult";
  const resultKey = determineDominant(scores);
  console.log(data);

  function isSameCombo(a, b) {
    const A = a.split("+");
    const B = b.split("+");
    return A.length === B.length && A.every((x) => B.includes(x));
  }

  const properCase = (str) =>
    str.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());

  const result = resultProfiles.find((r) => isSameCombo(r.id, resultKey));
  const desc = result[audience];
  const profiles = result.id.split("+");
  const date = new Date(data.createdAt);

  return (
    <>
      {/* PROFILE */}
      <section className="max-w-6xl mx-auto px-8 pt-4">
        <table className="table-fixed w-full">
          <tbody>
            <tr>
              <td className="w-20">
                <p className="text-md font-semibold">Nama</p>
              </td>
              <td>
                <p className="text-md font-semibold">
                  : {properCase(data.name)}
                </p>
              </td>
              <td className="text-right">
                <p className="text-md font-semibold">
                  {date.toLocaleString("id-ID", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-md font-semibold">Email</p>
              </td>
              <td>
                <p className="text-md font-semibold">: {data.email}</p>
              </td>
              <td className="text-right">
                <p className="text-md font-semibold">
                  {date.toLocaleString("id-ID", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* <!-- RESULT HERO --> */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="h-72 overflow-hidden rounded-3xl p-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-2xl max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div className="text-center md:text-left md:ml-6 px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {result.label}
            </h1>
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
            <p className="text-gray-200 mt-6 text-sm">{desc.insight}</p>
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
      <section className="max-w-6xl mx-auto px-8 mt-8">
        <p className="text-md mb-8">
          {desc.details[0]} {desc.details[1]}
        </p>
        <p className="text-md mb-8">{desc.details[2]}</p>
      </section>

      {/* ICONS */}
      <section className="max-w-6xl mx-auto grid grid-cols-4 place-items-center py-8 px-20">
        <div className="bg-pink-600 text-gray-50 rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path
              fillRule="evenodd"
              d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="bg-pink-600 text-gray-50 rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="bg-pink-600 text-gray-50 rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="bg-pink-600 text-gray-50 rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
          </svg>
        </div>
      </section>

      {/* <!-- SWOT --> */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          <div className="bg-indigo-600 text-white rounded-3xl p-8 shadow">
            <h3 className="text-md font-bold mb-3">Strength (Kekuatan)</h3>
            <ul className="text-sm list-disc pl-5">
              {desc.strength.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </div>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-8 shadow">
            <h3 className="text-md font-bold mb-3">Weakness (Kelemahan)</h3>
            <ul className="text-sm list-disc pl-5">
              {desc.weakness.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl p-8 shadow mt-8">
            <h3 className="text-md font-bold mb-3">Opportunity (Peluang)</h3>
            <ul className="text-sm list-disc pl-5">
              {desc.opportunity.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </div>
          <div className="bg-pink-600 text-white rounded-3xl p-8 shadow mt-8">
            <h3 className="text-md font-bold mb-3">Threat (Ancaman)</h3>
            <ul className="text-sm list-disc pl-5">
              {desc.threat.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* <!-- MAIN CONTENT --> */}
      <section className="max-w-6xl mx-auto px-4 mb-14">
        <div className="grid md:grid-cols-2 gap-10">
          {/* <!-- RADAR CHART --> */}
          <Chart scores={scores} />

          {/* <!-- DESCRIPTION --> */}
          <div className="bg-white/80 dark:bg-gray-800/70 rounded-3xl p-8 shadow">
            <h3 className="text-md text-indigo-500 font-bold mb-4">
              Motivasi yang Membangun
            </h3>
            <ul className="text-md list-disc pl-5">
              {desc.goodFuels.map((good, i) => {
                return <li key={i}>{good}</li>;
              })}
            </ul>
            <h3 className="text-md text-indigo-500 font-bold my-4">
              Motivasi yang Kurang Bekerja
            </h3>
            <ul className="text-md list-disc pl-5">
              {desc.badFuels.map((bad, i) => {
                return <li key={i}>{bad}</li>;
              })}
            </ul>
            <h3 className="text-md text-indigo-500 font-bold my-4">
              Saran Pengembangan
            </h3>
            <ul className="text-md list-disc pl-5">
              {desc.suggestions.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* ICONS */}
      <section className="max-w-6xl mx-auto grid grid-cols-4 place-items-center py-12 px-20 mb-18">
        <div className="bg-pink-600 text-gray-50 rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path
              fillRule="evenodd"
              d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="bg-pink-600 text-gray-50 rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="bg-pink-600 text-gray-50 rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="bg-pink-600 text-gray-50 rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
          </svg>
        </div>
      </section>
    </>
  );
}

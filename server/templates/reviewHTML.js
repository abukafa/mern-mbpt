import { resultProfiles } from "./resultProfiles.js";
import { chartRadarSVG } from "./chartRadarSVG.js";

export function reviewHTML(data) {
  function determineDominant(scores) {
    const entries = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const max = entries[0][1];
    const top = entries.filter((e) => max - e[1] < 5);
    if (top.length === entries.length) {
      return entries.map((e) => e[0]).join("+");
    }
    if (top.length === 1) {
      return top[0][0];
    }
    return top.map((e) => e[0]).join("+");
  }

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

  return `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <title>Result</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { font-family: ui-sans-serif, system-ui; }
  </style>
</head>

<body>

<div class="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 transition-colors duration-300">

<nav class="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200 mb-8">
  <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
    <div>
      <p>
        <span class="font-bold text-lg">MBPT</span> • Jaz Academy
      </p>
      <p class="text-xs text-gray-500">
        Motivation-Based Personality Test
      </p>
    </div>
    <div class="flex items-center gap-3">
      <button class="bg-gray-800 text-white w-9 h-9 flex items-center justify-center rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="size-6"
        >
          <path
            d="${
              audience == "adult"
                ? "M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z"
                : "M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 0 0-1.588-3.755 4.502 4.502 0 0 1 5.874 2.636.818.818 0 0 1-.36.98A7.465 7.465 0 0 1 14.5 16Z"
            }"
          />
        </svg>
      </button>
    </div>
  </div>
</nav>

<!-- PROFILE -->
<section class="max-w-6xl mx-auto px-10 py-4">
  <table class="w-full">
    <tr>
      <td class="w-24 font-semibold">Nama</td>
      <td class="font-semibold">: ${properCase(data.name)}</td>
      <td class="text-right font-semibold">
        ${date.toLocaleDateString("id-ID")}
      </td>
    </tr>
    <tr>
      <td class="font-semibold">Email</td>
      <td class="font-semibold">: ${data.email}</td>
      <td class="text-right font-semibold">
        ${date.toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </td>
    </tr>
  </table>
</section>

<!-- HERO -->
<section class="max-w-6xl mx-auto px-8 py-6">
  <div class="h-72 overflow-hidden rounded-3xl p-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-2xl max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
    <div class="text-center md:text-left md:ml-6 px-4">
      <h1 class="text-3xl font-bold mb-4">${result.label}</h1>

      <div class="flex gap-2 mb-6">
        ${profiles
          .map(
            (p) => `
          <span class="px-3 py-1 rounded-xl text-xs font-bold bg-pink-400 text-indigo-800">
            ${p.toUpperCase()}
          </span>
        `
          )
          .join("")}
      </div>

      <p class="text-sm text-gray-100">
        ${desc.insight || ""}
      </p>
    </div>
    <div class="items-center justify-center hidden md:flex">
      <img 
        src="${process.env.BASE_URL}/img/${audience}-${profiles[0]}.png" 
        class="h-60 w-full object-cover object-top" 
        alt=""
      >
    </div>
  </div>
</section>

<!-- DETAILS -->
<section class="max-w-6xl mx-auto px-10 mt-8 text-md">
  ${(desc.details || []).map((d) => `<p class="mb-4">${d}</p>`).join("")}
</section>

<section class="max-w-4xl mx-auto grid grid-cols-4 place-items-center py-12 mb-2 px-20">
  <div class="bg-pink-600 text-gray-50 rounded-full p-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="size-6"
    >
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path
        fillRule="evenodd"
        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  </div>
  <div class="bg-pink-600 text-gray-50 rounded-full p-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="size-6"
    >
      <path
        fillRule="evenodd"
        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
      />
    </svg>
  </div>
  <div class="bg-pink-600 text-gray-50 rounded-full p-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="size-6"
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
        clipRule="evenodd"
      />
    </svg>
  </div>
  <div class="bg-pink-600 text-gray-50 rounded-full p-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="size-6"
    >
      <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
    </svg>
  </div>
</section>

<!-- SWOT -->
<section class="max-w-6xl mx-auto px-8 py-8 grid grid-cols-2 gap-8">
  ${renderBox("Strength", desc.strength)}
  ${renderBox("Weakness", desc.weakness)}
  ${renderBox("Opportunity", desc.opportunity)}
  ${renderBox("Threat", desc.threat)}
</section>

<!-- CHART -->
<section class="max-w-6xl mx-auto px-8 mb-14 mt-0">
  <div class="grid md:grid-cols-2 gap-10">
    <!-- RADAR CHART -->
    <div class="w-full h-full bg-gray-100 rounded-3xl p-4 md:p-8 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
      <h3 class="text-md text-indigo-500 font-bold mb-4">Peta Motivasi</h3>
      <div class="place-items-center w-max h-max mx-auto">
        ${chartRadarSVG(scores)}
      </div>
    </div>

    <!-- DESCRIPTION -->
    <div class="bg-gray-100 rounded-3xl p-8 shadow">
      <h3 class="text-md text-indigo-500 font-bold mb-4">
        Motivasi yang Membangun
      </h3>
      <ul class="text-md list-disc pl-5">
        ${desc.goodFuels.map((g) => `<li>${g}</li>`).join("")}
      </ul>
      <h3 class="text-md text-indigo-500 font-bold my-4">
        Motivasi yang Kurang Bekerja
      </h3>
      <ul class="text-md list-disc pl-5">
        ${desc.badFuels.map((g) => `<li>${g}</li>`).join("")}
      </ul>
      <h3 class="text-md text-indigo-500 font-bold my-4">
        Saran Pengembangan
      </h3>
      <ul class="text-md list-disc pl-5">
        ${desc.suggestions.map((g) => `<li>${g}</li>`).join("")}
      </ul>
    </div>
  </div>
</section>

<section class="max-w-4xl mx-auto grid grid-cols-4 place-items-center py-12 px-20 mb-18">
  <div class="bg-pink-600 text-gray-50 rounded-full p-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="size-6"
    >
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path
        fillRule="evenodd"
        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  </div>
  <div class="bg-pink-600 text-gray-50 rounded-full p-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="size-6"
    >
      <path
        fillRule="evenodd"
        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
      />
    </svg>
  </div>
  <div class="bg-pink-600 text-gray-50 rounded-full p-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="size-6"
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
        clipRule="evenodd"
      />
    </svg>
  </div>
  <div class="bg-pink-600 text-gray-50 rounded-full p-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="size-6"
    >
      <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
    </svg>
  </div>
</section>

<footer class="bg-white border-t border-gray-200 py-8 text-center text-sm text-gray-500 mt-8">
  <p class="font-semibold">
    © MBPT Project by
    <a
      href="https://jazacademy.id"
      target="_blank"
      class="text-pink-500"
    >
      Jaz Academy
    </a>
  </p>
  <p class="mt-1">Motivation • Personality • Education</p>
</footer>

</div>

</body>
</html>
`;
}

function renderBox(title, items = []) {
  return `
  <div class="bg-indigo-600 text-white rounded-2xl p-6 mb-12">
    <h3 class="font-bold mb-3">${title}</h3>
    <ul class="list-disc pl-5 text-sm">
      ${items.map((i) => `<li>${i}</li>`).join("")}
    </ul>
  </div>
`;
}

export function reviewHTML(data) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white p-10">
  <h1 class="text-2xl font-bold mb-4">Hasil Tes</h1>

  <p><strong>Nama:</strong> ${data.name}</p>
  <p><strong>Email:</strong> ${data.email}</p>

  <div class="mt-6 p-4 border rounded">
    ${data.result}
  </div>
</body>
</html>
`;
}

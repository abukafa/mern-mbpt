export async function sendResultEmail({ name, email, imageBase64 }) {
  // contoh payload
  const payload = {
    name,
    email,
    image: imageBase64,
  };

  // sementara mock / dummy
  console.log("SEND EMAIL PAYLOAD", payload);

  // nanti tinggal ganti ke fetch API backend
  return true;
}

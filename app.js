async function generate() {
  const prompt = document.getElementById("prompt").value;

  const res = await fetch("https://YOUR-WORKER-URL.workers.dev", {
    method: "POST",
    body: prompt
  });

  const data = await res.json();
  document.getElementById("preview").srcdoc =
    data.choices[0].message.content;
}

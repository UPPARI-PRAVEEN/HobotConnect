async function fetchAll() {
  try {
    const [res1, res2, res3] = await Promise.all([
      fetch("https://api.example.com/data1").then(r => r.json()),
      fetch("https://api.example.com/data2").then(r => r.json()),
      fetch("https://api.example.com/data3").then(r => r.json())
    ]);

    console.log("All APIs Success:", res1, res2, res3);

  } catch (error) {
    console.log("One API failed:", error);
  }
}

fetchAll();
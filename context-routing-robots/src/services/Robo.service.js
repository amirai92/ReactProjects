export async function get_all_robots() {
  let data_url = "https://api.jsonbin.io/b/5f0d83d0292de94c17502ff7";
  let key = "$2b$10$lEDG6np5dwdtc3QJkJzYKe3vBenLeYaqbPBJoqQ6IdfdrzEScsr7e";
  const response = await fetch(data_url, {
    headers: { "secret-key": key }
  });
  if (!response.ok) throw new Error("Network response was not ok.");
  return await response.json();
}

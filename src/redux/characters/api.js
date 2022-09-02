const dataUrl = 'https://api.gameofthronesquotes.xyz/v1/characters';
export default async function fetchData() {
  let result = [];
  await fetch(dataUrl).then((res) => res.json()).then((data) => {
    result = data;
  });
  return { data: result };
}

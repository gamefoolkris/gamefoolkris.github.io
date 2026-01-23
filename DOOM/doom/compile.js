window.compileDoom = async function() {
  let parts = [];
  for(let i = 0; i < 12; i++) {
    let response = await fetch(`./doom/part${i}`);
    parts.push(Array.from(await response.bytes()));
  }
  let blob = new Blob([new Uint8Array(parts.flat())], { type: 'application/octet-stream' });
  return URL.createObjectURL(blob);
}
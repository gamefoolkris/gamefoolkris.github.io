window.TBtoZIP = async function(TB) {
	let tar = brot.decompress(TB);
	let decomp = await parseTar(tar);
	let files = {};
	for(let file of decomp) {
		files[file.name] = file.data;
	}
	let zip = fflate.zipSync(files, { level: 1 });
	return zip;
}

window.compileDoom = async function() {
  let parts = [];
  for(let i = 0; i < 12; i++) {
    let response = await fetch(`./doom/part${i}`);
    parts.push(Array.from(await response.bytes()));
  }
  let jsdos = await TBtoZIP(new Uint8Array(parts.flat()));
  let blob = new Blob([jsdos], {type: "application/zip"});
  return URL.createObjectURL(blob);
}
export function chunkArray(arr = [], size) {
	if(arr.length < size) return [arr];
	return [arr.slice(0,size), ...chunkArray(arr.slice(size), size)];
}

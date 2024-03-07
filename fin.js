function fibs (a) {
	if (a<2) return;

	let output = [0,1];

	for(i=0; i<a-2; i++) {
		const length = output.length;
		output.push(output[length - 1]+ output[length-2] );
	}
	return output;
}

console.log(fibs(8)); 

function calcPower(x,n){
	if(n ==0 ) return 1;
	else
		return x*calcPower(x,n-1)
}

// console.log(calcPower(3,9))
// console.log(calcPower(3,3))


function calcPowerIterative(x,n){
	let t =1;
	while(n--)
		t = x*t;
	return t;
}
console.log(calcPowerIterative(3,9))
console.log(calcPowerIterative(3,3))
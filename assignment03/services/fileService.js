const getAddService = (req, res) => {
	let a = Number(req.params.a);
	let b = Number(req.params.b);
	const add = (a, b) => a + b;
	res.json({ add_result: add(a, b) });
};

const getSubtractService = (req, res) => {
	let a = Number(req.params.a);
	let b = Number(req.params.b);
	const subtract = (a, b) => a - b;
	res.json({ subtract_result: subtract(a, b) });
};

const getMultiplyService = (req, res) => {
	let a = Number(req.params.a);
	let b = Number(req.params.b);
	const multiply = (a, b) => a * b;
	res.json({ multiply_result: multiply(a, b) });
};

const getDivideService = (req, res) => {
	let a = Number(req.params.a);
	let b = Number(req.params.b);
	const divide = (a, b) => a / b;
	res.json({ divide_result: divide(a, b) });
};

const getModulusService = (req, res) => {
	let a = Number(req.params.a);
	let b = Number(req.params.b);
	const modulus = (a, b) => a % b;
	res.json({ modulus_result: modulus(a, b) });
};

const getAreaOfCircleService = (req, res) => {
	const pi = 3.1416;
	let radius = Number(req.params.r);
	const areaOfCircle = (radius) => pi * radius * 2;
	res.json({ areaOfCircle_result: areaOfCircle(radius) });
};

const getFeetInchesToCentimeterService = (req, res) => {
	const footInCm = 30.48;
	const inchInCm = 2.54;
	let feet = Number(req.params.f);
	let inches = Number(req.params.i);
	const feetToCm = (feet) => feet * footInCm + 'cm';
	const inchesToCm = (inches) => inches * inchInCm + 'cm';
	res.json({ feetToCentimeter_result: feetToCm(feet), inchesToCentimeter_result: inchesToCm(inches) });
};

export { getAddService, getSubtractService, getMultiplyService, getDivideService, getModulusService, getAreaOfCircleService, getFeetInchesToCentimeterService };

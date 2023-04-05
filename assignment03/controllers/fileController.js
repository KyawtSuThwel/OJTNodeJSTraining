import { getAddService, getSubtractService, getMultiplyService, getDivideService, getModulusService, getAreaOfCircleService, getFeetInchesToCentimeterService } from '../services/fileService.js';

const getAdd = (req, res) => {
	getAddService(req, res);
};

const getSubtract = (req, res) => {
	getSubtractService(req, res);
};

const getMultiply = (req, res) => {
	getMultiplyService(req, res);
};

const getDivide = (req, res) => {
	getDivideService(req, res);
};

const getModulus = (req, res) => {
	getModulusService(req, res);
};

const getAreaOfCircle = (req, res) => {
	getAreaOfCircleService(req, res);
};

const getFeetInchesToCentimeter = (req, res) => {
	getFeetInchesToCentimeterService(req, res);
};

export { getAdd, getSubtract, getMultiply, getDivide, getModulus, getAreaOfCircle, getFeetInchesToCentimeter };

import express from 'express';
import { getAdd, getAreaOfCircle, getDivide, getFeetInchesToCentimeter, getModulus, getMultiply, getSubtract } from '../controllers/fileController.js';
const fileRouter = express.Router();

fileRouter.get('/add/:a/:b', (req, res) => {
	getAdd(req, res);
});

fileRouter.get('/subtract/:a/:b', (req, res) => {
	getSubtract(req, res);
});

fileRouter.get('/multiply/:a/:b', (req, res) => {
	getMultiply(req, res);
});

fileRouter.get('/divide/:a/:b', (req, res) => {
	getDivide(req, res);
});

fileRouter.get('/modulus/:a/:b', (req, res) => {
	getModulus(req, res);
});

fileRouter.get('/area_of_circle/:r', (req, res) => {
	getAreaOfCircle(req, res);
});

fileRouter.get('/feet_inch_to_cm/:f/:i', (req, res) => {
	getFeetInchesToCentimeter(req, res);
});

export default fileRouter;

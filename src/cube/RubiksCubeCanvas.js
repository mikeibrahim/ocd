import React from "react";
import Sketch from "react-p5";
import RubiksCubeVisual from "./RubiksCubeVisual";

class RubiksCubeCanvas {
	constructor(size, colors) {
		this.rcv = new RubiksCubeVisual(size, colors);
		this.canvas = <Sketch setup={this.setup} draw={this.draw} />;
	}

	async do(move) {
		await this.rcv.do(move);
	}

	setup = (p5, canvasParentRef) => {
		let canvas = p5.createCanvas(800, 800, p5.WEBGL).parent(canvasParentRef);
		canvas.style("display", "block");
		canvas.style("width", "min(80vh, 80vw)");
		canvas.style("height", "min(80vh, 80vw)");
		p5.camera(-115, -100, -50);
	};

	draw = (p5) => {
		p5.background(255);
		p5.orbitControl(10);

		this.rcv.draw(p5);
	};

	getCanvas() { return this.canvas; }
}

export default RubiksCubeCanvas;
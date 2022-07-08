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
		canvas.style("width", "min(100vh, 100vw)");
		canvas.style("height", "min(100vh, 100vw)");

		this.camera = p5.createCamera();
		this.camRadius = 200;
		this.xMag = 3;
		this.yMag = 1;
	};

	draw = (p5) => {
		p5.background(51, 51, 51);
		const a1 = this.xMag * Math.PI / 2 * (p5.mouseX + p5.width / 2) / (p5.width / 2);
		const a2 = this.yMag * -Math.PI / 2 * (p5.mouseY - p5.height / 2) / (p5.height / 2);
		const camX = Math.cos(a2) * Math.cos(a1), camY = Math.sin(a2), camZ = Math.cos(a2) * Math.sin(a1);
		this.camera.setPosition(this.camRadius * camX, this.camRadius * camY, this.camRadius * camZ);
		this.camera.lookAt(0, 0, 0);

		// this.rc.draw(p5);
		this.rcv.draw(p5);
	};

	getCanvas() { return this.canvas; }
}

export default RubiksCubeCanvas;
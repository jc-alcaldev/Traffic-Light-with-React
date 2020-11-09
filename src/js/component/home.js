import React, { useState } from "react";
import { Circle } from "./circle.jsx";

export function Home() {
	const [red, setRed] = useState("red");
	const [amber, setAmber] = useState("amber");
	const [green, setGreen] = useState("green");

	const changeRed = () => {
		if (
			(red == "red") |
			(green == "green selected") |
			(amber == "ambar selected")
		) {
			setRed("red selected");
			setAmber("amber");
			setGreen("green");
		} else {
			setRed("red");
		}
	};
	const changeAmber = () => {
		if (
			(amber == "amber") |
			(green == "green selected") |
			(red == "red selected")
		) {
			setAmber("amber selected");
			setRed("red");
			setGreen("green");
		} else {
			setAmber("amber");
		}
	};
	const changeGreen = () => {
		if (
			(green == "green") |
			(amber == "ambar selected") |
			(red == "red selected")
		) {
			setGreen("green selected");
			setAmber("amber");
			setRed("red");
		} else {
			setGreen("green");
		}
	};

	return (
		<div>
			<h1>Push color</h1>
			<div className="traffic-lights">
				<Circle
					classContent={red}
					eventChange={() => {
						changeRed();
					}}
				/>

				<Circle
					classContent={amber}
					eventChange={() => {
						changeAmber();
					}}
				/>
				<Circle
					classContent={green}
					eventChange={() => {
						changeGreen();
					}}
				/>
			</div>
		</div>
	);
}

import {Star} from "../types/data";

export default async function getapi() {
	try {
			const st = await fetch('https://swapi.dev/api/people/').then((res) => {
				return res.json();
			});
			return st.results;
	} catch (error) {
		console.log(error);
	}
}
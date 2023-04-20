import type { PageServerLoad } from "./$types";

export const prerender = true;

export const load = (async ({ cookies }) => {
    console.log("fetching")
    
    let data = await fetch("https://some-random-api.ml/animal/bird")

	return await data.json()
}) satisfies PageServerLoad;
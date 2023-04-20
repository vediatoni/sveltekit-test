import type { PageServerLoad } from "./$types";

export const prerender = true;

type birdResponse = {
    fact: string,
    image: string
}

export const load = (async ({ params }) => {
    const data = await fetch("https://some-random-api.ml/animal/bird")
    const bird: birdResponse = await data.json()

	return {
        page: params.page,
        bird: bird
    }
}) satisfies PageServerLoad;
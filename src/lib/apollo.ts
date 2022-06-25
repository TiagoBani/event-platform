import { ApolloClient, InMemoryCache } from '@apollo/client'

const ENVS = {
	url: import.meta.env.VITE_API_URL as string,
	token: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
}

export const client = new ApolloClient({
	uri: ENVS.url,
	cache: new InMemoryCache(),
	headers: {
		Authorization: ENVS.token,
	},
})

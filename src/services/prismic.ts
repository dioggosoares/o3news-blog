import * as prismic from '@prismicio/client'

const endpoint = prismic.getEndpoint('o3news')
export const getPrismicClient = prismic.createClient(endpoint)


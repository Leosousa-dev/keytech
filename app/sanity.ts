import {createClient} from 'next-sanity'

export const client = createClient({
    projectId: "0w1yro5w",
    dataset: "production",
    apiVersion: "2023-01-31",
    useCdn: false
  });

import { createClient } from "next-sanity";
import imageUrlBuilder  from "@sanity/image-url";


export const client = createClient ({
    projectId: 'tb5f52am',
    dataset: 'production',
    apiVersion: '2022-03-25',
    useCdn: true,
});

const builder = imageUrlBuilder(client)

export function urlFor(source: string) {
    return builder.image(source);
}



import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

let blog = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string()),
    }),
});

let homepage = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/homepage" }),
    schema: z.object({
        title: z.string(),
        index: z.number()
    }),
});

export let collections = { blog, homepage };

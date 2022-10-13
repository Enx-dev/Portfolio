import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "edljfejc",
  dataset: "production",
  apiVersion: "2022-10-10",
  useCdn: false,
});

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || "LPRegen-blog";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ci2u4db7";
const token = process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-04-02";

export { apiVersion, dataset, projectId, title, token };

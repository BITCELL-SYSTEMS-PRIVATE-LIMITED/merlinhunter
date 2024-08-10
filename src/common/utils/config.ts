// config.ts
const config = {
   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "gtcy5spk",
   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
   apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-08-07", // update to your preferred date
   token: process.env.NEXT_PUBLIC_SANITY_TOKEN // optional
 };
 
 export default config;
 
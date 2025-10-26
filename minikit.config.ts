const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjI4OTExNywidHlwZSI6ImF1dGgiLCJrZXkiOiIweDkzMDU2MUNjMjQyM0FkZGJmRWI0OTUwODhlMDg5ZTZkMzc5QzAwMTMifQ",
    payload: "eyJkb21haW4iOiJuZXctbWluaWlpLWFwcC1xdWlja3N0YXJ0LnZlcmNlbC5hcHAifQ",
    signature: "ym9uiP7+wP0JzdXALvH7dTiVHbX/Efxy40DgwSi/p9peDSbQWiGtnDemk4WLjxxFah/gT0gzg3LuiyqoPL3Bgxs=+uq4a4riYT0FyoEVpZyl4mdw+yPeN9NrFdhs"
  },
  miniapp: {
    version: "1",
    name: "new-miniii-app-quickstart", 
    subtitle: "Your AI Ad Companion", 
    description: "Ads",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["marketing", "ads", "quickstart", "waitlist"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`, 
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
} as const;


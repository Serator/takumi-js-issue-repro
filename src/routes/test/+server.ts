import { render } from "svelte/server";
import ImageResponse from "takumi-js/response";
import OgImage from "./OgImage.svelte";

export async function GET({ url }) {
  const { body, head } = await render(OgImage, {
    props: {
      name: url.searchParams.get("name") ?? "Goo goo gaga",
    },
  });

  return new ImageResponse(`${head}${body}`, {
    width: 1200,
    height: 630,
    fonts: ["https://takumi.kane.tw/fonts/Geist.woff2"],
  });
}

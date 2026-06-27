import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }) {
  const { slug } = await params;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(150deg,#000,#333)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "Center",
        alignItems: "Center",
        fontSize: 60,
        fontWeight: "bold",
      }}
    >
      <div>Pranay</div>
      <p>{slug}</p>
    </div>,
  );
}

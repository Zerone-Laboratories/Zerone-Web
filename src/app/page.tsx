import React from "react";
import ImageContainer from "@/components/ImageContainer";

export default function Page() {
  return (
    <main>
      <ImageContainer
        alt="logo"
        src="/assets/backgrounds/zrn-back.png"
        height={100}
      />

      <p style={{ maxWidth: 500 }}>
        Zerone Laboratories and Technologies is a lab that experiments with AI,
        robotics, and other cutting-edge technology. Our team of experts works
        collaboratively to develop innovative solutions that have the potential
        to revolutionize industries and transform the way we live and work. We
        are committed to pushing the boundaries of technology to create a better
        future.
      </p>
    </main>
  );
}

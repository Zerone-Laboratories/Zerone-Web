import React from "react";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import ImageContainer from "@/components/ImageContainer";
import ScrollDownIndicator from "@/components/ScrollDownIndicator";

export default function Page() {
  const projectData = [
    {
      title: "R.I.G.E.L NLP System",
      description:
        "An NLP based Q and A system that I built when I was 16. Apologies for bad User Interface...",
      link: "#",
      image: "/content/rigelai/rigel1.gif",
    },
    {
      title: "Project 2",
      description: "This is the description for project 2.",
      link: "#",
      image: "/assets/backgrounds/zrn-back.png",
    },
    {
      title: "Project 3",
      description: "This is the description for project 3.",
      link: "#",
      image: "/assets/backgrounds/zrn-back.png",
    },
    {
      title: "Project 4",
      description: "This is the description for project 4.",
      link: "#",
      image: "/assets/backgrounds/zrn-back.png",
    },
    {
      title: "Project 5",
      description: "This is the description for project 5.",
      link: "#",
      image: "/assets/backgrounds/zrn-back.png",
    },
    {
      title: "Project 6",
      description: "This is the description for project 6.",
      link: "#",
      image: "/assets/backgrounds/zrn-back.png",
    },
  ];

  const projectSlides = projectData.map((project, index) => (
    <Card key={index} {...project} />
  ));

  return (
    <>
      <main>
        <ImageContainer
          alt="logo"
          src="/assets/backgrounds/zrn-back.png"
          maxWidth={500}
        />

        <p style={{ maxWidth: 500 }}>
          Zerone Laboratories and Technologies is a lab that experiments with
          AI, robotics, and other cutting-edge technology. Our team of experts
          works collaboratively to develop innovative solutions that have the
          potential to revolutionize industries and transform the way we live
          and work. We are committed to pushing the boundaries of technology to
          create a better future.
        </p>

        <ScrollDownIndicator />
      </main>

      <section id="projects">
        <Carousel slides={projectSlides} />
      </section>
    </>
  );
}

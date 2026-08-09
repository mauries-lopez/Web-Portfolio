export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mauries Lopez",
    givenName: "Mauries",
    familyName: "Lopez",
    url: "https://maurieslopez.netlify.app",
    jobTitle: "Software Engineer",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "De La Salle University",
    },
    sameAs: [
      "https://github.com/mauries-lopez",
      "https://www.linkedin.com/in/mauries-lopez/",
    ],
    knowsAbout: [
      "Software Engineering",
      "Web Development",
      "Full Stack Development",
      "Machine Learning",
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "Natural Language Processing",
      "Sentiment Analysis",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mauries Lopez — Software Engineer",
    url: "https://maurieslopez.netlify.app",
    description:
      "Portfolio website of Mauries Lopez, software engineer specializing in full stack web development and machine learning.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

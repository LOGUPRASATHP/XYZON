import React from "react";
import "./Services.css";

const services = [
  {
    title: "College Training Programs",
    icon: "🎓",
    sub_title: "Comprehensive curriculum design and delivery for educational institutions across India.",
    points: [
      "Custom curriculum development",
      "Faculty training & certification",
      "Student placement assistance",
      "Industry-academia partnerships",
    ],
  },
  {
    title: "Corporate Training",
    icon: "💼",
    sub_title: "Tailored upskilling programs for organizations to enhance their workforce capabilities",
    points: [
      "Employee skill assessment",
      "Custom training modules",
      "Certification programs",
    ],
  },
  {
    title: "Product Development",
    icon: "🚀",
    sub_title: "End-to-end product development services for startups and enterprises.",
    points: [
      "MVP development",
      "Full-stack solutions",
      "Technical consulting",
    ],
  },
  {
    title: "Makerspace Services",
    icon: "🌍",
    sub_title: "Community-driven spaces that connect rural talent with global opportunities.",
    points: [
      "Co-working spaces",
      "Mentorship programs",
      "Freelance marketplace access",
    ],
  },
  {
    title: "Hackathons Centric Learning",
    icon: "💡",
    sub_title: "Immersive hackathon-led learning modules driving rapid skill acquisition and innovation",
    points: [
      "Problem-focused sprints",
      "Industry challenge statements",
      "Prototype to product pathways",
    ],
  },
  {
    title: "Entrepreneur Ecosystem Enablement",
    icon: "🧠",
    sub_title: "Support framework for student & rural founders to ideate, validate and scale ventures",
    points: [
      "Ideation workshops",
      "MVP & market validation",
      "Incubation readiness",
    ],
  },
];

const Services = () => {
  return (
    <section className="services">
      <h1>Our Services</h1>
      <p className="subtitle">
        Comprehensive solutions designed to empower individuals, institutions, and organizations with cutting-edge skills and technology.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <h3>{service.sub_title}</h3>
            <ul>
              {service.points.map((point, i) => (
                <li key={i}>✓ {point}</li>
              ))}
            </ul>
            <button>Learn More →</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
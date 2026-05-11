import React from "react";
import "../WorkflowOrbit.css";

const workflowCards = [
  {
    number: "01",
    title: "Account Assignment",
    desc: "Client portfolios are assigned to trained recovery teams through a structured workflow.",
  },
  {
    number: "02",
    title: "Tele-Collection",
    desc: "Professional calling support for customer reminders, follow-ups, and payment commitments.",
  },
  {
    number: "03",
    title: "Field Visit",
    desc: "On-ground executives visit customers with proper documentation and clear reporting.",
  },
  {
    number: "04",
    title: "Payment Recovery",
    desc: "Secure recovery support with transparent communication and recorded follow-up updates.",
  },
  {
    number: "05",
    title: "Settlement Support",
    desc: "Helping customers complete commitments and close pending dues with professional handling.",
  },
  {
    number: "06",
    title: "Recovery Report",
    desc: "Daily case updates, status tracking, and transparent recovery performance reporting.",
  },
];

const particles = Array.from({ length: 34 }, (_, i) => ({
  id: i,
  size: i % 3 === 0 ? 6 : i % 2 === 0 ? 4 : 3,
  left: `${(i * 37) % 100}%`,
  top: `${(i * 23) % 100}%`,
  delay: `${(i % 7) * 0.8}s`,
  duration: `${6 + (i % 5)}s`,
}));

export default function WorkflowOrbit() {
  return (
    <section className="workflow-banner">
      <header className="workflow-header">
        <span>Elshaddai Enterprises</span>
        <h2>Complete Collection Workflow</h2>
      </header>

      <div className="workflow-particles">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="workflow-particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      <div className="workflow-scene">
        <div className="workflow-center-glow" />
        <div className="workflow-floor-ring" />

        <div
          className="workflow-slider"
          style={{ "--quantity": workflowCards.length }}
        >
          {workflowCards.map((card, index) => (
            <div
              className="workflow-item"
              key={card.number}
              style={{ "--position": index + 1 }}
            >
              <div className="workflow-card">
                <div className="workflow-card-number">{card.number}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <img
          src="../assets/girl1.png"
          alt="Professional Collection Executive"
          className="workflow-center-girl"
        />
      </div>
    </section>
  );
}

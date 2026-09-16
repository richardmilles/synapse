import { useEffect, useState } from "react";
import { Check } from "lucide-react";

const commitments = [
  { title: "Objectif mesurable", text: "Relié à un indicateur de l’entreprise." },
  { title: "Intégration complète", text: "Avec vos logiciels et vos données." },
  { title: "Adoption rapide", text: "Des interfaces simples pour les équipes." },
  { title: "Architecture évolutive", text: "Pensée pour accompagner la croissance." },
];

export const ProcessCommitments = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % commitments.length), 2600);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <div className="premium-commitments" onMouseLeave={() => setPaused(false)}>
      <p className="premium-commitments__label">Nos engagements sur chaque projet</p>
      <ul>
        {commitments.map((item, index) => (
          <li
            key={item.title}
            className={index === active ? "is-active" : ""}
            onMouseEnter={() => { setActive(index); setPaused(true); }}
          >
            <Check aria-hidden="true" />
            <div><strong>{item.title}</strong><span>{item.text}</span></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

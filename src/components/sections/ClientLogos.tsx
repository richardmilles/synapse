const clients = [
  { name: "Alenia", src: "/clients/client-1.webp" },
  { name: "Valoria Conseil", src: "/clients/client-2.webp" },
  { name: "Eloria", src: "/clients/client-3.webp" },
  { name: "Movelia Logistique", src: "/clients/client-4.webp" },
  { name: "Solena", src: "/clients/client-5.webp" },
  { name: "Avelia Services", src: "/clients/client-6.webp" },
];

export const ClientLogos = () => (
  <section className="premium-trustbar" aria-label="Entreprises accompagnées">
    <div className="premium-shell">
      <p className="premium-trustbar__label">Ils nous font confiance</p>
    </div>
    <div className="premium-trustbar__track">
      <div className="premium-trustbar__row" aria-hidden="true">
        {[...clients, ...clients].map((client, index) => (
          <span className="premium-trustbar__logo" key={`${client.name}-${index}`} title={client.name}>
            <img src={client.src} alt={client.name} loading="lazy" />
            <em>{client.name}</em>
          </span>
        ))}
      </div>
    </div>
  </section>
);

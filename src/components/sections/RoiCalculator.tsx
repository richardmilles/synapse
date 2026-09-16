import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const formatNumber = (value: number) => Math.round(value).toLocaleString("fr-FR");

type SliderProps = {
  label: string;
  hint: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (value: number) => void;
};

const Slider = ({ label, hint, value, min, max, step, unit, onChange }: SliderProps) => (
  <label className="premium-calc__field">
    <span className="premium-calc__field-head"><span>{label}</span><strong>{value.toLocaleString("fr-FR")} {unit}</strong></span>
    <input type="range" min={min} max={max} step={step} value={value} onChange={(event) => onChange(Number(event.target.value))} />
    <small>{hint}</small>
  </label>
);

export const RoiCalculator = () => {
  const [budget, setBudget] = useState(15000);
  const [hoursSaved, setHoursSaved] = useState(40);
  const [hourlyCost, setHourlyCost] = useState(40);

  const monthlyGain = hoursSaved * hourlyCost;
  const yearlyGain = monthlyGain * 12;
  const paybackMonths = monthlyGain > 0 ? budget / monthlyGain : 0;
  const roiYear = ((yearlyGain - budget) / budget) * 100;

  return (
    <section className="premium-calc" id="calculateur">
      <div className="premium-shell premium-calc__grid">
        <div className="premium-calc__intro">
          <p className="premium-section-label">Calculateur de ROI</p>
          <h2>Ce que votre projet peut rapporter.</h2>
          <p>Trois chiffres suffisent pour estimer en combien de temps une solution sur mesure se rembourse.</p>
          <div className="premium-calc__inputs premium-calc__inputs--simple">
            <Slider label="Budget du projet" hint="Ce que vous êtes prêt à investir" value={budget} min={3000} max={150000} step={1000} unit="€" onChange={setBudget} />
            <Slider label="Heures gagnées par mois" hint="Temps libéré pour l’ensemble de vos équipes" value={hoursSaved} min={5} max={300} step={5} unit="h" onChange={setHoursSaved} />
            <Slider label="Coût horaire chargé" hint="Salaire et charges ramenés à l’heure" value={hourlyCost} min={20} max={100} step={5} unit="€" onChange={setHourlyCost} />
          </div>
        </div>

        <div className="premium-calc__result" aria-live="polite">
          <div className="premium-calc__block">
            <small>Gain estimé</small>
            <strong>{formatNumber(monthlyGain)} € / mois</strong>
            <span>soit {formatNumber(yearlyGain)} € par an</span>
          </div>
          <div className="premium-calc__block premium-calc__block--highlight">
            <small>Projet remboursé en</small>
            <strong>{paybackMonths.toLocaleString("fr-FR", { maximumFractionDigits: 1 })} mois</strong>
          </div>
          <div className="premium-calc__block">
            <small>Retour sur investissement à 12 mois</small>
            <strong>{roiYear > 0 ? "+" : ""}{formatNumber(roiYear)} %</strong>
          </div>
          <p className="premium-calc__note">Estimation indicative. Le diagnostic permet de chiffrer précisément votre projet.</p>
          <a className="premium-button premium-button--lime" href="https://synapse0.neetocal.com/audit" target="_blank" rel="noopener noreferrer">Chiffrer mon projet <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
};

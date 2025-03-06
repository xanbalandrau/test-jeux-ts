import { useState } from "react";

export default function JustePrix() {
  const [nbrTentatives, setNbrTentatives] = useState<number | null>(null);
  const [nbrMax, setNbrMax] = useState<number | null>(null);
  const [nbrSecret, setNbrSecret] = useState<number | null>(null);
  const [nbrSaisi, setNbrSaisi] = useState<number | "">("");
  const [message, setMessage] = useState<string | null>(null);
  const [tentativesRestantes, setTentativesRestantes] = useState<number | null>(
    null
  );
  const [jeuCommence, setJeuCommence] = useState(false);

  const commencerJeu = () => {
    if (!nbrTentatives || !nbrMax || nbrTentatives <= 0 || nbrMax <= 0) {
      alert("Veuillez entrer des valeurs valides.");
      return;
    }
    setNbrSecret(Math.floor(Math.random() * nbrMax));
    setTentativesRestantes(nbrTentatives);
    setMessage(null);
    setJeuCommence(true);
  };

  const verifierNombre = () => {
    if (nbrSecret === null || tentativesRestantes === null) return;

    const nombre = Number(nbrSaisi);
    if (isNaN(nombre)) {
      setMessage("Veuillez entrer un nombre valide.");
      return;
    }

    if (nombre > nbrSecret) {
      setMessage("C'est moins !");
    } else if (nombre < nbrSecret) {
      setMessage("C'est plus !");
    } else {
      setMessage(`Bravo, le juste prix était bien ${nbrSecret} !`);
      setJeuCommence(false);
      return;
    }

    setTentativesRestantes(tentativesRestantes - 1);
    if (tentativesRestantes - 1 === 0) {
      setMessage(`Vous avez perdu ! Le juste prix était ${nbrSecret}.`);
      setJeuCommence(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto text-center">
      {!jeuCommence ? (
        <div>
          <h2 className="text-xl font-bold mb-2">Paramètres du jeu</h2>
          <input
            type="number"
            placeholder="Nombre de tentatives"
            value={nbrTentatives ?? ""}
            onChange={(e) => setNbrTentatives(Number(e.target.value))}
            className="border p-2 rounded mb-2 w-full"
          />
          <input
            type="number"
            placeholder="Nombre maximum"
            value={nbrMax ?? ""}
            onChange={(e) => setNbrMax(Number(e.target.value))}
            className="border p-2 rounded mb-2 w-full"
          />
          <button
            onClick={commencerJeu}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Commencer le jeu
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-2">Devinez le nombre</h2>
          <p>Il reste {tentativesRestantes} tentatives.</p>
          <input
            type="number"
            placeholder="Entrez un nombre"
            value={nbrSaisi}
            onChange={(e) => setNbrSaisi(Number(e.target.value))}
            className="border p-2 rounded mb-2 w-full"
          />
          <button
            onClick={verifierNombre}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Vérifier
          </button>
          {message && <p className="mt-2 text-lg">{message}</p>}
        </div>
      )}
    </div>
  );
}

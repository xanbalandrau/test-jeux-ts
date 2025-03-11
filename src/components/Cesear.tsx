const Cesear = () => {
  console.log("---Le chiffrage de César---");

  let messageDéchiffré: string = "";

  // function cesar(messageAchiffer : string, key : number):string {

  const cesar = (messageAchiffer: string, key: number): string => {
    if (key < 0) return cesar(messageAchiffer, key + 26);

    // variable pour stocker le résultat
    // Parcourir chaque caractére
    for (let i = 0; i < messageAchiffer.length; i++) {
      // Récupérer le caractére que nous allons ajouter
      let c: string = messageAchiffer[i];
      // Vérifier si c'est une lettre
      if (c.match(/[a-z]/i)) {
        // Récupérer son code
        const code = messageAchiffer.charCodeAt(i);
        // Lettres majuscules
        if (code >= 65 && code <= 90)
          c = String.fromCharCode(((code - 65 + key) % 26) + 65);
        // Lettres minuscules
        else if (code >= 97 && code <= 122)
          c = String.fromCharCode(((code - 97 + key) % 26) + 97);
      }
      // Ajouter le caractére
      messageDéchiffré += c;
    }
    // Résultat
    return messageDéchiffré;
  };
  console.log(cesar("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 1));
  console.log(cesar("Voici un chiffrement de César", 5));

  // Pour lancer le script
  // ts-node chiffrageCésar.ts
  return <div>Cesear</div>;
};

export default Cesear;

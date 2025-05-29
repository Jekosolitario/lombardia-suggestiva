// Funzione che mostra il messaggio temporaneo (toast)
function avviso() {
  const toast = document.getElementById("toast-avviso"); // Seleziono l'elemento con ID 'toast-avviso'

  // Rimuovo la classe 'hidden' per renderlo visibile
  toast.classList.remove("hidden");

  // Aggiungo la classe 'show' per attivare l'animazione e mostrare il messaggio
  toast.classList.add("show");

  // Dopo 3 secondi (3000 ms) eseguo questa funzione:
  setTimeout(() => {
    // Rimuovo la classe 'show' per iniziare l'effetto di sparizione
    toast.classList.remove("show");

    // Aggiungo la classe 'hidden' per nascondere completamente l'elemento
    toast.classList.add("hidden");
  }, 3000); // Tempo di attesa in millisecondi (3 secondi)
}

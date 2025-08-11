// Données fictives pour l'exemple (vous les remplacerez par des données de votre backend)
const taxpayerData = {
    name: 'Jean Dupont',
    taxDue: 1200,
    deadline: '2025-01-31',
    paymentHistory: [
      { date: '2024-12-15', amount: 500 },
      { date: '2024-11-10', amount: 300 },
    ],
  };
  
  // Fonction pour charger les données sur le tableau de bord
  function loadDashboard() {
    // Remplir les données de la vue d'ensemble
    document.getElementById('userName').innerText = taxpayerData.name;
    document.getElementById('taxDue').innerText = taxpayerData.taxDue;
    document.getElementById('deadline').innerText = taxpayerData.deadline;
  
    // Remplir l'historique des paiements
    const paymentHistoryTable = document.getElementById('paymentHistory');
    paymentHistoryTable.innerHTML = ''; // Réinitialiser le tableau
  
    if (taxpayerData.paymentHistory.length > 0) {
      taxpayerData.paymentHistory.forEach((payment) => {
        const row = `<tr>
          <td>${payment.date}</td>
          <td>${payment.amount}</td>
        </tr>`;
        paymentHistoryTable.innerHTML += row;
      });
    } else {
      paymentHistoryTable.innerHTML = `<tr><td colspan="2">Aucun paiement enregistré.</td></tr>`;
    }
  }
  
  // Charger le tableau de bord après le chargement de la page
  document.addEventListener('DOMContentLoaded', loadDashboard);
  
  // Gestionnaire d'événement pour le bouton "Payer maintenant"
  document.getElementById('payNowBtn').addEventListener('click', () => {
    alert('Redirection vers la page de paiement...');
  });
  // Écouteur d'événement pour le formulaire
document.getElementById('tvaForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page
  
    // Récupérer les données du formulaire
    const companyName = document.getElementById('companyName').value;
    const taxId = document.getElementById('taxId').value;
    const period = document.getElementById('period').value;
    const revenue = document.getElementById('revenue').value;
    const tvaCollected = document.getElementById('tvaCollected').value;
    const tvaPaid = document.getElementById('tvaPaid').value;
    const comments = document.getElementById('comments').value;
  
    // Calcul de la TVA nette à payer
    const tvaNetPayable = tvaCollected - tvaPaid;
  
    // Afficher un récapitulatif
    alert(`
      Déclaration soumise avec succès !
      Entreprise : ${companyName}
      NIF : ${taxId}
      Période : ${period}
      Chiffre d'affaires HT : ${revenue} €
      TVA collectée : ${tvaCollected} €
      TVA déductible : ${tvaPaid} €
      TVA nette à payer : ${tvaNetPayable} €
    `);
  
    // Réinitialiser le formulaire
    document.getElementById('tvaForm').reset();
  });
  document.getElementById('prestataireForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page
  
    // Récupérer les données du formulaire
    const prestataireName = document.getElementById('prestataireName').value;
    const taxId = document.getElementById('taxId').value;
    const address = document.getElementById('address').value;
    const serviceType = document.getElementById('serviceType').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
  
    // Ajouter une nouvelle ligne dans le tableau
    const table = document.getElementById('prestatairesTable').querySelector('tbody');
    const newRow = table.insertRow();
  
    newRow.innerHTML = `
      <td>${prestataireName}</td>
      <td>${taxId}</td>
      <td>${address}</td>
      <td>${serviceType}</td>
      <td>${phone}</td>
      <td>${email}</td>
    `;
  
    // Réinitialiser le formulaire
    document.getElementById('prestataireForm').reset();
  });
  
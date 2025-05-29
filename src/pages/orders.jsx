import React, { useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      reference: 'ORD-001',
      date: '2025-05-25',
      statut: 'En attente',
      user_id: 101,
      articles: [
        { nom: 'Robe été', categorie: 'robe', couleur: 'bleu', quantite: 1, prix: 259.99 }
      ],
      total: 259.99
    },
    {
      id: 2,
      reference: 'ORD-002',
      date: '2025-05-24',
      statut: 'En attente',
      user_id: 102,
      articles: [
        { nom: 'Foulard soie', categorie: 'foulard', couleur: 'rouge', quantite: 2, prix: 129.99 },
        { nom: 'Ceinture cuir', categorie: 'accessoire', couleur: 'noir', quantite: 1, prix: 139.99 }
      ],
      total: 499.97
    }
  ]);

  const handleConfirmer = (orderId) => {
    setOrders(orders.map(order =>
      order.id === orderId
        ? { ...order, statut: 'Confirmée' }
        : order
    ));
  };

  const handleRefuser = (orderId) => {
    setOrders(orders.map(order =>
      order.id === orderId
        ? { ...order, statut: 'Refusée' }
        : order
    ));
  };

  const getStatusColor = (statut) => {
    switch (statut) {
      case 'Confirmée': return 'bg-green-100 text-green-800';
      case 'Refusée': return 'bg-red-100 text-red-800';
      default: return 'bg-amber-100 text-amber-800';
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-800 mb-6">Gestion des Commandes</h2>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-amber-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Référence</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Articles</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Statut</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.reference}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.date}</td>
                  <td className="px-6 py-4">
                    {order.articles.map((article, index) => (
                      <div key={index} className="mb-2 last:mb-0">
                        <div>{article.nom} ({article.categorie})</div>
                        <div className="text-xs text-gray-500">
                          Couleur: {article.couleur}, Quantité: {article.quantite}
                        </div>
                        <div className="text-xs text-gray-500">
                          Prix unitaire: {article.prix.toFixed(2)} MAD
                        </div>
                      </div>
                    ))}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.total.toFixed(2)} MAD
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.statut)}`}>
                      {order.statut}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.statut === 'En attente' && (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleConfirmer(order.id)}
                          className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition"
                        >
                          Confirmer
                        </button>
                        <button
                          onClick={() => handleRefuser(order.id)}
                          className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition"
                        >
                          Refuser
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                  Aucune commande à afficher
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;

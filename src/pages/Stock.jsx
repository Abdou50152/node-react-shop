import React, { useState } from 'react';

const Inventory = () => {
  const [articles, setArticles] = useState([
    { 
      id: 1,
      nom: 'Robe été', 
      categorie: 'robe', 
      couleur: 'bleu', 
      stock: 15,
      prix: 539.99,
      // DONT FORGET TO ASK ABOUT URL
      // image_url: '/images/robe-ete.jpg' 
    },
    { 
      id: 2,
      nom: 'Foulard soie', 
      categorie: 'foulard', 
      couleur: 'rouge', 
      stock: 8,
      prix: 299.99,
      // image_url: '/images/foulard-soie.jpg'
    },
    { 
      id: 3,
      nom: 'Ceinture cuir', 
      categorie: 'accessoire', 
      couleur: 'noir', 
      stock: 0,
      prix: 399.99,
      // image_url: '/images/ceinture-cuir.jpg'
    }
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editedStock, setEditedStock] = useState(0);

  const handleEdit = (article) => {
    setEditingId(article.id);
    setEditedStock(article.stock);
  };

  const handleSave = (id) => {
    setArticles(articles.map(article => 
      article.id === id 
        ? { ...article, stock: Number(editedStock) } 
        : article
    ));
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleStockChange = (e) => {
    setEditedStock(e.target.value);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-800 mb-6">Gestion du stock</h2>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-amber-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Article</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Catégorie</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Couleur</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Prix</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {articles.map((article) => (
              <tr key={article.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {article.image_url && (
                      <img 
                        src={article.image_url} 
                        alt={article.nom} 
                        className="h-10 w-10 rounded-full object-cover mr-3" 
                      />
                    )}
                    <div>
                      <div className="text-sm font-medium text-gray-900">{article.nom}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {article.categorie}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                    {article.couleur}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {article.prix.toFixed(2)}MAD
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingId === article.id ? (
                    <input
                      type="number"
                      value={editedStock}
                      onChange={handleStockChange}
                      className="w-20 p-1 border border-gray-300 rounded-md text-center"
                      min="0"
                    />
                  ) : (
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      article.stock > 0 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {article.stock > 0 ? `${article.stock} en stock` : 'Rupture'}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {editingId === article.id ? (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleSave(article.id)}
                        className="px-2 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition"
                      >
                        Valider
                      </button>
                      <button
                        onClick={handleCancel}
                        className="px-2 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 transition"
                      >
                        Annuler
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleEdit(article)}
                      className="px-3 py-1 bg-amber-600 text-white text-xs rounded hover:bg-amber-700 transition"
                    >
                      Modifier
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
import React, { useState } from 'react';
import Button from '../components/Button';
import FormInput from '../components/shared/FormInput';

const Shipping = () => {
  const [villes, setVilles] = useState([
    { ville: 'Casablanca', frais: 40 },
    { ville: 'Marrakech', frais: 20 },
    { ville: 'Tanger', frais: 50 }
  ]);
  const [newVille, setNewVille] = useState('');
  const [newFrais, setNewFrais] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editVille, setEditVille] = useState('');
  const [editFrais, setEditFrais] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (newVille && newFrais) {
      setVilles([...villes, { ville: newVille, frais: Number(newFrais) }]);
      setNewVille('');
      setNewFrais('');
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditVille(villes[index].ville);
    setEditFrais(villes[index].frais);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedVilles = [...villes];
      updatedVilles[editingIndex] = { 
        ville: editVille, 
        frais: Number(editFrais) 
      };
      setVilles(updatedVilles);
      setEditingIndex(null);
    }
  };

  const handleDelete = (index) => {
    setVilles(villes.filter((_, i) => i !== index));
  };

  const cancelEdit = () => {
    setEditingIndex(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-800 mb-6">Frais de livraison</h2>
      
      <form onSubmit={handleAdd} className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
            <input
              type="text"
              value={newVille}
              onChange={(e) => setNewVille(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Frais (MAD)</label>
            <input
              type="number"
              value={newFrais}
              onChange={(e) => setNewFrais(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
              required
            />
          </div>
          <div className="flex items-end">
            <Button type="submit">
              Ajouter
            </Button>
          </div>
        </div>
      </form>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-amber-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Ville</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Frais</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {villes.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={editVille}
                      onChange={(e) => setEditVille(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  ) : (
                    item.ville
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {editingIndex === index ? (
                    <input
                      type="number"
                      value={editFrais}
                      onChange={(e) => setEditFrais(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  ) : (
                    `${item.frais} MAD`
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {editingIndex === index ? (
                    <div className="flex space-x-2">
                      <button
                        onClick={handleUpdate}
                        className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition"
                      >
                        Valider
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="px-3 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 transition"
                      >
                        Annuler
                      </button>
                    </div>
                  ) : (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(index)}
                        className="px-3 py-1 bg-amber-600 text-white text-xs rounded hover:bg-amber-700 transition"
                      >
                        Modifier
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition"
                      >
                        Supprimer
                      </button>
                    </div>
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

export default Shipping;
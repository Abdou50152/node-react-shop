// import React, { useState } from 'react';
// import Button from '../components/Button';
// import FormInput from '../components/shared/FormInput';

// const Articles = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [articles, setArticles] = useState([]);
//   const [formData, setFormData] = useState({
//     nom: '',
//     description: '',
//     prix: '',
//     quantite: '',
//     categorie: 'robe',
//     couleur: '',
//     image_url: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setArticles([...articles, { ...formData, id: Date.now() }]);
//     setFormData({
//       nom: '',
//       description: '',
//       prix: '',
//       quantite: '',
//       categorie: 'robe',
//       couleur: '',
//       image_url: ''
//     });
//     setShowForm(false);
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-amber-800">Articles</h2>
//         <Button onClick={() => setShowForm(!showForm)}>
//           {showForm ? 'Voir la liste' : 'Ajouter un article'}
//         </Button>
//       </div>

//       {showForm ? (
//         <div className="bg-white rounded-lg shadow p-6">
//           <h3 className="text-xl font-semibold text-amber-800 mb-4">Nouvel article</h3>
//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
//                   <input
//                     type="text"
//                     value={formData.nom}
//                     onChange={(e) => setFormData({...formData, nom: e.target.value})}
//                     className="w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
//                     required
//                   />
//                 </div>
                
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//                   <textarea
//                     value={formData.description}
//                     onChange={(e) => setFormData({...formData, description: e.target.value})}
//                     className="w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
//                     rows="3"
//                   />
//                 </div>
                
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Prix (MAD)</label>
//                     <input
//                       type="number"
//                       value={formData.prix}
//                       onChange={(e) => setFormData({...formData, prix: e.target.value})}
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
//                       required
//                     />
//                   </div>
                  
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Quantité</label>
//                     <input
//                       type="number"
//                       value={formData.quantite}
//                       onChange={(e) => setFormData({...formData, quantite: e.target.value})}
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
//                     />
//                   </div>
//                 </div>
//               </div>
              
//               <div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
//                   <select
//                     value={formData.categorie}
//                     onChange={(e) => setFormData({...formData, categorie: e.target.value})}
//                     className="w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
//                   >
//                     <option value="robe">Robe</option>
//                     <option value="foulard">Foulard</option>
//                     <option value="accessoire">Accessoire</option>
//                   </select>
//                 </div>
                
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Couleur</label>
//                   <input
//                     type="text"
//                     value={formData.couleur}
//                     onChange={(e) => setFormData({...formData, couleur: e.target.value})}
//                     className="w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
//                   />
//                 </div>
                
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
//                   <input
//                     type="text"
//                     value={formData.image_url}
//                     onChange={(e) => setFormData({...formData, image_url: e.target.value})}
//                     className="w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
//                   />
//                   {formData.image_url && (
//                     <img src={formData.image_url} alt="Preview" className="mt-2 h-32 object-contain" />
//                   )}
//                 </div>
//               </div>
//             </div>
            
//             <div className="flex justify-end mt-6">
//               <Button type="submit">
//                 Enregistrer l'article
//               </Button>
//             </div>
//           </form>
//         </div>
//       ) : (
//         <div className="bg-white rounded-lg shadow p-6">
//           <h3 className="text-xl font-semibold text-amber-800 mb-4">Liste des articles</h3>
//           {articles.length === 0 ? (
//             <p className="text-gray-500">Aucun article disponible</p>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-amber-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Nom</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Catégorie</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Prix</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Stock</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {articles.map((article) => (
//                     <tr key={article.id}>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center">
//                           {article.image_url && (
//                             <img src={article.image_url} alt={article.nom} className="h-10 w-10 rounded-full mr-3" />
//                           )}
//                           <div>
//                             <div className="text-sm font-medium text-gray-900">{article.nom}</div>
//                             <div className="text-sm text-gray-500">{article.couleur}</div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {article.categorie}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {article.prix}€
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span className={`px-2 py-1 text-xs font-medium rounded-full ${
//                           article.quantite > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//                         }`}>
//                           {article.quantite > 0 ? `${article.quantite} disponible(s)` : 'Rupture'}
//                         </span>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Articles;
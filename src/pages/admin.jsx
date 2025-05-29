import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Dashboard from './Dashboard';
// import Articles from './Articles';
import Shipping from './Livraison';
import Inventory from './Stock';
import Orders from './orders';
import Products from './Products';
import Categories from './Categories';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Déplacer ces fonctions dans le composant Articles si c'est là qu'elles sont utilisées
  // // ou les passer comme props aux composants enfants si nécessaire
  // const fetchArticles = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3000/api/articles');
  //     const articles = await response.json();
  //     return articles;
  //   } catch (error) {
  //     console.error('Erreur:', error);
  //     return [];
  //   }
  // };

  // const addArticle = async (articleData) => {
  //   try {
  //     const response = await fetch('http://localhost:3000/api/articles', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(articleData),
  //     });
  //     const result = await response.json();
  //     return result;
  //   } catch (error) {
  //     console.error('Erreur:', error);
  //     return { error: "Échec de l'ajout de l'article" };
  //   }
  // };

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="max-w-7xl mx-auto p-6">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'products' && <Products />}
        {activeTab === 'categories' && <Categories />}
        {/* {activeTab === 'articles' && <Articles fetchArticles={fetchArticles} addArticle={addArticle} />} */}
        {activeTab === 'livraison' && <Shipping />}
        {activeTab === 'stock' && <Inventory />}
        {activeTab === 'Orders' && <Orders />}
      </main>
    </div>
  );
};

export default Admin;
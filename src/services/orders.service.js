import api from './api';

export const OrdersService = {
  // Récupérer toutes les commandes
  getAllOrders: async () => {
    try {
      const response = await api.get('/orders');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des commandes :', error);
      throw error;
    }
  },

  // Récupérer une commande par ID
  getOrderById: async (id) => {
    try {
      const response = await api.get(`/orders/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération de la commande avec l'ID ${id} :`, error);
      throw error;
    }
  },

  // Créer une nouvelle commande
  createOrder: async (orderData) => {
    try {
      const response = await api.post('/orders', orderData);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création de la commande :', error);
      throw error;
    }
  },

  // Mettre à jour une commande
  updateOrder: async (id, orderData) => {
    try {
      const response = await api.put(`/orders/${id}`, orderData);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de la commande avec l'ID ${id} :`, error);
      throw error;
    }
  },

  // Supprimer une commande
  deleteOrder: async (id) => {
    try {
      const response = await api.delete(`/orders/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la suppression de la commande avec l'ID ${id} :`, error);
      throw error;
    }
  },

  // Confirmer une commande
  confirmOrder: async (id) => {
    try {
      const response = await api.patch(`/orders/${id}/confirm`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la confirmation de la commande avec l'ID ${id} :`, error);
      throw error;
    }
  },

  // Refuser une commande
  refuseOrder: async (id) => {
    try {
      const response = await api.patch(`/orders/${id}/refuse`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors du refus de la commande avec l'ID ${id} :`, error);
      throw error;
    }
  }
};

export default OrdersService;

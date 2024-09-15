import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from '../../config/api'; 

const GoogleCallback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code'); 
    const error = urlParams.get('error');

    if (error) {
      alert('Erreur lors de la connexion avec Google');
      navigate('/login'); 
      return;
    }

    if (code) {
      axios.get(`${api.defaults.baseURL}/auth/google/callback`, {
        params: {
          code: code
        }
      })
      .then(response => {
        const data = response.data;
        if (data.token) {
          localStorage.setItem('token', data.token); 
          navigate('/');
        } else {
          alert('Échec de la connexion Google');
          navigate('/login'); 
        }
      })
      .catch(error => {
        console.error('Erreur lors de la connexion Google:', error);
        alert('Erreur lors de la connexion Google');
        navigate('/login'); 
      });
    } else {
      alert('Code de connexion manquant');
      navigate('/login'); 
    }
  }, [navigate]);

  return <div>Chargement...</div>; 
};

export default GoogleCallback;

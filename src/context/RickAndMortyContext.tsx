import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';

interface Character {
  id: number;
  image: string;
  name: string;
  species: string;
  gender: string;
  location: { name: string };
  origin: { name: string };
}

interface RickAndMortyContextProps {
  characters: Character[];
}

const RickAndMortyContext = createContext<RickAndMortyContextProps | undefined>(undefined);

interface RickAndMortyProviderProps {
  children: ReactNode;
}

export const RickAndMortyProvider: React.FC<RickAndMortyProviderProps> = ({ children }) => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Erro ao obter dados da API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <RickAndMortyContext.Provider value={{ characters }}>
      {children}
    </RickAndMortyContext.Provider>
  );
};

export const useRickAndMorty = (): RickAndMortyContextProps => {
  const context = useContext(RickAndMortyContext);
  if (!context) {
    throw new Error('useRickAndMorty deve ser usado dentro de um RickAndMortyProvider');
  }
  return context;
};

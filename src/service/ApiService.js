import React from 'react';

export const ApiContext = React.createContext();

export class ApiService {
  fetchData = async () => {
    const URL = 'https://www.json-generator.com/api/json/get/cfSynsxYfC';
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error(`Could not fetch ${URL}, status - ${res.status}`)
    } 
    return await res.json()
  }

  getItems = async () => {
    return await this.fetchData()
  }
}

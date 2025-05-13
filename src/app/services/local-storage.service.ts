import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }

  addSearch(search: string, route: string): void {
    let searches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    const exist = searches.some((item: any) => item.search === search);
    if (!exist) {
      if (searches.length >= 5) {
        searches.shift();
      }

      const searchItem = { search, route };
      console.log('Search Name: ', searchItem.search, ' Route: ', searchItem.route);
      searches.push(searchItem);
      localStorage.setItem('recentSearches', JSON.stringify(searches));
    }
  }

  removeSearch(index: number) {
    let searches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    searches.splice(index, 1);
    localStorage.setItem('recentSearches', JSON.stringify(searches));
  }

  removeFavourite(index: number) {
    let favourites = JSON.parse(localStorage.getItem('favouriteSearches') || '[]');
    favourites.splice(index, 1);
    localStorage.setItem('favouriteSearches', JSON.stringify(favourites));
  }

  saveSearch(search: string, route: string): void {
    let favourites = JSON.parse(localStorage.getItem('favouriteSearches') || '[]');
    const favouriteItem = { search, route };
    console.log('Search Name: ', favouriteItem.search, ' Route: ', favouriteItem.route);
    favourites.push(favouriteItem);
    localStorage.setItem('favouriteSearches', JSON.stringify(favourites));
  }

  getSearches(): string[] {
    return JSON.parse(localStorage.getItem('recentSearches') || '[]');
  }
}

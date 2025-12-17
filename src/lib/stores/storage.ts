import { writable } from 'svelte/store';
import { browser } from '$app/environment';


const initialLanguage = browser 
  ? (localStorage.getItem('language') as 'it' | 'en') || 'it'
  : 'it';

export const language = writable<'it' | 'en'>(initialLanguage);
//export const language = writable<'it' | 'en'>('en');

language.subscribe(value => {
  if (browser) {
    localStorage.setItem('language', value);
  }
});
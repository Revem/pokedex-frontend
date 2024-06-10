/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { fontSize: {
      headline: ['1.5rem', '2.25rem'],
      subtitle3: ['0.625rem', '0.875rem'],
      subtitle2: ['0.75rem', '1rem'],
      subtitle1: ['0.875rem', '1.25rem'],
      body1: ['0.875rem', '1rem'],
      body2: ['0.75rem', '1rem'],
      body3: ['0.625rem', '1rem'],
      caption: ['0.5rem', '0.75rem'],
    },
    colors:{
      primary: '#DC0A2D',
      pokemon: {
        bug: '#A7B723',
        dark: '#75574C',
        dragon: '#7038F8',
        electric: '#F9CF30',
        fairy: '#E69EAC',
        fighting: '#C12239',
        fire: '#F57D31',
        flying: '#A891EC',
        ghost: '#70559B',
        grass: '#74CB48',
        ground: '#DEC16B',
        ice: '#9AD6DF',
        normal: '#AAA67F',
        poison: '#A43E9E',
        psychic: '#FB5584',
        rock: '#B69E31',
        steel: '#B7B9D0',
        water: '#6493EB'
      },
      grayscale:{
        dark: '#212121',
        medium: '#666666',
        light: '#E0E0E0',
        background: '#EFEFEF',
        white: '#FFFFFF'
      },
    },
    dropShadow: {
      '2dp': '0 1px 3px rgba(0, 0, 0, 0.20)',
      '6dp': '0 3px 12px rgba(0, 0, 0, 0.20)',
    },
    innerShadow: {
      '2dp': '0 1px 3px rgba(0, 0, 0, 0.25)',
    },
    }
  },
  plugins: [],
}
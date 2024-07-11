import { getConfig } from '@open-cells/core';
import { PageController } from '@open-cells/page-controller';

const {
  appConfig: {
    recipesService: { basePath = undefined} = {},
  } = {},
} = getConfig();


function getFetchUrl(source: string): URL {
  const data = new URL(`${basePath}${source}`);
  return data;
}

async function fetchMeal(): Promise<any> {
  const data = await fetch(getFetchUrl('pokemon?limit=10&offset=0'));
  return data.json();
}

async function getListPokemon(): Promise<any> {
  const listPokemon = await fetchMeal();
  const allData = [];

  for (const element of listPokemon.results) {
      const response = await fetch(getFetchUrl('pokemon/' + element.name));
      const data = await response.json();
      allData.push(data);
  }
  
  console.log(allData);
  return allData;
}
/* HOME */ export const getRandomMeal = async () => getListPokemon();



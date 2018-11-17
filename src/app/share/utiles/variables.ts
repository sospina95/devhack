export const base_url = 'https://rickandmortyapi.com/api/';
export function extractData(res: Response){
  let body = res;
  return body || { };
}
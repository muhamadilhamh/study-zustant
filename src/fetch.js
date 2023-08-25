export async function fetDataList(){
    const url = await fetch('https://pokeapi.co/api/v2/pokemon')
    const response = await url.json()
    return response
}
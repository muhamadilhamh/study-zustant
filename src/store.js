import {create} from "zustand";
import { fetDataList } from "./fetch";


export const useCounterStore = create((set) => (
    {

        number: 123,
        pokemon:[],
        increaseCounterNumber: () => set((state) => ({number: state.number + 1})),
        decreaseConterNumber: () => set((state) => ({number: state.number - 1})),
        distributionConterNumber: () => set((state) => ({number: state.number / 2})),
        multiplicationNumber: () => set((state) => ({number: state.number * 2})),
        fetchData : async () =>
            // await fetch('https://pokeapi.co/api/v2/pokemon')
            // .then(response => response.json())
            // .then(data => set({pokemon: data.results}))
            {
                const checkDAta = await fetDataList()
                // const url = await fetch('https://pokeapi.co/api/v2/pokemon')
                // const response = await url.json()
                set({pokemon: checkDAta.results})
            }
        // fetchData: () => set((state) => ({pokemon: state.response}))
    }
 ))

export default interface DataStore<T> {
    get(dataName : string) : Promise<T>
}

export class AA {
    
}
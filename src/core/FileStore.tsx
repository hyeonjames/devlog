import Axios from 'axios';
import DataStore from './DataStore';

export default class FileStore implements DataStore<string> {
    public async get(dataName: string) {
        const data = await Axios.get(dataName);
        return data.data;
    }
}
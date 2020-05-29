export default class SwapiService {

    _endPoint = 'https://swapi.dev/api';

    async getResource(url) {
        const res = await fetch(`${this._endPoint}${url}`);
        return await res.json()
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results;
    }

    getPerson(id) {
        return this.getResource(`/people/${id}/`)
    }
}

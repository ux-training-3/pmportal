import axios from 'axios'

class InstructorApi {
    constructor() {
        this.apiBase = 'https://pmportal.instructors/api';
    }

    instructors() {
        return {
            fullvirtue: [],
            takaumada: [],
            youandi060219: []
        }
        // return axios.get(`${this.apiBase}/instructors/list/all`)
        //     .then(json => {
        //         return json.data.message;
        //     })
        //     .catch(e => ({ error: e }));
    }

    contents(instructor) {
        if (instructor === 'fullvirtue') {
            return [
                { key: 'Fi2kf8sJH9pjLG'}
            ]
        }

        if (instructor === 'takaumada') {
            return [
                { key: '8ZUwhj8dY2c8jj'},
                { key: 'qcZ486E9NlP6qi'}
            ]
        }

        if (instructor === 'youandi060219') {
            return [
                { key: 'aDgmYwyRQyEXa'}
            ]
        }

        // return axios.get(`${this.apiBase}/instructors/${instructor}/contents`)
        //     .then(json => {
        //         return json.data.message.map(function(element) {
        //             return {
        //                 url: element,
        //                 like: 0
        //             };
        //         });
        //     })
        //     .catch(e => ({ error: e }));
    }
}

const instructorApi = new InstructorApi();

export default instructorApi;
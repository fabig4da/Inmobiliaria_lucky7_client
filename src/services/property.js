import { serialize } from 'object-to-formdata';

const URL = 'https://inmobiliaria-lucky7.herokuapp.com/property';
export const propertyServices = {
    getMany: async() => {
        const response = await fetch(URL, {
            method: 'GET',
            headers: new Headers().set('Content-Type', 'application/json')
        });
        return await response.json();
    },
    getOneById: async(id) => {
        const response = await fetch(`${URL}/${id}`, {
            method: 'GET',
            headers: new Headers().set('Content-Type', 'application/json')
        });
        return await response.json();
    },
    create: async(data) => {
        const headers = new Headers();
        headers.append('Acept', 'multipart/form-data');

        const body = serialize(data);
        data.images[0] && body.append('images', data.images[0], data.images[0].name);

        console.log(data.images[0]);
        const response = await fetch(URL, {
            method: 'POST',
            body: body
        });
        return await response.json();
    },
    update: async(id, data) => {
        const response = await fetch(`${URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    },
    delete: async(id) => {
        const response = await fetch(`${URL}/${id}`, {
            method: 'DELETE',
            headers: new Headers().set('Content-Type', 'application/json')
        });
        return await response.json();
    }
}
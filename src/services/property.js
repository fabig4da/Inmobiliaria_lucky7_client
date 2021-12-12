import { serialize } from 'object-to-formdata';

const URL = 'http://localhost:4000/property';
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
        const body = serialize(data);
        // body.append('images', data.images);
        console.log(body);
        const response = await fetch(URL, {
            method: 'POST',
            body,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
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
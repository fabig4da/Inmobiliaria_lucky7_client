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
        const response = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    },
    update: async(id, data) => {
        const response = await fetch(`${URL}/${id}`, {
            method: 'PUT',
            headers: new Headers().set('Content-Type', 'Application/Json'),
            body: JSON.stringify(data)
        });
        return await response.json();
    },
    delete: async(id) => {
        const response = await fetch(`${URL}/${id}`, {
            method: 'DELETE',
            headers: new Headers().set('Content-Type', 'Application/Json')
        });
        return await response.json();
    }
}
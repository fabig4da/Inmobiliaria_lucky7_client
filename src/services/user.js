const URL = 'http://localhost:4000/user';
export const userServices = {
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
    create: async(user) => {
        const response = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    },
    update: async(id, user) => {
        const response = await fetch(`${URL}/${id}`, {
            method: 'PUT',
            headers: new Headers().set('Content-Type', 'Application/Json'),
            body: JSON.stringify(user)
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
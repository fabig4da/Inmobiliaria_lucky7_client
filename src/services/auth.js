const URL = 'https://inmobiliaria-lucky7.herokuapp.com/auth';
export const authServices = {
    signIn: async(user) => {
        const response = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }
}
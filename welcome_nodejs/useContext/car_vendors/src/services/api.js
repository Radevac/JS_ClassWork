export const getCars = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/cars');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching cars:', error);
        return [];
    }
};

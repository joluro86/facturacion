export const invoiceData = {
    id: 1,
    name: "Componentes de PC",
    client: {
        name: 'Andres',
        lastname: 'Doe',
        address: {
            country: 'Colombia',
            city: 'Medellin',
            street: 'Americas',
            number: 44
        }
    },
        company:
        {
            name: 'Joluro',
            fiscalnumber: 1027941053,

        },
        items: [
            {
                id: 1,
                product: 'CPU-1',
                price: 5000,
                quantity: 10
            },
            {
                id: 2,
                product: 'Mousse',
                price: 6000,
                quantity: 5
            },
            {
                id: 3,
                product: 'Cargador',
                price: 4000,
                quantity: 20
            },
        ]    
}
let products = [
    {id: 1, title: 'Broccoli',isFruit: false},
    {id: 2, title: 'Orange',isFruit: true},
    {id: 3, title: 'Strawberry',isFruit: true},
    {id: 4, title: 'Spinach',isFruit: false},
    
]

export function Products(){
    const listItems = products.map(product =>
        <li 
            key={product.id}
            style={{color: product.isFruit ? 'red':'green' }}
        >
            {product.title}
        </li>
    )
    return(
        <div style={{textAlign: 'center'}}>
            <h1>Fruits and Vegetables list</h1>
            <ul style={{listStylePosition: 'inside', fontSize: '25px'}}>
                {listItems}
            </ul>
        </div>
    )
}
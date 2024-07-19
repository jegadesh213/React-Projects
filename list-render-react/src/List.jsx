function List(props)
{
    
    // fruits.sort((a,b) => b.name.localeCompare(a.name))
    // fruits.sort((a,b) => a.name.localeCompare(b.name))
    // fruits.sort((a,b) => a.calories - b.calories)
    // fruits.sort((a,b) => b.calories - a.calories)

    // let filteredFruit = fruits.filter(fruit => fruit.calories < 50)


    let itemList = props.listItems;
    let cat = props.category;

    let listItems = itemList.map(fruit =>
        <li key={fruit.id}>{fruit.name.toUpperCase()}:&nbsp;<b>{fruit.calories}</b> </li>
    )

    return( <>
            <h1 className="category">{cat}</h1>
            <ol className="items">{listItems}</ol>
            </>
    )
}

export default List
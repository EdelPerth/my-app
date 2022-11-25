function FoodListItem (props) {
    return (
        <div>
            {
                props.foodData.isNew && (<h1>NEW</h1>)
            }
           
             <h3>
                {props.foodData.title} is {props.foodData.description} and I rate it {props.foodData.rating} out of 5.
            </h3>
             <p> Have i tried it?  {props.foodData.haveTried}</p>
            </div>
    )
}

export default FoodListItem

function FoodListItem(props) {
    return (
        <div>
            <h3>
                {props.food.title} are my favourite foods {props.food.rated}
            </h3>
                <p> Have I eaten this often {props.food.haveTried}? 
                </p>
        </div>
    )
}
export default FoodListItem
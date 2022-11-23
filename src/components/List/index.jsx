import foodData from "../../data/food.json"
import foodListItem> from "../Food"


function FoodList() {
    return (
        foodData.food.map ((food) => {
            return (
                <FoodListItem foodData ={food}/>
            )      
        })
    )
}

export default FoodList
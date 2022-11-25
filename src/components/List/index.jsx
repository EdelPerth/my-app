import foodData from "../../data/food.json"
import FoodListItem from "../Food"

function FoodList () {
    return (
        foodData.food.map((food)  =>{
            return (
                <FoodListItem foodData={food}/>                
                )
        })
    )
}

export default FoodList

// Line 8 is called a refactor ie <FoodListItem foodData= {food}/> 
// making our code more extensible and readable
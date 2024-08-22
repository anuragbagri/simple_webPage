import styled from "styled-components"
import { BASE_URL } from "../App"

const SearchResult = ({data}) => {
  return (
    <FoodCardContainer>
    <FoodCards>
    {
    data?.map((food) => 
    <FoodCard key={food.name}>
    <div className="food_image">
        <img src={BASE_URL + food.image}/> 
    </div>



    </FoodCard>)
    }
    </FoodCards>
    </FoodCardContainer>
  )
}

export default SearchResult


const FoodCardContainer = styled.section`
height : 200%;
background-image : url('/images/bg.png');
background-size : cover;
width : 100%;
`


const FoodCards =styled.div``


const FoodCard = styled.div``

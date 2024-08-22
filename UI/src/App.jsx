import { useEffect, useState } from "react"
import styled from "styled-components"
import SearchResult from "./components/SearchResult"
export const BASE_URL = "http://localhost:3000"




function App() {

  const [data, setData] =useState(null)
  const [err ,setErr] = useState(null)


 useEffect(() => {
  const fetchData = async () => {
  try {
  const response = await fetch(BASE_URL)
  const jsondata = await response.json()
  setData(jsondata)
  }
  catch (error) {
    setErr(error)
  }
 }
 fetchData();
}
,[])



 if(err) return <div> {err} </div> 




  return (
    <Container>
     <TopSection>
      <div className="logo">
        <img src="/images/logo.svg" alt="logo"/>
      </div>

      <div className="search">
       <input 
       placeholder="search food"
       type="text"/>
      </div>
     </TopSection>

     <FilterContainer>
    <Button>All</Button>
    <Button>BreakFast</Button>
    <Button>Lunch</Button>
    <Button>Dinner</Button> 
     </FilterContainer>

     <SearchResult data ={data}/>
    </Container>
  )
}

export default App

const Container = styled.div`
max-width : 1200px;
margin : 0 auto ;
height : 34vh;
`
const TopSection = styled.section`
min-height : 140px;
display : flex;
justify-content  : space-between ;
padding:16px;

.search {
input {
background-color : transparent ;
border : 1px solid red;
color : white;
border-radius : 5px;
height : 40px;
font-size : 16px;
padding : 0px 10px;
}
}
`

const FilterContainer = styled.section`
display : flex;
justify-content : center;
gap: 12px;
padding-bottom : 25px;
`

const Button = styled.button`
background : #ff4343;
border-radius: 5px;
padding : 6px 12px;
color : white;
border : none;
`


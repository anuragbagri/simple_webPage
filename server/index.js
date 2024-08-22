import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();

const app = express()

app.use(cors())

app.get("/" , (req, res) => {
    const foodData = [
        {
          name: "Boilded Egg",
          price: 10,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/egg.png",
          type: "breakfast",
        },
        {
          name: "RAMEN",
          price: 25,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/ramen.png",
          type: "lunch",
        },
        {
          name: "GRILLED CHICKEN",
          price: 45,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/chicken.png",
          type: "dinner",
        },
        {
          name: "CAKE",
          price: 18,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/cake.png",
          type: "breakfast",
        },
        {
          name: "BURGER",
          price: 23,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/burger.png",
          type: "lunch",
        },
        {
          name: "PANCAKE",
          price: 25,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/pancake.png",
          type: "dinner",
        },
      ];
      res.send(foodData)
})

app.listen(process.env.PORT , (req, res) => {
    console.log(`app is run on the server : ${process.env.PORT}`)
})




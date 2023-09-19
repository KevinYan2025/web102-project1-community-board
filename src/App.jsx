import { useState } from 'react'
import Card from './component/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        <img src='https://www.theindianwire.com/wp-content/uploads/2019/12/most-popular-programming-languages.jpg'/>
        <h1>Place To Learn Code</h1>
      </div>
      <Card image='https://miro.medium.com/v2/resize:fit:1400/format:webp/1*E6kIASA3vTLcDfStSpKyog.png' url='https://www.w3schools.com' name='W3School' buttonName='view more'/>
      <Card image='https://www.developerdrive.com/wp-content/uploads/2019/02/freecodecamp.jpg'url='https://www.freecodecamp.org/' name='FreeCodeCamp' buttonName='view more'/>
      <Card image='https://i.pinimg.com/564x/47/ea/cb/47eacbf25597e39bf2754466de3a720c.jpg' url='https://www.geeksforgeeks.org/' name='GeekForGeek' buttonName='view more'/>
      <Card image='https://www.aleksandrhovhannisyan.com/assets/images/trKBjzMAwQ-1567.webp' url='https://leetcode.com/problemset/all/' name='Leetcode' buttonName='view more'/>
      <Card image='https://wisdomfuel.com/wp-content/uploads/2020/10/CodecademyMainPage-1024x490.png' url='https://www.codecademy.com/' name='Codecademy' buttonName='view more'/>
      <Card image='https://yourdigitalaid.com/wp-content/uploads/2022/09/one-account-of-Udemy.jpg' url='https://www.udemy.com/' name='Udemy' buttonName='view more'/>
      <Card image='https://www.classcentral.com/report/wp-content/uploads/2022/06/3.-Full-Stack-Open_-Deep-Dive-Into-Modern-Web-Development-University-of-Helsinki.png' url='https://fullstackopen.com/en/' name='Full-Stack-Open' buttonName='view more'/>
      <Card image='https://websitehurdles.com/wp-content/uploads/2023/06/Best-HTML-CSS-Youtube-Channel.webp' url='https://www.youtube.com/' name='Youtube' buttonName='view more'/>
      <Card image='https://images.squarespace-cdn.com/content/v1/62a11265062f0f31b32bd0b5/7679632d-a4cd-47ba-96fa-531c2667d0d6/Coursera+Plus+-+IT+Career+Skills+%281200x628%29.png' url='https://www.coursera.org/' name='Coursera' buttonName='view more'/>
      <Card image='https://lh3.googleusercontent.com/fKMi8HLvZTVsfCHiWHeGnbRve2XxOWZRy-uIEXSPg92LYzYfPkCAAjH4wnYTq4tFq58tWwkotPpP-eH1lY0mpxud4H0y5jtUM1CVLsG0fHoiyyylBS9j7ptIDxUHo_BFtev7mtmd3SBW98PpfpXkl6DQW93x9POuwNbAHG08OHuNqHUvT-CAvdiRl6M1Sg' url='https://code.org/' name='Code.org' buttonName='view more'/>
      <Card image='https://devopscube.com/wp-content/uploads/2023/03/image.png.webp' url='https://www.edx.org/' name='Edx' buttonName='view more'/>

    </>
  )
}

export default App

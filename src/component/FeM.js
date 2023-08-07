import React, { useEffect, useState } from 'react'
import male from '../images/whiteArea.jpg'
import blackMale from '../images/blackArea.jpg'
import female from '../images/female.jpg'
import whiteArea1 from '../images/whiteArea1.png'
import whiteArea12 from '../images/whiteArea12.png'
import whiteArea123 from '../images/whiteArea123.png'
import whiteArea1234 from '../images/whiteArea1234.png'
import whiteArea4 from '../images/whiteArea4.png'
import whiteArea5 from '../images/whiteArea5.png'
import whiteArea6 from '../images/whiteArea6.png'
import whiteArea56 from '../images/whiteArea56.png'
import blackArea1 from '../images/blackArea1.png'
import blackArea12 from '../images/blackArea12.png'
import blackArea123 from '../images/blackArea123.png'
import blackArea56 from '../images/blackArea56.png'
import blackArea126 from '../images/blackArea126.png'
import female1 from '../images/female1.png'
import female12 from '../images/female12.png'

const FeM = () => {

  const [img, setimg] = useState(male)
  const [setmfe, setsetmfe] = useState("male")
  const [ethnicity, setEthnicity] = useState("other")
  const [area, setArea] = useState("area1")
  const setimgState = () => {
    if (setmfe == "male") {
      if (ethnicity == "black") {
        if (area == "area1") {
          setimg(blackArea1)
        }
        else if (area == "area12") {
          setimg(blackArea12)
        }
        else if (area == "area123") {
          setimg(blackArea123)
        }
        else if (area == "area126") {
          setimg(blackArea126)
        }
        else if (area == "area56") {
          setimg(blackArea56)
        }
      } else {
        if (area == "area1") {
          setimg(whiteArea1)
        }
        else if (area == "area12") {
          setimg(whiteArea12)
        }
        else if (area == "area123") {
          setimg(whiteArea123)
        }
        else if (area == "area1234") {
          setimg(whiteArea1234)
        }
        else if (area == "area4") {
          setimg(whiteArea4)
        }
        else if (area == "area5") {
          setimg(whiteArea5)
        }
        else if (area == "area6") {
          setimg(whiteArea6)
        }
        else if (area == "area56") {
          setimg(whiteArea56)
        }
      }
    } else if (setmfe == "female") {
      if (area == "area12") {
        setimg(female12)
      }
      else {
        setimg(female1)
      }
    }
  }
  const [cal, setCal] = useState(0)

  const calculations =()=>{
    if(area=="area1"){
      setCal(1900)
    }
    else if (area=="area12"){
      setCal(5000)
    }
    else if (area=="area123"){
      setCal(6750)
    }
    else if (area=="area1234"){
      setCal(6965)
    }
    else if (area=="area4"){
      setCal(2999)
    }
    else if (area=="area5"){
      setCal(4485)
    }
    else if (area=="area6"){
      setCal(2999)
    }
    else if (area=="area56"){
      setCal(5625)
    }
  }

  useEffect(() => {

  }, [setmfe, ethnicity])

  return (
    <>
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around", alignItems:"center"}}>

      <form>

        <div>

          <label>Male or Female</label>
          <br />
          <select onClick={setimgState} onChange={(e) => setsetmfe(e.target.value)}>
            <option value="male">male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <br />
        <br />
        <br />

        <div>

          <label >Your Age</label>
          <br />
          <select>
            <option>18 - 25</option>
            <option>25 - 35</option>
            <option>35 - 45</option>
            <option>45 - 55</option>
            <option>55 - 65</option>
            <option>65 - 75</option>
            <option>75 - 85</option>
            <option>85 - 90</option>
          </select>
        </div>
        <br />
        <br />
        <br />
        <div>

          <label>Your Ethnicity</label>
          <br />
          <select onClick={setimgState} onChange={(e) => setEthnicity(e.target.value)}>
            <option value="white">White/Caucasian</option>
            <option value="asian">Asian</option>
            <option value="mixed">Mixed</option>
            <option value="black">Black/African/Caribbean</option>
            <option value="other">other</option>
          </select>
        </div>
        <br />
        <br />
        <br />
        <div>

          <label>Please Choose Area/s</label>
          <br />
          {
            (setmfe == "female") ?
            <select onClick={setimgState} onChange={(e) => setArea(e.target.value)}>
                <option value="area1">Area 1</option>
                <option value="area12">Area 1+2</option>
              </select>
              :
              
              <div>

                {(ethnicity == "black") ? <select onClick={setimgState} onChange={(e) => setArea(e.target.value)}>
                  <option value="area1">Area 1</option>
                  <option value="area12">Area 1+2</option>
                  <option value="area123">Area 1+2+3</option>
                  <option value="area126">Area 1+2+6</option>
                  <option value="area56">Area 5+6</option>
                </select>
                  :
                  <select onClick={setimgState} onChange={(e) => setArea(e.target.value)}>
                    <option value="area1">Area 1</option>
                    <option value="area12">Area 1+2</option>
                    <option value="area123">Area 1+2+3</option>
                    <option value="area1234">Area 1+2+3+4</option>
                    <option value="area4">Area 4</option>
                    <option value="area5">Area 5</option>
                    <option value="area6">Area 6</option>
                    <option value="area56">Area 5+6</option>
                  </select>
                }
              </div>
          }

        </div>
        <br />
        <button type="button" onClick={calculations}>Estimation</button>
        <br />
        <br />

        <img src={img} />

      </form>


      <div>
          <h1>Your Estimate</h1>
        
          <h1>$ {cal} </h1>
      </div>
              </div>
    </>
  )
}

export default FeM

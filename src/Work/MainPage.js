import React, { useState, useEffect, useRef } from 'react'
import { Line, Bar, Doughnut, Pie } from 'react-chartjs-2'; 
import { pythonPay, pythonPop, pythonPayA, pythonPopA, 
         javaPay, javaPop, javaPayA, javaPopA, 
         csharpPay, csharpPop, csharpPayA, csharpPopA, 
         javascriptPay, javascriptPop, javascriptPayA, javascriptPopA } from "./Data.js"; 
import '../Main.scss'; 
import gsap from 'gsap'; 
import Language from './Language.js';

function MainPage() { 

    //useRef 
    const leftNav = useRef(null); 
    const rightSide = useRef(null); 

    const one = useRef(null); 
    const two = useRef(null); 
    const three = useRef(null); 
    const four = useRef(null); 
    const five = useRef(null); 
    //usestate 
    const [errorOpacity, setErrorOpacity] = useState(0); 

        //language state 
    const [tempfirstlan, setTempFirstLan] = useState("");
    const [tempsecondlan, setTempSecondLan] = useState(""); 
    const [firstlanguage, setFirstlanguage] = useState(""); 
    const [secondlanguage, setSecondlanguage] = useState(""); 

        //page state 
    const [pageState, setPageState] = useState("compare"); 
    const [payPopularityState, setPayPopularityState] = useState("Pay"); 

    //window size 
    const size = useWindowSize();
    
    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined, 
            height: undefined, 
        }); 

        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth, 
                    height: window.innerHeight, 
                }); 
            } 

            window.addEventListener("resize", handleResize); 
            handleResize(); 

            return () => window.removeEventListener("resize", handleResize); 
        }, []); 

        return windowSize; 
    }

    const handleSubmit = e => {
        e.preventDefault(); 

        if (tempfirstlan === tempsecondlan || tempfirstlan === "" || tempsecondlan === "") {
            setErrorOpacity(1); 
            return 
        }

        //first case 
        if (tempfirstlan === "Python") {
            //final language state 
            setFirstlanguage(tempfirstlan); 
            setErrorOpacity(0); 
        }
    
        if (tempfirstlan === "Java") {
            //final language state 
            setFirstlanguage(tempfirstlan); 
            setErrorOpacity(0); 
        }

        if (tempfirstlan === "C#") {
            //final language state 
            setFirstlanguage(tempfirstlan); 
            setErrorOpacity(0); 
        }

        if (tempfirstlan === "Javascript") {
            //final language state 
            setFirstlanguage(tempfirstlan); 
            setErrorOpacity(0); 
        }

        //second case 
        if (tempsecondlan === "Python") {
            //final language state 
            setSecondlanguage(tempsecondlan); 
            setErrorOpacity(0); 
        }
    
        if (tempsecondlan === "Java") {
            //final language state 
            setSecondlanguage(tempsecondlan); 
            setErrorOpacity(0); 
        }

        if (tempsecondlan === "C#") {
            //final language state 
            setSecondlanguage(tempsecondlan); 
            setErrorOpacity(0); 
        }

        if (tempsecondlan === "Javascript") {
            //final language state 
            setSecondlanguage(tempsecondlan); 
            setErrorOpacity(0); 
        }
    }

    //handle first language 
    const firstLanChange = e => {
        e.preventDefault(); 
        setTempFirstLan(e.target.value); 
    }

    //handle second language 
    const secondLanChange = e => {
        e.preventDefault(); 
        setTempSecondLan(e.target.value); 
    }

    //line graph 
    const Ldata = {
        labels: ["2012", "2014", "2016", "2018", "2020"], 
        datasets: [
            {
                label: firstlanguage,  
                data: firstlanguage === "Python" ? pythonPay : 
                      firstlanguage === "Java" ? javaPay : 
                      firstlanguage === "C#" ? csharpPay : 
                      firstlanguage === "Javascript" ? javascriptPay : [], 
                borderColor: "rgb(144, 19, 247)", 
                backgroundColor: "rgba(144, 19, 247, 0.4)", 
                pointBackgroundColor: "rgb(144, 19, 247)", 
                pointBorderColor: "rgb(144, 19, 247)", 
            }, 
            {
                label: secondlanguage, 
                data: secondlanguage === "Python" ? pythonPay : 
                      secondlanguage === "Java" ? javaPay : 
                      secondlanguage === "C#" ? csharpPay : 
                      secondlanguage === "Javascript" ? javascriptPay : [], 
                borderColor: "rgb(5, 255, 255)", 
                backgroundColor: "rgba(5, 255, 255, 0.4)", 
                pointBackgroundColor: "rgb(5, 255, 255)", 
                pointBorderColor: "rgb(5, 255, 255)", 
            }
        ]
    }
    const Loptions = {
        title: {
            display: true, 
            text: 'Pay', 
        }, 
        scales: {
            yAxes: [
                {
                    //ticks: { min: 60000, max: 130000, stepSize: 17500}
                    // ticks: { min: 60000, max: 130000, stepSize: 40000 }
                    ticks: { min: 60000, max: 130000, stepSize: 38000}
                }
            ]
        }
    }

    //bar graph 
    const Bdata = {
        labels: ["2012", "2014", "2016", "2018", "2020"], 
        datasets: [
            {
                label: firstlanguage, 
                data: firstlanguage === "Python" ? pythonPop : 
                      firstlanguage === "Java" ? javaPop : 
                      firstlanguage === "C#" ? csharpPop : 
                      firstlanguage === "Javascript" ? javascriptPop : [],  
                borderColor: "rgb(144, 19, 247)", 
                backgroundColor: "rgba(144, 19, 247)", 
                pointBackgroundColor: "rgb(144, 19, 247)", 
                pointBorderColor: "rgb(144, 19, 247)", 
            }, 
            {
                label: secondlanguage, 
                data: secondlanguage === "Python" ? pythonPop : 
                      secondlanguage === "Java" ? javaPop : 
                      secondlanguage === "C#" ? csharpPop : 
                      secondlanguage === "Javascript" ? javascriptPop : [],  
                borderColor: "rgb(5, 255, 255)", 
                backgroundColor: "rgba(5, 255, 255)", 
                pointBackgroundColor: "rgb(5, 255, 255)", 
                pointBorderColor: "rgb(5, 255, 255)", 
            }
        ]
    }
    const Boptions = {
        title: {
            display: true, 
            text: 'Popularity', 
        }, 
        scales: {
            yAxes: [
                {
                    ticks: { min: 8000, max: 35000, stepSize: 12000}
                }
            ]
        }
    }

    //donut graph 
    const Ddata = {
        labels: [firstlanguage, secondlanguage],
        datasets: [
          {
            label: 'Sales 2019 (M)',
            data: [firstlanguage === "Python" ? Math.round(pythonPayA) : 
                   firstlanguage === "Java" ? Math.round(javaPayA) : 
                   firstlanguage === "C#" ? Math.round(csharpPayA): 
                   firstlanguage === "Javascript" ? Math.round(javascriptPayA) : [], 

                   secondlanguage === "Python" ? Math.round(pythonPayA) : 
                   secondlanguage === "Java" ? Math.round(javaPayA) : 
                   secondlanguage === "C#" ? Math.round(csharpPayA) : 
                   secondlanguage === "Javascript" ? Math.round(javascriptPayA) : []],
            borderColor: [
              'rgb(144, 19, 247)',
              'rgb(5, 255, 255)',
            ],
            backgroundColor: [
              'rgba(144, 19, 247, 0.4)',
              'rgba(5, 255, 255, 0.4)'
            ]
          }
        ]
      }
    const Doptions = {
        title: {
          display: true,
          text: 'Pay'
        },
      }

    //circle graph 
    const Cdata = {
        labels: [firstlanguage, secondlanguage],
        datasets: [
          {
            label: 'Sales 2019 (M)',
            data: [firstlanguage === "Python" ? Math.round(pythonPopA) : 
                   firstlanguage === "Java" ? Math.round(javaPopA) : 
                   firstlanguage === "C#" ? Math.round(csharpPopA): 
                   firstlanguage === "Javascript" ? Math.round(javascriptPopA) : [], 

                   secondlanguage === "Python" ? Math.round(pythonPopA) : 
                   secondlanguage === "Java" ? Math.round(javaPopA) : 
                   secondlanguage === "C#" ? Math.round(csharpPopA) : 
                   secondlanguage === "Javascript" ? Math.round(javascriptPopA) : []],
            borderColor: [
              'rgb(144, 19, 247)',
              'rgb(5, 255, 255)',
            ],
            backgroundColor: [
              'rgba(144, 19, 247, 0.4)',
              'rgba(5, 255, 255, 0.4)'
            ]
          }
        ]
      }
    const Coptions = {
        title: {
          display: true,
          text: 'Popularity'
        },
      }

      //useEffect 
      useEffect(() => { 
            if (size.width <= 1024) {
                console.log("less than"); 
                gsap.fromTo(rightSide.current, { opacity: 0 }, { opacity: 1, delay: 3, duration: 1.5 }); 
                gsap.fromTo(leftNav.current, { marginBottom: '100px' }, { margin: '0px', delay: 'none', duration: 0.5 }); 

                gsap.fromTo(one.current, { opacity: 0, marginBottom: '100px' }, { opacity: 1, marginBottom: '0px', delay: 1.25, duration: 0.25 }); 
                gsap.fromTo(two.current, { opacity: 0, marginBottom: '100px' }, { opacity: 1, marginBottom: '0px', delay: 1.40, duration: 0.25 }); 
                gsap.fromTo(three.current, { opacity: 0, marginBottom: '100px' }, { opacity: 1, marginBottom: '0px', delay: 1.55, duration: 0.25 }); 
                gsap.fromTo(four.current, { opacity: 0, marginBottom: '100px' }, { opacity: 1, marginBottom: '0px', delay: 1.70, duration: 0.25 }); 
                gsap.fromTo(five.current, { opacity: 0, marginBottom: '100px' }, { opacity: 1, marginBottom: '0px', delay: 1.85, duration: 0.25 }); 
            } 

            else if (size.width > 1024) { 
                console.log("more than"); 
                gsap.fromTo(rightSide.current, { opacity: 0 }, { opacity: 1, delay: 3, duration: 1.5 }); 
                gsap.fromTo(leftNav.current, { marginRight: '100px' }, { margin: '0px', delay: 'none', duration: 0.5 }); 

                gsap.fromTo(one.current, { opacity: 0, marginRight: '100px' }, { opacity: 1, marginRight: '0px', delay: 1.25, duration: 0.25 }); 
                gsap.fromTo(two.current, { opacity: 0, marginRight: '100px' }, { opacity: 1, marginRight: '0px', delay: 1.40, duration: 0.25 }); 
                gsap.fromTo(three.current, { opacity: 0, marginRight: '100px' }, { opacity: 1, marginRight: '0px', delay: 1.55, duration: 0.25 }); 
                gsap.fromTo(four.current, { opacity: 0, marginRight: '100px' }, { opacity: 1, marginRight: '0px', delay: 1.70, duration: 0.25 }); 
                gsap.fromTo(five.current, { opacity: 0, marginRight: '100px' }, { opacity: 1, marginRight: '0px', delay: 1.85, duration: 0.25 }); 
            }
      }, [size.width])

    //functions 
      const handlePageStateCompare = () => {
          setPageState("compare"); 
      }

    const handlePageStatePython = () => {
        setPageState("python"); 
    }

    const handlePageStateJava = () => {
        setPageState("java"); 
    }

    const handlePageStateC = () => {
        setPageState("c#"); 
    }

    const handlePageStateJavascript = () => {
        setPageState("javascript"); 
    } 

    const handlePayClick = () => {
        setPayPopularityState("Pay"); 
    } 
    
    const handlePopularityClick = () => {
        setPayPopularityState("Popularity"); 
    } 

    const datasetKeyProvider=()=>{ 
        return btoa(Math.random()).substring(0,12)
    } 

    return (
        <div className="page-container">

            <div className="left-side-container">
                <div className="left-side-box" ref={leftNav}>
                
                    <div ref={one} className="other-button" onClick={handlePageStateCompare} style={{backgroundColor: pageState === "compare" ? "rgb(113, 21, 188)" : '', opacity: 0}}>
                        <img  alt="" id="globe" src={process.env.PUBLIC_URL + "/globe.png"} /> 
                    </div>
                    
                    <div ref={two} className="other-button" onClick={handlePageStatePython} style={{backgroundColor: pageState === "python" ? "rgb(113, 21, 188)" : '', opacity: 0}}>
                        <img alt="" id="python" src={process.env.PUBLIC_URL + "/python.png"} /> 
                    </div>
                    
                    <div ref={three} className="other-button" onClick={handlePageStateC} style={{backgroundColor: pageState === "c#" ? "rgb(113, 21, 188)" : '', opacity: 0}}>
                        <img className="invert-filter" id="csharp-java" alt=""src={process.env.PUBLIC_URL + "/c-sharp1.png"} /> 
                    </div> 

                    <div ref={four} className="other-button" onClick={handlePageStateJava} style={{backgroundColor: pageState === "java" ? "rgb(113, 21, 188)" : '', opacity: 0}}>
                        <img alt="" id="csharp-java" src={process.env.PUBLIC_URL + "/java.png"} /> 
                    </div>

                    <div ref={five} className="other-button" onClick={handlePageStateJavascript} style={{backgroundColor: pageState === "javascript" ? "rgb(113, 21, 188)" : '', opacity: 0}}>
                        <img className="invert-filter" id="javascript" alt="" src={process.env.PUBLIC_URL + "/javascript.png"} /> 
                    </div>

                </div>
            </div>

            {
                pageState !== "compare" ? 

                    <Language language={pageState} /> 

                : 

                    <div className="right-side-container" ref={rightSide}>

                        <form className="input-container" onSubmit={handleSubmit}>

                            <div className="input-stuff-container">

                                <div className="color-select-container" style={{display: 'flex', alignItems: 'center'}}>
                                    <div className="left-select"></div>
                                    <select onChange={firstLanChange} >
                                        <optgroup>
                                            <option defaultValue>Choose</option>
                                            <option value="Java">Java</option>
                                            <option value="Python">Python</option>
                                            <option value="C#">C#</option>
                                            <option value="Javascript">Javascript</option>
                                        </optgroup>
                                    </select>
                                </div>

                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <select onChange={secondLanChange}>
                                        <optgroup>
                                            <option defaultValue>Choose</option>
                                            <option value="Java">Java</option>
                                            <option value="Python">Python</option>
                                            <option value="C#">C#</option>
                                            <option value="Javascript">Javascript</option>
                                        </optgroup>
                                    </select>
                                    <div className="right-select"></div>
                                </div>
                            </div>

                            <button className="main-button">Go</button>

                        </form>

                        <div id="red-error" style={{opacity: errorOpacity, color: "red"}}>You cannot input the same language</div> 

                        <div className="pay-popularity-click-container">
                            <div className="content">
                                <div id="right-border" onClick={handlePayClick}
                                    style={{backgroundColor: payPopularityState === "Pay" ? "rgb(144, 19, 247)" : "white", 
                                            color: payPopularityState === "Pay" ? "white" : "rgb(144, 19, 247)"}}>
                                    Pay
                                </div> 
                                <div id="left-border" onClick={handlePopularityClick}
                                    style={{backgroundColor: payPopularityState !== "Pay" ? "rgb(144, 19, 247)" : "white", 
                                            color: payPopularityState !== "Pay" ? "white" : "rgb(144, 19, 247"}}>
                                    Popularity
                                </div>
                            </div>
                        </div>
                    
                        <div className="graph-container">
                            {
                                payPopularityState === "Pay" ? 

                                <div className="pay-graph-container">
                                    <div className="donut-div">
                                        <Doughnut data={Ddata} options={Doptions} datasetKeyProvider={datasetKeyProvider} />
                                    </div>
                                    <div className="line-div">
                                        <Line data={Ldata} options={Loptions} datasetKeyProvider={datasetKeyProvider} />
                                    </div>
                                </div> 

                                : 

                                <div className="popularity-graph-container">
                                    <div className="bar-div">
                                        <Bar data={Bdata} options={Boptions} datasetKeyProvider={datasetKeyProvider} /> 
                                    </div> 
                                    <div className="pie-div">
                                        <Pie data={Cdata} options={Coptions} datasetKeyProvider={datasetKeyProvider} />
                                    </div> 
                                </div>
                            } 
                        </div>
                </div>
            }

        </div>
    )
}

export default MainPage

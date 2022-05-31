import React, { useEffect, useRef } from 'react'; 
import '../Language.scss'; 
import { Line, Bar } from 'react-chartjs-2'; 
import { pythonPay, pythonPop, pythonsummary, pythoninfo, 
         csharpPay, csharpPop, csharpsummary, csharpinfo, 
         javaPay, javaPop, javasummary, javainfo, 
         javascriptPay, javascriptPop, javascriptsummary, javascriptinfo } from './Data.js'; 
import gsap from 'gsap'; 

function Language(props) { 

    const pageAnim = useRef(null); 

    //python data 
    const pythonAdata = { 
        labels: ["2012", "2014", "2016", "2018", "2020"], 
        datasets: [
            {
                label: "Python",  
                data: pythonPay, 
                borderColor: "rgb(144, 19, 247)", 
                backgroundColor: "rgba(144, 19, 247, 0.4)", 
                pointBackgroundColor: "rgb(144, 19, 247)", 
                pointBorderColor: "rgb(144, 19, 247)", 
            }, 
        ]
    } 

    const pythonAoptions = { 
        title: {
            display: true, 
            text: 'Pay', 
        }, 
        scales: {
            yAxes: [
                {
                    ticks: { min: 60000, max: 130000, stepSize: 30000}
                }
            ]
        }
    } 

    const pythonBdata = { 
        labels: ["2012", "2014", "2016", "2018", "2020"], 
        datasets: [
            {
                label: "Python", 
                data: pythonPop,  
                borderColor: "rgb(5, 255, 255)", 
                backgroundColor: "rgba(5, 255, 255)", 
                pointBackgroundColor: "rgb(5, 255, 255)", 
                pointBorderColor: "rgb(5, 255, 255)", 
            }
        ]
    } 

    const pythonBoptions = { 
        title: {
            display: true, 
            text: 'Popularity', 
        }, 
        scales: {
            yAxes: [
                {
                    ticks: { min: 8000, max: 35000, stepSize: 15000}
                }
            ]
        }
    }
    
    //c# data 
    const cAdata = { 
        labels: ["2012", "2014", "2016", "2018", "2020"], 
        datasets: [
            {
                label: "C#",  
                data: csharpPay, 
                borderColor: "rgb(144, 19, 247)", 
                backgroundColor: "rgba(144, 19, 247, 0.4)", 
                pointBackgroundColor: "rgb(144, 19, 247)", 
                pointBorderColor: "rgb(144, 19, 247)", 
            }, 
        ]
    } 

    const cAoptions = { 
        title: {
            display: true, 
            text: 'Pay', 
        }, 
        scales: {
            yAxes: [
                {
                    ticks: { min: 60000, max: 130000, stepSize: 30000}
                }
            ]
        }
    } 

    const cBdata = { 
        labels: ["2012", "2014", "2016", "2018", "2020"], 
        datasets: [
            {
                label: "C#", 
                data: csharpPop,  
                borderColor: "rgb(5, 255, 255)", 
                backgroundColor: "rgba(5, 255, 255)", 
                pointBackgroundColor: "rgb(5, 255, 255)", 
                pointBorderColor: "rgb(5, 255, 255)", 
            }
        ]
    } 

    const cBoptions = { 
        title: {
            display: true, 
            text: 'Popularity', 
        }, 
        scales: {
            yAxes: [
                {
                    ticks: { min: 8000, max: 35000, stepSize: 15000}
                }
            ]
        }
    }

    //java data 
    const javaAdata = { 
        labels: ["2012", "2014", "2016", "2018", "2020"], 
        datasets: [
            {
                label: "Java",  
                data: javaPay, 
                borderColor: "rgb(144, 19, 247)", 
                backgroundColor: "rgba(144, 19, 247, 0.4)", 
                pointBackgroundColor: "rgb(144, 19, 247)", 
                pointBorderColor: "rgb(144, 19, 247)", 
            }, 
        ]
    } 

    const javaAoptions = { 
        title: {
            display: true, 
            text: 'Pay', 
        }, 
        scales: {
            yAxes: [
                {
                    ticks: { min: 60000, max: 130000, stepSize: 30000}
                }
            ]
        }
    } 

    const javaBdata = { 
        labels: ["2012", "2014", "2016", "2018", "2020"], 
        datasets: [
            {
                label: "Java", 
                data: javaPop,  
                borderColor: "rgb(5, 255, 255)", 
                backgroundColor: "rgba(5, 255, 255)", 
                pointBackgroundColor: "rgb(5, 255, 255)", 
                pointBorderColor: "rgb(5, 255, 255)", 
            }
        ]
    } 

    const javaBoptions = { 
        title: {
            display: true, 
            text: 'Popularity', 
        }, 
        scales: {
            yAxes: [
                {
                    ticks: { min: 8000, max: 35000, stepSize: 15000}
                }
            ]
        }
    }

    //javascript data 
    const javascriptAdata = { 
        labels: ["2012", "2014", "2016", "2018", "2020"], 
        datasets: [
            {
                label: "Javascript",  
                data: javascriptPay, 
                borderColor: "rgb(144, 19, 247)", 
                backgroundColor: "rgba(144, 19, 247, 0.4)", 
                pointBackgroundColor: "rgb(144, 19, 247)", 
                pointBorderColor: "rgb(144, 19, 247)", 
            }, 
        ]
    } 

    const javascriptAoptions = { 
        title: {
            display: true, 
            text: 'Pay', 
        }, 
        scales: {
            yAxes: [
                {
                    ticks: { min: 60000, max: 130000, stepSize: 30000}
                }
            ]
        }
    } 

    const javascriptBdata = { 
        labels: ["2012", "2014", "2016", "2018", "2020"], 
        datasets: [
            {
                label: "Javascript", 
                data: javascriptPop,  
                borderColor: "rgb(5, 255, 255)", 
                backgroundColor: "rgba(5, 255, 255)", 
                pointBackgroundColor: "rgb(5, 255, 255)", 
                pointBorderColor: "rgb(5, 255, 255)", 
            }
        ]
    } 

    const javascriptBoptions = { 
        title: {
            display: true, 
            text: 'Popularity', 
        }, 
        scales: {
            yAxes: [
                {
                    ticks: { min: 8000, max: 35000, stepSize: 15000}
                }
            ]
        }
    } 

    //useEffect 
    useEffect(() => {
        gsap.fromTo(pageAnim.current, { opacity: 0 }, { opacity: 1, delay: 0.5 }); 
    }); 

  return (
    <div className="lan-page-container" ref={pageAnim}>
        <div className="right-side-container">

            <h1>{props.language}</h1>

            <div className="top-p-thing">
                {
                    props.language === "python" ? 

                        pythonsummary

                    : 

                    props.language === "c#" ? 

                        csharpsummary

                    : 

                    props.language === "java" ? 

                        javasummary

                    : 

                    props.language === "javascript" ? 

                        javascriptsummary 

                    : 

                    pythonsummary
                }
            </div> 

            <div className="graph-div">
                <div className="line-stuff">
                {
                    props.language === "python" ? 

                        <Line data={pythonAdata} options={pythonAoptions} /> 

                    : 

                    props.language === "c#" ? 

                        <Line data={cAdata} options={cAoptions} /> 

                    : 

                    props.language === "java" ? 

                        <Line data={javaAdata} options={javaAoptions} /> 

                    : 

                    props.language === "javascript" ? 

                        <Line data={javascriptAdata} options={javascriptAoptions} /> 

                    : 

                    <Line data={pythonAdata} options={pythonAoptions} />   
                }
                </div> 
                <p>
                {
                    props.language === "python" ? 

                        pythoninfo[0]

                    : 

                    props.language === "c#" ? 

                        csharpinfo[0]

                    : 

                    props.language === "java" ? 

                        javainfo[0]

                    : 

                    props.language === "javascript" ? 

                        javascriptinfo[0] 

                    : 

                    pythoninfo[0] 
                }
                </p>
            </div> 

            <div className="graph-div">
                <div className="line-stuff"> 
                {
                    props.language === "python" ? 

                        <Bar data={pythonBdata} options={pythonBoptions} /> 

                    : 

                    props.language === "c#" ? 

                        <Bar data={cBdata} options={cBoptions} /> 

                    : 

                    props.language === "java" ? 

                        <Bar data={javaBdata} options={javaBoptions} /> 

                    : 

                    props.language === "javascript" ? 

                        <Bar data={javascriptBdata} options={javascriptBoptions} /> 

                    : 

                    <Bar data={pythonBdata} options={pythonBoptions} />   
                }
                </div> 
                <p>
                {
                    props.language === "python" ? 

                        pythoninfo[1]

                    : 

                    props.language === "c#" ? 

                        csharpinfo[1]

                    : 

                    props.language === "java" ? 

                        javainfo[1]

                    : 

                    props.language === "javascript" ? 

                        javascriptinfo[1] 

                    : 

                    pythoninfo[1] 
                }
                </p>
            </div>

        </div>
    </div>
  )
}

export default Language
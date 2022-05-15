// import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';
import Score from '../database/score.json'
import { addColor, getNameAndScore } from '../utils';
function ChartView( ) {
    const nameArr = getNameAndScore(Score).name;
    const scoreArr = getNameAndScore(Score).score;

    // const [scoreData, setScoreData] = useState([]);
    const canvasDom = useRef(null);
    useEffect(() => {
        // setScoreData(Score);
        // console.log(scoreData)
        const ctx = canvasDom.current.getContext("2d");
        const myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: nameArr,
                
                datasets: [
                    {
                        data: scoreArr,
                        borderWidth: 1,
                        barPercentage: 0.7,
                    }
                ]
            },
            options: {
                backgroundColor: "black"
            }
        })

        return () => {
            myChart.destroy()
        }
        
    },[])

    return (
        <><div>ChartView Component</div>
            <canvas ref={canvasDom} height="180"></canvas>
        </>
    )
}

export default ChartView;
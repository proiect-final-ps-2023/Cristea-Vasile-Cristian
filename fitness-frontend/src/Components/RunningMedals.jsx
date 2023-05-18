import React from 'react'
import '../Styles/Medals.css'
import box1 from '../Icons/box1.png'
import box2 from '../Icons/box2.png'
import box3 from '../Icons/box3.png'
import running1 from '../Icons/runner1.png'
import running2 from '../Icons/runner2.png'
import running3 from '../Icons/runner3.png'
import Medal from './Medal'
import { useEffect } from 'react'
import GetRunningAchievementsApi from '../Api/GetRunningAchievementsApi'
import { useState } from 'react'

const RunningMedals = () => {
    const [runningMedals, setRunnigMedals] = useState([]);

    const getRunningAchievements = async () => {
        const response = await GetRunningAchievementsApi((JSON.parse(sessionStorage.getItem("user"))).id);
        setRunnigMedals(response)
    }

    useEffect(() => {
        getRunningAchievements()
    }, [])

    const getBronzeImg = () => {
        if(runningMedals.map(c => c.medal).includes("BRONZE")) {
            return running3;
        } else {
            return box3;
        }
    }

    const getSilverImg = () => {
        if(runningMedals.map(c => c.medal).includes("SILVER")) {
            return running2;
        } else {
            return box2;
        }
    }

    const getGoldImg = () => {
        if(runningMedals.map(c => c.medal).includes("GOLD")) {
            return running1;
        } else {
            return box1;
        }
    }

    return (
        <div className='medals-container'>
            <h1 className='medals-header'>Running</h1>
            <div>
                <Medal img={getBronzeImg()} text={'Single run of 5 km'} achieved={runningMedals.map(c => c.medal).includes("BRONZE")}/>
                <Medal img={getSilverImg()} text={'Single run of 10 km'} achieved={runningMedals.map(c => c.medal).includes("SILVER")}/>
                <Medal img={getGoldImg()} text={'Single run of 50 km'} achieved={runningMedals.map(c => c.medal).includes("GOLD")}/>
            </div>
        </div>
    )
}

export default RunningMedals
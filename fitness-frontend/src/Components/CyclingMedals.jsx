import React, { useState } from 'react'
import '../Styles/Medals.css'
import box1 from '../Icons/box1.png'
import box2 from '../Icons/box2.png'
import box3 from '../Icons/box3.png'
import cycling1 from '../Icons/bicycle1.png'
import cycling2 from '../Icons/bicycle2.png'
import cycling3 from '../Icons/bicycle3.png'
import Medal from './Medal'
import GetCyclingAchievementsApi from '../Api/GetCyclingAchievementsApi'
import { useEffect } from 'react'

const CyclingMedals = () => {
    const [cyclingMedals, setCyclingMedals] = useState([]);
    const getRunningAchievements = async () => {
        const response = await GetCyclingAchievementsApi((JSON.parse(sessionStorage.getItem("user"))).id);
        setCyclingMedals(response)
    }

    useEffect(() => {
        getRunningAchievements()
    }, [])

    const getBronzeImg = () => {
        if(cyclingMedals.map(c => c.medal).includes("BRONZE")) {
            return cycling3;
        } else {
            return box3;
        }
    }

    const getSilverImg = () => {
        if(cyclingMedals.map(c => c.medal).includes("SILVER")) {
            return cycling2;
        } else {
            return box2;
        }
    }

    const getGoldImg = () => {
        if(cyclingMedals.map(c => c.medal).includes("GOLD")) {
            return cycling1;
        } else {
            return box1;
        }
    }

    return (
        <div className='medals-container'>
            <h1 className='medals-header'>Cycling</h1>
            <div>
                <Medal img={getBronzeImg()} text={'Single ride of 10 km'} achieved={cyclingMedals.map(c => c.medal).includes("BRONZE")}/>
                <Medal img={getSilverImg()} text={'Single ride of 50 km'} achieved={cyclingMedals.map(c => c.medal).includes("SILVER")}/>
                <Medal img={getGoldImg()} text={'Single ride of 100 km'} achieved={cyclingMedals.map(c => c.medal).includes("GOLD")}/>
            </div>
        </div>
    )
}

export default CyclingMedals
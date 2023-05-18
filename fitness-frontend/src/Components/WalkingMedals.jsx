import React, { useState } from 'react'
import '../Styles/Medals.css'
import box1 from '../Icons/box1.png'
import box2 from '../Icons/box2.png'
import box3 from '../Icons/box3.png'
import walking1 from '../Icons/walking1.png'
import walking2 from '../Icons/walking2.png'
import walking3 from '../Icons/bicycle3.png'
import Medal from './Medal'
import GetWalkingAchievements from '../Api/GetWalkingAchievements'
import { useEffect } from 'react'

const WalkingMedals = () => {
    const [walkingMedals, setWalkingMedals] = useState([]);

    const getWalkingAchievements = async () => {
        const response = await GetWalkingAchievements((JSON.parse(sessionStorage.getItem("user"))).id);
        setWalkingMedals(response)
    }

    useEffect(() => {
        getWalkingAchievements()
    }, [])

    const getBronzeImg = () => {
        if(walkingMedals.map(c => c.medal).includes("BRONZE")) {
            return walking3;
        } else {
            return box3;
        }
    }

    const getSilverImg = () => {
        if(walkingMedals.map(c => c.medal).includes("SILVER")) {
            return walking3;
        } else {
            return box2;
        }
    }

    const getGoldImg = () => {
        if(walkingMedals.map(c => c.medal).includes("GOLD")) {
            return walking3;
        } else {
            return box1;
        }
    }
    return (
        <div className='medals-container'>
            <h1 className='medals-header'>Walking</h1>
            <div>
                <Medal img={getBronzeImg()} text={'Total of 100 km'} achieved={walkingMedals.map(c => c.medal).includes("BRONZE")}/>
                <Medal img={getSilverImg()} text={'Total of 500 km'} achieved={walkingMedals.map(c => c.medal).includes("SILVER")}/>
                <Medal img={getGoldImg()} text={'Total of 1000 km'} achieved={walkingMedals.map(c => c.medal).includes("GOLD")}/>
            </div>
        </div>
    )
}

export default WalkingMedals
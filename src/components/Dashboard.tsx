import { useEffect, useState } from 'react';
import { Profile } from './Profile';
import { TimeCard, TimeCardRes, View } from './TimeCard';
import { TimeSelector } from './TimeSelector';
import { fetchTimeTrackingData } from '../services/api';

export function Dashboard () {
    const [ timecards , setTimeCards ] = useState<TimeCardRes[]>([])
    const [ view , setView ] = useState<View>('daily')
    const user = {firstName: 'Jeremy', lastName: 'Robson'}

    function select(value: View) {
        setView(value)
    }

    async function getTimeTracking() {
        setTimeCards(await fetchTimeTrackingData())
    }

    useEffect(() => {
        getTimeTracking()
    }, [])

    return  <div className="dashboard-container">
                <div className='profile-time-selector-container box'>
                    <Profile user={user} />
                    <TimeSelector onChange={select}/>
                </div>
                <div className='time-card-container'>
                    {timecards.map((timecard, index) => <TimeCard key={index} timecard={timecard} view={view}/>)}
                </div>
            </div>
}
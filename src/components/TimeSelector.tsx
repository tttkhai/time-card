import { useState } from 'react';
import { View } from './TimeCard';

interface TimeSelectorProps {
    onChange: (value: View) => void;
}

export function TimeSelector ({ onChange }: TimeSelectorProps) {
    const [ views , setViews ] = useState(['daily', 'weekly', 'monthly'])

    return <div className='time-selector'>
            {views.map((value, index) => <div className='time-selector-text' key={index} onClick={() => onChange(value as View)}> {value}</div>
            )} 
        </div>
}
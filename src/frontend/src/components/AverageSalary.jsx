import { useEffect, useState } from 'react';

function AverageSalary({ filteredData }) {
    if (!filteredData) return <div>Loading</div>
    const [averageSalary, setAverageSalary] = useState('')
    const [minimumSalary, setMinimumSalary] = useState(10000000)
    const [maximumSalary, setMaximumSalary] = useState(0)

    const calculateSalaries = (filteredData) => {
        let salaries = []
        let sum = 0;
        for (let item = 0; item < filteredData.length; item++) {
            if (filteredData[item]?.['salary.annualRate']) {
                sum = sum + filteredData[item]?.['salary.annualRate']
                salaries.push(filteredData[item]?.['salary.annualRate'])
                if (filteredData[item]['salary.annualRate'] > maximumSalary) setMaximumSalary(filteredData[item]?.['salary.annualRate'])
                if (filteredData[item]['salary.annualRate'] < minimumSalary) {
                    setMinimumSalary(filteredData[item]['salary.annualRate'])
                }
            }
        }
        setAverageSalary(sum / salaries.length)
    }

    const calculateMin = (filteredData) => {
        for (let item = 0; item < filteredData.length; item++) {
            if (item === 0 && filteredData[item]['salary.annualRate']) setMinimumSalary(filteredData[item]['salary.annualRate'])
        }
    }

    useEffect(() => {
        if (filteredData) {
            calculateSalaries(filteredData)
            calculateMin(filteredData)
        }
    }, [filteredData])
    return (
        <>
            <div>Average salary: {averageSalary ? '$' + Math.round(averageSalary) : 'unavailable'}</div>
            <div>Minimum salary: {minimumSalary ? '$' + Math.round(minimumSalary) : 'unavailable'}</div>
            <div>Maximum salary: {maximumSalary ? '$' + Math.round(maximumSalary) : 'unavailable'}</div>
        </>
    )
}

export default AverageSalary


import { useEffect, useState } from 'react';
import GraphIndex from './BarGraph/Index';
function AverageSalary({ filteredData, title }) {
    if (!filteredData) return <div>Loading</div>
    const [averageSalary, setAverageSalary] = useState('')
    const [minimumSalary, setMinimumSalary] = useState(1000000)
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
            <GraphIndex graphData={[minimumSalary, averageSalary, maximumSalary]} title={title} />
        </>
    )
}

export default AverageSalary


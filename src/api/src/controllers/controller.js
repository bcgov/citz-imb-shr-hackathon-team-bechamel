/**
 * Echo endpoint
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
import * as rawData from '../../../../data/flatTestData.json'
import fs from 'fs'

const data = []
for (let i = 0; i < Object.keys(rawData).length; i++) {
    data.push(rawData[i])
}

const getData = (req, res) => {
    const json = req.body
    res.send(data)
}

const postData = (req, res) => {
    const json = req.body
    res.json(json)
}

const filterDataByParam = (req, res) => {
    const searchCategory = req.params.searchCategory
    const searchFilter = req.params.searchFilter
    const response = []
    for (let item of data) {
        if (item && Object.keys(item).includes(searchCategory) && item[searchCategory].toLowerCase().includes(searchFilter.toLowerCase())) {
            response.push(item)
        }
    }
    res.send(response)
}

const getFilteredData = (req, res) => {
    const positionTitle = req.params.positionTitle || 'analyst'

    const filterData = (searchCategory, searchFilter, data) => {
        const response = []
        for (let item of data) {
            if (item && Object.keys(item).includes(searchCategory) && item[searchCategory].toLowerCase().includes(searchFilter.toLowerCase())) {
                response.push(item)
            }
        }
        return response
    }

    const firstFilter = filterData('position.title', positionTitle, data)
    const secondFilter = filterData('position.classification', 'band', firstFilter)

    let response = secondFilter

    res.send(response)
}

const controller = {
    getData,
    postData,
    filterDataByParam,
    getFilteredData
}

export default controller
/**
 * Echo endpoint
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
import * as data from '../../../../data/flatTestData.json'
import fs from 'fs'

const getData = (req, res) => {
    const json = req.body
    res.json(data)
}

const postData = (req, res) => {
    const json = req.body
    res.json(json)
}
const controller = {
    getData,
    postData
}

export default controller
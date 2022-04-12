import jwt from "jsonwebtoken"
import { NextApiRequest, NextApiResponse } from "next"

const KEY = 'adsfsdakfbsda,fsdfsa'


export default function (req, res) {




    if (!req.body) {
        res.statuscode = 404
        res.send('error')
        return
    }

    const { username, password } = req.body
    console.log(jwt.sign({ username , admin:true}, KEY));



    console.log(req.body);
    res.json({
        // token: jwt.sign({ username , admin:true}, KEY)
        token: 'sadfasdfsdafadsf'
    })


}
const express = require('express');
const router = express.Router();

const DBHelper = require('../utils/DBHelper');



// 测试
router.get('/test', (req, res) => {
    let type = req.query.type;
    let page = req.query.page;
    let pageSize = req.query.pageSize;

    let resultObj = {
        totalNumber: 0,
        types: [{ typeName: "全部", actived: "choosed" }],
        data: []
    };

    let sqlStr1 = `SELECT COUNT(id) FROM blogs WHERE keyWord LIKE '%${type}%'`;
    let conn1 = new DBHelper().getConn();
    conn1.query(sqlStr1, "", (err, result) => {
        if (err) {
            res.send(resultObj);
            return;
        } else {
            resultObj.totalNumber = result[0]['COUNT(id)'];

            let sqlStr2 = `select keyWord from blogs`;
            let conn2 = new DBHelper().getConn();
            conn2.query(sqlStr2, "", (err, result) => {
                if (err) {
                    res.send(resultObj);
                    return;
                } else {
                    let typeArr = [];
                    result.forEach(ele => {
                        ele.keyWord.split(",").forEach(ele2 => {
                            typeArr.push(ele2);
                        })
                    });
                    Array.from(new Set(typeArr)).forEach(ele => {
                        if (ele != type) {
                            resultObj.types.push({ typeName: ele, actived: "" });
                        } else {
                            resultObj.types.push({ typeName: ele, actived: "choosed" });
                            resultObj.types[0].actived = "";
                        }
                    })


                    let sqlStr3 = `select * from blogs WHERE keyWord LIKE '%${type}%' ORDER BY createDate DESC limit ${(page-1)*pageSize},${pageSize}`;
                    let conn3 = new DBHelper().getConn();
                    conn3.query(sqlStr3, "", (err, result) => {
                        if (err) {
                            res.send(resultObj);
                            return;
                        } else {
                            resultObj.data = result;
                            res.send(resultObj)
                        }
                    })
                    conn3.end();

                }
            })
            conn2.end();

        }
    });
    conn1.end();
});



// 获取总页数
router.get('/getTotalPage', (req, res) => {
    let type = req.query.type;
    // console.log(type);
    let sqlStr = `select createDate,keyWord from blogs WHERE keyWord LIKE '%${type}%'`;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, "", (err, result) => {
        if (err) {
            res.json(err);
        } else {
            // console.log(result);
            res.send(result);
        }
    });
    conn.end();
});

// 获取数据
router.get('/getBlogs', (req, res) => {
    let page = req.query.page;
    let type = req.query.type;
    let pageSize = req.query.pageSize;
    // console.log(type);
    let sqlStr = `select * from blogs WHERE keyWord LIKE '%${type}%' ORDER BY createDate DESC limit ${(page-1)*pageSize},${pageSize}`;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, "", (err, result) => {
        if (err) {
            res.json(err);
        } else {
            // console.log(result);
            res.send(result);
        }
    });
    conn.end();
});

// 获取文章内容
router.get('/getArticle', (req, res) => {
    let id = req.query.id;
    let sqlStr = `select * from blogs where id = ${id}`;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, "", (err, result) => {
        if (err) {
            res.json(err);
        } else {
            // console.log(result);
            res.send(result);
        }
    });
    conn.end();
});

// 更新观看次数
router.get('/changeWatchTimes', (req, res) => {
    let id = req.query.id;
    let watchTimes = req.query.watchTimes;
    let sqlStr = `update blogs set watchTimes = ${watchTimes} where id = ${id}`;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, "", (err, result) => {
        if (err) {
            res.json(err);
        } else {
            // console.log(result);
            res.send(result);
        }
    });
    conn.end();
});

// 更新点赞数
router.get('/ilike', (req, res) => {
    let id = req.query.id;
    let like = req.query.like;
    let sqlStr = `update blogs set ilike = ${like} where id = ${id}`;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, "", (err, result) => {
        if (err) {
            res.json(err);
        } else {
            // console.log(result);
            res.send(result);
        }
    });
    conn.end();
});

// 存储博客
router.get('/saveBlogs', (req, res) => {
    let createDate = req.query.createDate;
    let title = req.query.title;
    let content = req.query.content;
    let sqlStr = `INSERT INTO blogs(createDate,title ,content) values ('${createDate}','${title}','${content}');`;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, "", (err, result) => {
        if (err) {
            res.json(err);
        } else {
            // console.log(result);
            res.send(result);
        }
    });
    conn.end();
});

module.exports = router;
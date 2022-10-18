const router = require("express").Router();
const Test = require("../models/Test")

const testENV = process.env.TEST

router.get("/", (req, res, next) => {
  res.json(testENV);
});

router.get("/test", (req, res, next) => {
  res.json("Hallo from backend");
});

router.get("/test2", (req, res, next) => {
  res.json("Hallo from backend 2");
});

router.post("/test-post", (req, res, next) => {
  Test.create({
    test: "Hallo Jonas"
  })
  .then(createdTest => {
    console.log(createdTest);
  res.status(200).json({createdTest})
  })
  .catch(err => {
    next(err)
  })
})

// router.post("/test-post", (req, res ,next) => {
//   res.json("Hallo from backend post (post req)");
// })

router.get("/all-tests", (req, res, next) => {
  Test.find()
  .then(foundTests => {
    res.status(200).json({message:"Hallo from backend all tests", foundTests});
  })
  .catch(err => {
    res.status(200).json("Nichts gefunden");
    console.log(err);
  })
  
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;

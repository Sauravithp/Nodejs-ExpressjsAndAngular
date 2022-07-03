const express=require("express");
const router=express.Router();
const jobSearchController=require("../controller/jobsearchController")


router.route("").get(jobSearchController.getAll)
.post(jobSearchController.add);

router.route("/count").get(jobSearchController.getTotalJobCount);

router.route("/search/:title").get(jobSearchController.getByTitle);

router.route("/geoSearch").get(jobSearchController.geoSearch);

router.route("/:id")
.get(jobSearchController.getById)
.delete(jobSearchController.deleteById)
.put(jobSearchController.fullUpdate)
.patch(jobSearchController.partialUpdate);

module.exports=router;
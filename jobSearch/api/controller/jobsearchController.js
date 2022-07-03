const mongoose = require("mongoose");
const JOBSEARCH = mongoose.model("JobSearch");


const getAll = function (req, res) {
    console.log("inside getAll");
    const response = {
        status: 200,
        messahe: ''
    }

    let offset = 0;
    let count = 0

    if (!req.query.offset && !req.query.count) {
        console.log("Pagination data not found");
        res.status(500).json({ 'message': 'Pagination data not found' });
        return;
    } else {
        offset = req.query.offset;
        count = req.query.count;
        JOBSEARCH.find().skip(offset).limit(count)
            .then((jobs) => {
                console.log(jobs);
                fillResponse(response, 200, jobs)
            })
            .catch((err) => fillResponse(response, 500, err))
            .finally(() => sendResponse(response, res));
    }

}

const add = function (req, res) {

    const newJob = JOBSEARCH(req.body);

    const response = {
        status: 200,
        message: ''
    }
    if (!req.body) {
        console.log("issue in req body");
        res.status(500).json({ 'message': 'Issue in req body' });
        return;
    } else {
        newJob.postDate=Date.now();
        JOBSEARCH.create(newJob)
            .then((result) => fillResponse(response, 200, result))
            .catch((err) => fillResponse(response, 500, err))
            .finally(() => sendResponse(response, res));
    }


}

const getById = function (req, res) {
    const id = req.params.id;
    const response = {
        status: 200,
        message: ''
    }

    if (!mongoose.isValidObjectId(id)) {
        console.log("invalid id");
        res.status(500).json({ 'message': "invalid id" });
        return;
    } else {
        JOBSEARCH.findById(id).then((job) => {
            if (!job) {
                fillResponse(response, 404, "Content not found")
            } else {
                fillResponse(response, 200, job);
            }
        }).catch((err) => fillResponse(response, 500, err)).finally(() => sendResponse(response, res));

    }
}

const getByTitle = function (req, res) {
    const title = req.params.title;
    const response = {
        status: 200,
        message: ''
    }

    JOBSEARCH.find({ 'title': title }).then((job) => {
        if (!job) {
            fillResponse(response, 404, "Content not found")
        } else {
            fillResponse(response, 200, job[0]);
        }
    }).catch((err) => fillResponse(response, 500, err)).finally(() => sendResponse(response, res));


}

const deleteById = function (req, res) {

    const id = req.params.id;
    const response = {
        status: 200,
        message: ''
    }

    if (!mongoose.isValidObjectId(id)) {
        console.log("invalid delete id");
        res.status(500).json({ 'message': 'Invalid delete id' });
        return;
    } else {
        JOBSEARCH.findByIdAndDelete(id)
            .then(result => fillResponse(response, 200, result))
            .catch((err) => fillResponse(response, 500, err))
            .finally(() => sendResponse(response, res));

    }

}

const fullUpdate = function (req, res) {

    const id = req.params.id;

    const response = {
        status: 200,
        meesage: ""
    }

    if (!mongoose.isValidObjectId(id)) {
        console.log("Invalid job id");
        res.status(500).json({ "message": "Invalid job id" });
        return;
    } else if (!req.body) {
        console.log("Request Body invalid");
        res.status(500).json({ "message": "Invlid request body" });
        return;
    } else {
        JOBSEARCH.findById(id).exec(function (err, job) {

            if (err) {
                console.log(err);
                fillResponse(response, 500, err);
            } else {
                job.title = req.body.title;
                job.experience = req.body.experience;
                job.salary = req.body.salary;
                job.description = req.body.description;
                job.postDate = req.body.postDate;
                job.skill = req.body.skill;
                job.save(function (err, response) {
                    if (err) {
                        fillResponse(response, 500, err);
                    } else {
                        fillResponse(response, 200, response);
                        sendResponse(response, res);
                    }
                })

            }
            if (response.status != 200) {
                sendResponse(response, res);
            }
        })

    }


}

const partialUpdate = function (req, res) {

    const id = req.params.id;

    const response = {
        status: 200,
        message: ""
    }

    if (!mongoose.isValidObjectId(id)) {
        console.log("Invalid id");
        res.status(500).json({ "message": "Invalid id" });
        return;
    } else if (!req.body) {
        console.log("Invalid request body");
        res.status(500).json({ 'message': "Invalid request body" });
    } else {

        JOBSEARCH.findById(id).exec(function (err, job) {
            if (err) {
                console.log(err);
                fillResponse(response, 500, err);
            } else {
                JOBSEARCH.findById(id).exec(function (err, job) {
                    if (err) {
                        console.log(err);
                        fillResponse(response, 500, err);
                    } else {
                        if (req.body.title) {
                            job.title = req.body.title;
                        }
                        if (req.body.experience) {
                            job.experience = req.body.experience;
                        }
                        if (req.body.salary) {
                            job.salary = req.body.salary;
                        }
                        if (req.body.description) {
                            job.description = req.body.description;
                        }
                        if (req.body.skill) {
                            job.skill = req.body.skill
                        }
                        if (req.body.postDate) {
                            job.postDate = req.body.postDate;
                        }
                        job.save(function (err, updatedJob) {
                            if (err) {
                                console.log(err);
                                fillResponse(response, 500, err);
                            }
                            fillResponse(response, 200, updatedJob);
                            sendResponse(response, res);
                        });
                    }
                    if (response.status != 200) {
                        sendResponse(response, res)
                    }
                });
            }
        });

    }
}

const geoSearch = function (req, res) {

    console.log("Geo search controller");
    const response = {
        status: 200,
        message: ""
    }
    let offset = 0;
    let count = 0;
    let lat = 0;
    let lng = 0;


    if (!req.query.offset && !req.query.count) {
        console.log("offset/count.lat/lng missing");
        res.status(500).json("offset/count/lat/lng missing");
        return;
    } else {
        offset = req.query.offset;
        count = req.query.count;
        console.log(req.query.lat, req.query.lng);
        lat = parseFloat(req.query.lat);
        lng = parseFloat(req.query.lng);

        const point = {
            type: 'Point',
            coordinates: [lat, lng]
        }

        const query = {
            'location.coordinates': {
                $near:
                {
                    $geometry: point,
                    $maxDistance: 1000,
                    $minDistance: 0
                }
            }
        }

        JOBSEARCH.find(query).skip(offset).limit(count)
            .then((jobs) => {
                if (jobs.length == 0) {
                    fillResponse(response, 404, "Job not found");
                } else {
                    fillResponse(response, 200, jobs)
                }
            }
            )
            .catch((err) => fillResponse(response, 500, err))
            .finally(() => sendResponse(response, res));
    }



}

const getTotalJobCount = function (req, res) {

    const response = {
        status: 200,
        message: ''
    }

    JOBSEARCH.find().count()
        .then(count => fillResponse(response, 200, count))
        .catch((err) => fillResponse(response, 505, err))
        .finally(() => sendResponse(response, res));
}

const fillResponse = function (response, status, message) {
    console.log(message);
    response.status = status;
    response.message = message;
}

const sendResponse = function (response, res) {
    res.status(response.status).json(response.message);
}

module.exports = {
    getAll, add, getById, deleteById, fullUpdate, partialUpdate, geoSearch, getTotalJobCount, getByTitle
}
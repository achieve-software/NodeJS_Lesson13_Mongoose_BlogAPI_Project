"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const router = require('express').Router()

// Call Controllers:
const {BlogCategory,  BlogPost } = require('../controllers/blogController')

// ------------------------------------------
// BlogPost
// ------------------------------------------
router.route('/post')
    .get(BlogCategory.list)
    .post(BlogCategory.create)

router.route('/post/:postId')
    .get(BlogCategory.read)
    .put(BlogCategory.update)
    .delete(BlogCategory.delete)



    router.route('/post')
    .get(BlogPost.list)
    .post(BlogPost.create)

router.route('/post/:postId')
    .get(BlogPost.read)
    .put(BlogPost.update)
    .delete(BlogPost.delete)

module.exports = router
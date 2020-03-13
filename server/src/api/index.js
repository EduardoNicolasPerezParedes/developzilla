const express = require('express');
const rest_router = express.Router();
const user_router = require('./components/user');
const auth_router = require('./components/auth');
const course_router = require('./components/course');
const news_router = require('./components/news')
const message_router = require('./components/message');
const event_router = require('./components/event');
const file_router = require('./components/file');

rest_router.use('/user', user_router);
rest_router.use('/auth', auth_router);
rest_router.use('/news',news_router);
rest_router.use('/course', course_router);
rest_router.use('/message', message_router);
rest_router.use('/event', event_router);
rest_router.use('/file', file_router);

module.exports = rest_router;
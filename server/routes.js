'use stricy';
import express from 'express';
import indexController from '../controllers/index';
import genreController from '../controllers/genre-movies';
import detailController from '../controllers/detail';
import ReactEngine from 'react-engine';

let router = express.Router();

// add our app routes
router.get('/', indexController);
router.get('/genre/:id/movies', genreController);
router.get('/movie/:id', detailController);

router.use(function(err, req, res, next) {
  console.error(err);

  // http://expressjs.com/en/guide/error-handling.html
  if (res.headersSent) {
    return next(err);
  }

  if (err._type && err._type === ReactEngine.reactRouterServerErrors.MATCH_REDIRECT) {
    return res.redirect(302, err.redirectLocation);
  }
  else if (err._type && err._type === ReactEngine.reactRouterServerErrors.MATCH_NOT_FOUND) {
    return res.status(404).render(req.url);
  }
  else {
    // for ReactEngine.reactRouterServerErrors.MATCH_INTERNAL_ERROR or
    // any other error we just send the error message back
    return res.status(500).render('500.jsx', {
      err: {
        message: err.message,
        stack: err.stack
      }
    });
  }
});

export default router;

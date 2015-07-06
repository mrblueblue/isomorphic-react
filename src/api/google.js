'use strict'

import thunkify from '../utils/thunkify';
import config from './config';

const geocoder = require('node-geocoder')('google', 'https', {
  apiKey: process.env.GOOGLE_GEOCODE_API_KEY || config.GOOGLE_GEOCODE_API_KEY
});

export default {
  getGeoCode: thunkify(geocoder.geocode.bind(geocoder))
}
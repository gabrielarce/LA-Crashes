const mongoose = require('mongoose');

const crashSchema = new mongoose.Schema(
  {
    COLLISION_DATE: Date,
    COLLISION_TIME: String,
    DAY_OF_WEEK: Number,
    INTER: String,
    WEATHER: String,
    STATE_HWY_IND: String,
    COLLISION_SEVERITY: Number,
    NUMBER_KILLED: Number,
    NUMBER_INJURED: Number,
    PARTY_COUNT: Number,
    PRIMARY_COLL_FACTOR: String,
    HIT_AND_RUN: String,
    TYPE_OF_COLLISION: String,
    PED_ACTION: String,
    ROAD_COND_1: String,
    LIGHTING: String,
    PEDESTRIAN_ACCIDENT: String,
    POINT_X: { type: Number, double: true, require: true },
    POINT_Y: { type: Number, double: true, require: true },
  },
  { collection: 'crashes' }
);

module.exports = mongoose.model('crash', crashSchema);

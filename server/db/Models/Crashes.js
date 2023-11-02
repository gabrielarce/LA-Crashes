const mongoose = require('mongoose');

const crashSchema = new mongoose.Schema(
  {
    COLLISION_DATE: {
      type: Date,
      required: true,
    },
    collision_time: {
      type: String,
      required: true,
    },
    day_of_week: {
      type: Number,
      required: true,
    },
    direction: String,
    inter: {
      type: String,
      default: 'Y',
    },
    weather_1: String,
    state_hwy_ind: {
      type: String,
      default: 'N',
    },
    state_route: Number,
    collision_severity: {
      type: Number,
      required: true,
    },
    number_killed: {
      type: Number,
      default: 0,
    },
    number_injured: {
      type: Number,
      default: 0,
    },
    party_count: {
      type: Number,
      required: true,
    },
    primary_coll_factor: String,
    hit_and_run: {
      type: String,
      default: 'N',
    },
    type_of_collision: String,
    ped_action: String,
    road_cond_1: String,
    lighting: String,
    pedestrian_accident: {
      type: Boolean,
      default: false,
    },
    bicycle_accident: {
      type: Boolean,
      default: false,
    },
    motorcycle_accident: {
      type: Boolean,
      default: false,
    },
    truck_accident: {
      type: Boolean,
      default: false,
    },
    alcohol_involved: {
      type: Boolean,
      default: false,
    },
    point_x: {
      type: Number,
      required: true,
    },
    point_y: {
      type: Number,
      required: true,
    },
  },
  { collection: 'crashes' }
);

module.exports = mongoose.model('Crash', crashSchema);

// This file is created by egg-ts-helper@1.34.7
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportRobot = require('../../../app/middleware/robot');

declare module 'egg' {
  interface IMiddleware {
    robot: typeof ExportRobot;
  }
}

/* eslint valid-jsdoc: "off" */

'use strict';

// if any files need rotate by file size, config here
exports.logrotator = {
  filesRotateByHour: [], // list of files that will be rotated by hour
  hourDelimiter: '-', // rotate the file by hour use specified delimiter
  filesRotateBySize: [], // list of files that will be rotated by size
  maxFileSize: 50 * 1024 * 1024, // Max file size to judge if any file need rotate
  maxFiles: 10, // pieces rotate by size
  rotateDuration: 60000, // time interval to judge if any file need rotate
  maxDays: 31, // keep max days log files, default is `31`. Set `0` to keep all logs
};

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1568000902769_6331';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};

const {exec} = require('child_process');
const argv = require('minimist')(process.argv.slice(2));
let simulator_uid = null;

if (argv?.simulator) {
  exec('xcrun simctl list --json', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    const devicesRaw = JSON.parse(stdout).devices;

    const devicesArray = Object.values(devicesRaw).flat();

    const matchedDevice = devicesArray.find(
      device =>
        device.name === argv.simulator || device.udid === argv.simulator,
    );

    if (matchedDevice) {
      simulator_uid = matchedDevice.udid;
      console.log(
        `Found simulator ${matchedDevice.name} with uuid ${matchedDevice.udid}`,
      );
      return;
    }
    console.log(
      `Could not find simulator ${argv.simulator} in list of simulators`,
    );
  })
    .on('close', () => {
      exec(
        `open -a simulator ${
          simulator_uid ? `--args -CurrentDeviceUDID ${simulator_uid}` : ''
        }`,
      );
    })
    .on('error', err => {
      console.error('\x1b[41m\x1b[37m%s\x1b[0m', 'error', ':', err);
    });
} else {
  console.log('No simulator specified, using default simulator');
  exec(`open -a simulator`);
}

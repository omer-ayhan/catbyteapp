const {exec} = require('child_process');
const argv = require('minimist')(process.argv.slice(2));

if (argv?.emulator) {
  const args = argv?.args ? argv.args.split(',').join(' ') : '';
  exec(`emulator -avd ${argv.emulator} ${args}`)
    .on('error', err => {
      console.error('\x1b[41m\x1b[37m%s\x1b[0m', 'error', ':', err);
    })
    .on('exit', code => {
      if (code !== 0) {
        console.error(
          '\x1b[41m\x1b[37m%s\x1b[0m',
          'error',
          ':',
          'emulator exited with code',
          code,
        );
      }
    });
} else {
  console.log(
    '\x1b[41m\x1b[37m%s\x1b[0m',
    'error',
    ':',
    'Please specify an emulator name to run \n e.g. android-emulator --emulator=<emulator name>',
  );
}

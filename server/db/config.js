const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://gabrielarce:C0VSX1Nr0p8Hy7NT@la-crashes-2022.xarb55r.mongodb.net/LA-Crashes-2022?retryWrites=true&w=majority',
      {
        dbName: 'LA-Crashes-2022',
      }
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
module.exports = connectDB;

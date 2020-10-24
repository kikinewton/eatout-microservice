import mongoose from "mongoose";

type TInput = {
    db: string;
}

export default ({db}: TInput) => {
  const connect = () => {
    mongoose
      .connect(db, { useNewUrlParser: true })
      .then(() => {
        return console.info("Connect to db");
      })
      .catch((error) => {
        console.error("Error", error);
        return process.exit(1);
      });
  };
  connect();
  mongoose.connection.on('disconnected', connect)
};



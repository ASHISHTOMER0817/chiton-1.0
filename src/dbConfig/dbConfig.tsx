import mongoose from "mongoose";
export default async function DatabaseConnection() {
	try {
		if (process.env.MONGODB_URL !== undefined) {
			await mongoose
				.connect(process.env.MONGODB_URL)
				.then(() => console.log("the MONGODB is connected"));
			const connection = mongoose.connection;
			connection.on("connected", () => {
				console.log("MongoDB connected successfully");
			});
			connection.on("error", (err) => {
				console.log(
					"MongoDB connection error. Please make sure MongoDB is running." +
						err
				);
				process.exitCode = 1;
			});
		}
	} catch (error) {
		console.log("connection break...", error);
	}
}

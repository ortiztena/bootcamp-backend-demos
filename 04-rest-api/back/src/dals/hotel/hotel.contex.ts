import mongoose, { Schema, SchemaDefinition } from "mongoose";
import { Hotel } from "./hotel.model";


const hotelSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true },
    name: { type: Schema.Types.String, required: true },
    summary: { type: Schema.Types.String, required: true },
    bedrooms: { type: Schema.Types.Number, required: true },
    beds: { type: Schema.Types.Number, required: true },
    bathrooms: { type: Schema.Types.Number, required: true },
    images: { type: Schema.Types.Mixed, required: true },
    address: { type: Schema.Types.String, required: true },
    reviews: { type: Schema.Types.Array, required: true },

} as SchemaDefinition<Hotel>);

export const hotelContext = mongoose.model<Hotel>("Hotel", hotelSchema);

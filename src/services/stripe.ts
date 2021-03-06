import Stripe from "stripe";
import { version as Version } from "../../package.json";

export const stripe = new Stripe(process.env.STRIPE_KEY, {
  apiVersion: "2020-08-27",
  appInfo: {
    name: "ig.news",
    version: Version,
  },
});

import { bucket } from "../data/site.yaml";
 
// change provided srcs (png & mp4) to external bucket location for production.
export const transformSrc = (src, dir = "") => {
  if (src.endsWith(".mp4")) {
    // Hack to make preview images show on Safari
    src = src + "#t=0.001";
  }//change it https testing for github
  if (src.startsWith("http")) {
    return src;
  } else if (
    process.env.NODE_ENV === "production" &&
    process.env.NEXT_PUBLIC_NETLIFY_CONTEXT === "production" && // Not a deploy preview
    !src.endsWith("svg")
  ) {
    // return bucket + dir + src;
    return dir + src;
  } else {
    return dir + src;
  }
};
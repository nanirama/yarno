const Imgix = path => {
  return process.env.IMGIX_HOST + path;
};
export default Imgix;

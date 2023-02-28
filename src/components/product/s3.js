import S3 from "aws-sdk/clients/s3";
import { v4 as uuidv4 } from "uuid";

const s3client = new S3({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
});

export const imageUpload = async (imageFile, folder, callback) => {
  const ext = imageFile.name.split(".").pop();
  const imageName = uuidv4() + "." + ext;
  const param = {
    Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
    Key: folder + "/" + imageName,
    Expires: 60,
  };
  const uploadURL = await s3client.getSignedUrlPromise("putObject", param);

  await fetch(uploadURL, {
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: imageFile,
  });

  // const imageUrl =
  //   const imageUrl = imageFile;
  imageFile.imageUrl = uploadURL.split("?")[0];
  callback(imageFile);
  return imageFile;
};

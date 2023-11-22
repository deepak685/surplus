import AWS  from "aws-sdk";

AWS.config.update({
  maxRetries: 3,
  httpOptions: { timeout: 30000, connectTimeout: 5000 },
  region: "ap-south-1",
  accessKeyId: "AKIA3SABUUHKIXABJ5JV",
  secretAccessKey: "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",
});

let s3 = new AWS.S3();

export async function s3Uploader(data) {
  return new Promise((resolve, reject) => {
    var params = {
      Bucket: "trade-platform",
      // folder: "eanMaster",
      // Key: `eanMasters/${data.originalname}`,
      Key: data.originalname,
      Body: data.buffer,
      //ACL: 'public-read'
    };

    s3.upload(params, async function (err, data) {
      if (err) {
        reject(err);
      } else {
        // console.log(data , data.Location);
        resolve(data.Location);
      }
    });
  });
}

const S3 = require('aws-sdk/clients/s3')

const s3 = new S3({
    Bucket: 'elasticbeanstalk-eu-central-1-182621062717'
})

function getFile(fileKey) {
    const downloadParams = {
        Key: fileKey,
        Bucket: 'elasticbeanstalk-eu-central-1-182621062717'
    }
    return s3.getObject(downloadParams)
}

exports.getFile = getFile
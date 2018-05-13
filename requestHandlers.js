
function start() {
    console.log("Request handler 'start' wall called.");
    return "Hello Start";
}

function upload() {
    console.log("Request handler 'upload' wall called.");
    return "Hello Upload";

}

exports.start = start;
exports.upload = upload;

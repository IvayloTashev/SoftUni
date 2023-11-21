function extractFile(str) {

    let filePath = str.split(`\\`).pop();

    let index = filePath.lastIndexOf(`.`);

    let fileName = filePath.slice(0, index);
    let fileType = filePath.slice(index + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileType}`);

}

extractFile('C:\\Internal\\training-internal\\Template.pptx')
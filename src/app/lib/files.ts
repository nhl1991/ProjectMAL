

export const saveJsonToFile = async (data: any, filename: string) => {

    const path = require('path');

    const json = JSON.stringify(data, null, 2);
    const isSeason = data.season != undefined ? true : false
    const directoryPath = isSeason ? path.join(`src/MAL/season/${data.season.year}`) : path.join(`src/MAL/ranking`);

    const filePath = path.join(directoryPath, filename);

    saveFile(directoryPath, filePath, json);

}

export const saveDetails = async (data: any, filename: string) => {

    const path = require('path');

    const json = JSON.stringify(data, null, 2);
    const directoryPath = path.join(`src/MAL/details/`) 

    const filePath = path.join(directoryPath, filename);

    saveFile(directoryPath, filePath, json);

}


const saveFile = (directoryPath:string, filePath:string, json:any) => {
    const fs = require('fs');

    fs.open(filePath, fs.constants.R_OK, async (err:string) => {
        if (err) { 
            //When file is not exists.

            console.log(`${filePath} 의 파일이 존재하지 않습니다.`);

            fs.mkdir(directoryPath, { recursive: true }, (err: any) => {
                if (err) {
                    console.error('디렉토리 생성 중 오류가 발생했습니다:', err);
                    return;
                }
                console.log('디렉토리가 생성 되었습니다.')
                fs.writeFile(filePath, json, { encoding: 'utf-8', flag: 'w' }, (err: any) => {
                    if (err) {
                        console.error('파일 저장 중 오류가 발생했습니다:', err);
                        return;
                    }

                    console.log(`JSON 파일이 ${filePath}에 성공적으로 저장되었습니다.`);
                })
            });
            return;
        }

        //When file is exist
        console.log('File already exists.');
        //const currentData = json;
        fs.readFile(filePath, { encoding: 'utf-8', flag: 'r+' }, (err: any, data:string) => {
            console.log(typeof data);
            if (err) {
                console.log('fs.open failed. ', err);
                return;
            }
            const dataStringify = JSON.stringify(JSON.parse(data), null, 2)

            //Comparing local data and fetched data 
            if (dataStringify === data) {
                console.log('업데이트가 필요 없습니다.');
                return;

            } else {
                console.log('업데이트가 필요합니다.');

                fs.writeFile(filePath, json, { encoding: 'utf-8', flag: 'w' }, (err: any) => {
                    if (err) {
                        console.error('파일 저장 중 오류가 발생했습니다:', err);
                        return;
                    }

                    console.log(`${filePath}가 성공적으로 수정되었습니다.`);
                })
            }
        })


    })
}
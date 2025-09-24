import React from "react";
import * as XLSX from "xlsx";
import { Upload, message, Icon, } from "antd";
import { useState } from "react";
import styled from "../../../../../styles/data/import.scss";

const { Dragger } = Upload;

function UploadFileList({
    list,
    handleRemove
}) {

    return (
        <div
            className={styled["file-list"]}
        >
            {
                list.map(({ name, uid }) => (
                    <div
                        key={uid}
                        className={styled["file-list-item"]}
                    >
                        <div>
                            <Icon type="link" />
                            &nbsp;&nbsp;{name}
                        </div>
                        <Icon type="delete"
                            onClick={handleRemove.bind(null, uid)}
                        />
                    </div>
                ))
            }
        </div>
    );
}

export function UploadFile({
    fileList,
    setFileList,
    setData
}) {


    const [loadType, setLoadType] = useState(null);


    function handleRemove(uid) {
        setFileList(list => list.filter(i => i.uid !== uid));
        setLoadType(null);
        message.success("Deleted successfully!");
    }

    function handleUpload(files) {
        const reader = new FileReader();

        reader.onload = event => {
            try {
                const { result } = event.target;
                const workbook = XLSX.read(result, {
                    type: "binary"
                });

                let data = [];

                for (const sheet in workbook.Sheets) {
                    if (Object.prototype.hasOwnProperty.call(workbook.Sheets, sheet)) {
                        data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));

                        break;
                    }
                }
                
                setLoadType({
                    type: "done",
                    text: `${files.name} upload completed!`
                });
                setFileList(list => [...list, files])
                message.success("File upload completed!");

                setData(data);
            } catch (error) {
                message.warn("Incorrect file type!");

                setLoadType({
                    type: "done",
                    text: `${files.name} incorrect file type!`
                });
            }
        }

        reader.readAsBinaryString(files);

        return false;
    }


    function handleChange(info) {
        setLoadType({
            type: "load",
            text: `Uploading ${info.file.name}`
        });
    }

    const Status = loadType === null ? "" : loadType.type === "done" ? loadType.text : (<>{loadType.text}<span className={styled["dot-ani"]} /></>)

    return (
        <div className={styled["upload-file"]}>
            <Dragger
                accept=".xlsx, .xls"
                beforeUpload={handleUpload}
                fileList={fileList}
                showUploadList={false}
                onChange={handleChange}
                disabled={fileList.length !== 0}
            >
                <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">
                    Click to upload files or drag files here
                </p>
                <p className="ant-upload-hint">
                    Supports uploading xlsx and xls format files. When data is large, the page may freeze temporarily, please wait patiently
                </p>
                <p className={styled["upload-status"]}>
                    {Status}
                </p>
            </Dragger>
            <UploadFileList
                list={fileList}
                handleRemove={handleRemove}
            />
        </div>
    );
}   
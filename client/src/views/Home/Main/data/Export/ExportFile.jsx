import React from "react";
import styled from "../../../../../styles/data/export.scss";
import { Button, Icon, Spin, Result } from "antd";

export function ExportFile({
    status,
    startExport,
    dataType,
    reset
}) {

    const config = [
        {
            status: "ready",
            component: (
                <Button size="large" type="primary" onClick={startExport}>
                    <Icon type="download" />
                    Start Export
                </Button>)
        },
        {
            status: "downloading",
            component: (
                <Spin
                    size="large"
                    tip={`Exporting ${dataType}, please wait...`}
                    indicator={<Icon type="loading" style={{ fontSize: 48 }} spin />}
                />
            )
        },
        {
            status: "failed",
            component: (
                <Result
                    status="error"
                    title={`${dataType} export failed!`}
                    extra={[
                        <Button onClick={startExport} key="restart" type="primary">Re-export</Button>
                    ]}
                />
            )
        },
        {
            status: "done",
            component: (
                <Result
                    status="success"
                    title={`${dataType} export successful!`}
                    extra={[
                        <Button onClick={reset} key="reset" type="primary">继续导出</Button>
                    ]}
                />
            )
        }
    ];

    const { component } = config.find(i => i.status === status);

    return (
        <div className={styled["data-content-export"]}>
            {component}
        </div>
    );
}
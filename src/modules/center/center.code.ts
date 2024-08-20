export const flexCode: string =
`.flex {
    display: flex;
    align-items: center;
    justify-content: center;
}`;

export const tableCode: string =
`.table {
    display: table;
    .cell {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
    }
}`;

export const absoluteCode: string =
`&.relative {
    position: relative;
    div.absolute {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}`;

export const absoluteMarginAutoCode: string =
`&.relative {
    position: relative;
    div.absolute-margin-auto {
        width: 20px;
        height: 20px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }
}`;

export type Block = {
    type: string;
    data: TextBlock | HeaderBlock;
    cover: boolean;
    hidden: boolean;
    anchor: string;
};

export type HeaderBlock = {
    text: string;
    style: string;
};

export type TextBlock = {
    text: string;
    text_truncated: string;
};

export type DelimiterBlock = {
    type: string;
};

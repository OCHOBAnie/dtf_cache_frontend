export type Block = {
    type: string;
    data: TextBlock | HeaderBlock | DelimiterBlock | LinkBlock;
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

export type LinkBlock = {
    link: LinkClass;
};

export interface LinkClass {
    type: string;
    data: LinkData;
};

export interface LinkData {
    url:         string;
    title:       string;
    description: string;
    image:       Image;
    v:           number;
};

export interface Image {
    type: string;
    data: ImageData;
};

export interface ImageData {
    uuid:             string;
    width:            number;
    height:           number;
    size:             number;
    type:             string;
    color:            string;
    hash:             string;
    external_service: [];
};

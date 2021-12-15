export type Block = {
    type: string;
    data: TextBlock | HeaderBlock | DelimiterBlock | LinkBlock | MediaBlock | VideoBlock | AudioBlock;
    cover: boolean;
    hidden: boolean;
    anchor: string;
};

export interface EntryData {
    url:         string;
    authors:     Author[];
    date:        number;
    title:       string;
    isEditorial: boolean;
}

export interface Author {
    type:       string;
    url:        string;
    name:       string;
    avatar_url: string;
}

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

export interface MediaBlock {
    items:           MediaItem[];
    with_background: boolean;
    with_border:     boolean;
}

export interface MediaItem {
    title:  string;
    author: string;
    image:  Image;
}

export interface VideoBlock {
    video: VideoClass;
    title: string;
}

export interface VideoClass {
    type: string;
    data: VideoData;
}

export interface VideoData {
    thumbnail:        Image;
    width:            number;
    height:           number;
    time:             number;
    external_service: ExternalService;
}

export interface ExternalService {
    name: string;
    id:   string;
}

export interface AudioBlock {
    title: string;
    hash:  string;
    image: null | Image;
    audio: AudioClass;
}

export interface AudioClass {
    type: string;
    data: Data;
}

export interface Data {
    uuid:       string;
    filename:   string;
    size:       number;
    audio_info: AudioInfo;
}

export interface AudioInfo {
    bitrate:       number;
    duration:      number;
    channel:       string;
    framesCount:   number;
    format:        string;
    listens_count: number;
}

class Artist{
    externalUrls!: ExternalUrls;
    id!: string;
    name!: string;
    type!: string;
    uri!: string;
}
class Copyright{
    text!: string;
    type!: string;
}
class ExternalIds{
    upc!: string;
}
class ExternalUrls{
    spotify!: string;
}
class Image{
    height!: number;
    url!: string;
    width!: number;
}
class Item{
    artists!: Array<Artist>;
    discNumber!: number;
    durationMs!: number;
    explicit!: boolean;
    externalUrls!: ExternalUrls;
    id!: string;
    isLocal!: boolean;
    isPlayable!: boolean;
    name!: string;
    previousUrl!: string;
    trackNumber!: number;
    type!: string;
    uri!: string;
}
class Tracks{
    items!: Array<Item>;
    limit!: number;
    next!: object;
    offset!: number;
    previous!: object;
    total!: number;
}




export class album{
    albumType!: string;
    artists!: Array<Artist>;
    copyrights!: Array<Copyright>;
    externalIds!: ExternalIds;
    externalUrls!: ExternalUrls;
    genres!: Array<object>;
    id!: string;
    images!: Array<Image>;
    label!: string;
    name!: string;
    popularity!: number;
    releaseDate!: string;
    releaseDatePrecision!: string;
    totalTracks!: number;
    tracks!: Tracks;
    type!: string;
    uri!: string;

}
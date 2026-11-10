export type GetTracksResponse = {
    data: Track[];
    meta: Meta;
    included: IncludedArtist[];
};

export type Track = {
    id: string;
    type: 'tracks';
    attributes: TrackAttributes;
    relationships: TrackRelationships;
};

export type TrackAttributes = {
    title: string;
    addedAt: string;
    likesCount: number;
    attachments: Attachment[];
    images: TrackImages;
    user: User;
    currentUserReaction: number;
    isPublished: boolean;
    publishedAt: string;
    duration: number;
};

export type Attachment = {
    id: string;
    addedAt: string;
    updatedAt: string;
    version: number;
    url: string;
    contentType: string;
    originalName: string;
    fileSize: number;
};

export type TrackImages = {
    main: TrackImage[];
};

export type TrackImage = {
    type: string;
    width: number;
    height: number;
    fileSize: number;
    url: string;
};

export type User = {
    id: string;
    name: string;
};

export type TrackRelationships = {
    artists: {
        data: ArtistRelationship[];
    };
};

export type ArtistRelationship = {
    id: string;
    type: string;
};

export type Meta = {
    page: number;
    pageSize: number;
    totalCount: number;
    pagesCount: number;
    nextCursor: string | null;
};

export type IncludedArtist = {
    id: string;
    type: string;
    attributes: {
        name: string;
    };
};

export type GetTrackResponse = {
    data: {
        id: string;
        type: 'tracks';
        attributes: GetTrackAttributes;
    };
};
export interface GetTrackAttributes extends TrackAttributes {
    lyrics: string;
    releaseDate: string;
    updatedAt: string;
    tags: {
        id: string;
        name: string;
    }[];
    artists: {
        id: string;
        name: string;
    }[];
}

export interface ThemeView {
    title: string,
    date: string,
    creatorUsername: string,
    subsCount: number
}

export interface Theme {
    subscribers: string[],
    posts: string[],
    _id: string,
    themeName: string,
    userId: Object,
    created_at: string,
    updatedAt: string,
    __v: number;
}
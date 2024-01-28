import galleriesData from "@/assets/galleries.json";

export interface GallerySummary {
    path: string;
    title: string;
    cover: string;
}

export interface GalleryItem {
    srcHigh: string;
    srcMedium: string;
    subHtml?: string;
    size?: string;
    ratio?: number;
}

export const GalleriesWrapper = {
    getPaths(): Array<string> {
        return galleriesData.map((gallery) => gallery.path);
    },

    getSummaries(): Array<GallerySummary> {
        return galleriesData.map((gallery) => {
            return {
                path: gallery.path,
                title: gallery.title,
                cover: gallery.cover,
            };
        });
    },

    getTitle(key: string): string | undefined {
        const gallery = galleriesData.find((gallery) => gallery.path === key);
        if (!gallery) {
            return undefined;
        }
        return gallery.title;
    },

    getGalleryGrid(key: string): GalleryItem[][] {
        const gallery = galleriesData.find((gallery) => gallery.path === key);
        if (!gallery) {
            return [];
        }
        return gallery.grid;
    },
};

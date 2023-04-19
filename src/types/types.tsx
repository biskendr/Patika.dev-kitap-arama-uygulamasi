// Definition of the BookList interface
export interface BookList {
  items: BookItem[];
  kind: string;
  totalItems: number;
}
// Definition of the BookItem interface
export interface BookItem {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    description?: string;
    authors: string[];
    publishedDate: string;
    industryIdentifiers: {
      type: string;
      identifier: string;
    }[];
    readingModes: {
      text: boolean;
      image: boolean;
    };
    pageCount: number;
    printType: string;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    imageLinks?: {
      smallThumbnail: string;
      thumbnail: string;
    };
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  };
  saleInfo: {
    country: string;
    saleability: string;
    isEbook: boolean;
  };
  accessInfo: {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: {
      isAvailable: boolean;
    };
    pdf: {
      isAvailable: boolean;
    };
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
  };
}

declare module 'apollo-upload-client' {
    import { ApolloLink } from '@apollo/client';
  
    export function createUploadLink(options: any): ApolloLink;
  
    export interface Upload {
      // Add any specific types you expect for the Upload interface, or leave it as `any` for now
      [key: string]: any;
    }
  }
  
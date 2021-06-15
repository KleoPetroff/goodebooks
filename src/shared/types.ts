export interface GoodreadsMeta {
  title: string
  author: string
  targetElement: HTMLDivElement
}

export interface ChromeContentRequest {
  title: string
  type: Integrations
}

export enum Integrations {
  CHITANKA
}

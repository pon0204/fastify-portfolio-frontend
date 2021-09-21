export interface Chat {
  isMe: boolean
  text: string,
}
export interface Chats {
  chats: Chat[]
}

export interface editedRoom {
  title: string
  purpose: string
  myName: string
  partnerName: string
  myPhotoURL: string
  partnerPhotoURL: string
  // myPhoto:{name: string, lastModified: number}
  // partnerPhoto:{name: string, lastModified: number}
}
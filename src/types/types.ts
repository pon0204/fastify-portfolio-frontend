export interface Chat {
  userName: string,
  text: string,
  isMe: boolean

}
export interface Chats {
  chats: Chat[]
}
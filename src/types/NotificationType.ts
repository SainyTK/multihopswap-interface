export type NotificationType = {
    id?: number,
    type: 'success' | 'error',
    message: string,
    link?: string
}
export const avatars: string[] = [
    '/assets/01-avatar.png',
    '/assets/02-avatar.png',
    '/assets/03-avatar.png',
    '/assets/04-avatar.png',
    '/assets/05-avatar.png',
    '/assets/06-avatar.png',
]

const showAvatar = (num: number) => {
    return avatars[num];
}

export default showAvatar;
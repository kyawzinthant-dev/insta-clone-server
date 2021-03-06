export const COMMENT_FRAGMENT = `
    fragment CommentParts on Comment{
        user{
            ${USER_FRAGMENT}
        }
    }
`;

export const USER_FRAGMENT = `
    fragment UserParts on User{
        id
        username
    }
`;

export const FILE_FRAGEMENT = `
    fragment FileParts on File{
        id
        url
    }
`;

export const FULL_POST_FRAGMENT = `
    fragment PostParts on Post{
        id
        location
        caption
        files{
           id
           url
        }
        comments{
            id
            text
            user{
                id
                username
                avatar
            }
        }
        user{
           id
           username
           avatar
        }
    }
`;

export const ROOM_FRAGMENT = `
    fragment RoomParts on Room{
        id
        participants {
            id
            username
            avatar
        }
        messages {
            id
            text
            to{
                id
                username
                avatar
            }
            from{
                id
                username
                avatar
            }
        }
    }
`;
